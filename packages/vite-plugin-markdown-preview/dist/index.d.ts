import { Plugin } from 'vite';

type MarkdownPreviewOptions = {
    component?: string;
};
type MarkdownPreviewConfig = {
    root: string;
    component: string;
    type: 'vite' | 'vitepress';
};
declare function MarkdownPreview(options?: MarkdownPreviewOptions): Plugin;

export { MarkdownPreview, MarkdownPreviewConfig, MarkdownPreviewOptions, MarkdownPreview as default };
