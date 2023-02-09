/**
 * name: vite-plugin-markdown-preview
 * version: 1.0.3
 */
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  MarkdownPreview: () => MarkdownPreview,
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var import_node_fs = __toESM(require("fs"), 1);
var import_node_path = __toESM(require("path"), 1);

// src/remark.ts
var import_unist_util_visit = require("unist-util-visit");
var import_mdast_util_from_markdown = require("mdast-util-from-markdown");
var import_mdast_util_to_markdown = require("mdast-util-to-markdown");
var import_mdast_util_frontmatter = require("mdast-util-frontmatter");
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
  const tree = (0, import_mdast_util_from_markdown.fromMarkdown)(code, {
    mdastExtensions: [(0, import_mdast_util_frontmatter.frontmatterFromMarkdown)(["yaml", "toml"])]
  });
  const blocks = {};
  (0, import_unist_util_visit.visit)(tree, "code", (node, index, parent) => {
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
    const code2 = (0, import_mdast_util_to_markdown.toMarkdown)(tree, {
      extensions: [(0, import_mdast_util_frontmatter.frontmatterToMarkdown)(["yaml", "toml"])]
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
        const blockId = "/" + import_node_path.default.relative(config.root, id);
        const demoCode = DemoBlockMap.get(id) || DemoBlockMap.get(blockId);
        return demoCode;
      }
      if (id.endsWith(".md")) {
        const { code, blocks } = remarkDemoBlock(id, import_node_fs.default.readFileSync(id, "utf8"), config);
        for (const k of Object.keys(blocks)) {
          const blockKey = `${id}.${k}.vue`;
          const blockId = "/" + import_node_path.default.relative(config.root, blockKey);
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
        const { blocks } = remarkDemoBlock(file, import_node_fs.default.readFileSync(file, "utf8"), config);
        const updates = [];
        for (const k of Object.keys(blocks)) {
          const blockKey = `${file}.${k}.vue`;
          const blockId = "/" + import_node_path.default.relative(config.root, blockKey);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MarkdownPreview
});
//# sourceMappingURL=index.cjs.map