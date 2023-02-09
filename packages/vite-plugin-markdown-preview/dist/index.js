/**
 * name: vite-plugin-markdown-preview
 * version: 1.0.3
 */

// src/index.ts
import fs from "node:fs";
import path from "node:path";

// src/remark.ts
import { visit } from "unist-util-visit";
import { fromMarkdown } from "mdast-util-from-markdown";
import { toMarkdown } from "mdast-util-to-markdown";
import { frontmatterFromMarkdown, frontmatterToMarkdown } from "mdast-util-frontmatter";
function praseMeta(meta) {
  const metaArr = (meta || "").split(" ");
  const ret = {};
  for (const m of metaArr) {
    const [key, val] = m.split("=", 2);
    ret[key] = val || true;
  }
  return ret;
}
function remarkDemoBlock(id, code, config) {
  const tree = fromMarkdown(code, {
    mdastExtensions: [frontmatterFromMarkdown(["yaml", "toml"])]
  });
  const blocks = {};
  visit(tree, "code", (node, index, parent) => {
    const i = Object.keys(blocks).length;
    const lang = (node.lang || "").split(":")[0];
    const meta = praseMeta(node.meta);
    const preview = meta["preview"];
    const isDemo = preview && lang === "vue";
    if (isDemo) {
      const name = `DemoBlockI${i}`;
      blocks[name] = node.value;
      parent.children.splice(
        index,
        1,
        {
          type: "html",
          value: `<MarkdownPreview 
lang="${decodeURIComponent(node.lang || "")}" 
meta="${decodeURIComponent(node.meta || "")}" 
code="${encodeURIComponent(node.value)}"
component="${typeof preview === "string" ? preview : config.component}"
>
<${name}/>
<template #code>`
        },
        node,
        {
          type: "html",
          value: "\n</template></MarkdownPreview>"
        }
      );
      return index + 3;
    }
  });
  if (Object.keys(blocks).length > 0) {
    tree.children.push({
      type: "html",
      value: `<script setup>

      import MarkdownPreview from 'vite-plugin-markdown-preview/component'
      ${Object.keys(blocks).map((k) => `import ${k} from "${id}.${k}.vue";`).join("\n")}
<\/script>`
    });
    const code2 = toMarkdown(tree, {
      extensions: [frontmatterToMarkdown(["yaml", "toml"])]
    });
    return { code: code2, blocks };
  }
  return { code, blocks };
}

// src/index.ts
var CODE_VUE_REGEXP = /.md.DemoBlockI\d{1,4}\.vue$/;
var DemoBlockMap = /* @__PURE__ */ new Map();
function MarkdownPreview(options) {
  let vuePlugin = null;
  let envType;
  const config = Object.assign(
    { component: "CodePreview", type: "vite", root: "" },
    options
  );
  return {
    name: "vite:markdown-preview",
    enforce: "pre",
    async configResolved(cfg) {
      const isVitepress = cfg.plugins.find((p) => p.name === "vitepress");
      vuePlugin = cfg.plugins.find((p) => p.name === "vite:vue");
      envType = isVitepress ? "vitepress" : "vite";
      config.root = cfg.root;
      config.type = envType;
    },
    resolveId(id) {
      if (CODE_VUE_REGEXP.test(id)) {
        return id;
      }
    },
    async load(id) {
      if (CODE_VUE_REGEXP.test(id)) {
        const blockId = "/" + path.relative(config.root, id);
        const demoCode = DemoBlockMap.get(id) || DemoBlockMap.get(blockId);
        return demoCode;
      }
      if (id.endsWith(".md")) {
        const { code, blocks } = remarkDemoBlock(id, fs.readFileSync(id, "utf8"), config);
        for (const k of Object.keys(blocks)) {
          const blockKey = `${id}.${k}.vue`;
          const blockId = "/" + path.relative(config.root, blockKey);
          DemoBlockMap.set(blockId, blocks[k]);
        }
        return code;
      }
    },
    async handleHotUpdate(ctx) {
      const { file, server, timestamp } = ctx;
      const { moduleGraph } = server;
      server.moduleGraph;
      if (file.endsWith(".md")) {
        const { blocks } = remarkDemoBlock(file, fs.readFileSync(file, "utf8"), config);
        const updates = [];
        for (const k of Object.keys(blocks)) {
          const blockKey = `${file}.${k}.vue`;
          const blockId = "/" + path.relative(config.root, blockKey);
          DemoBlockMap.set(blockId, blocks[k]);
          const mod = moduleGraph.getModuleById(blockId);
          if (mod) {
            const ret = await vuePlugin.handleHotUpdate({
              file: blockId,
              timestamp,
              modules: [mod],
              read: () => blocks[k],
              server
            });
            updates.push(...ret);
          }
        }
        if (updates.length > 0) {
          return updates.filter(Boolean);
        }
      }
    }
  };
}
var src_default = MarkdownPreview;
export {
  MarkdownPreview,
  src_default as default
};
//# sourceMappingURL=index.js.map