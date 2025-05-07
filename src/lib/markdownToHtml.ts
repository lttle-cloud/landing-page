import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";

export default async function markdownToHtml(markdown: string) {
    const result = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeFormat)
        .use(rehypeHighlight, {
            languages: {
                typescript: require("highlight.js/lib/languages/typescript"),
                javascript: require("highlight.js/lib/languages/javascript"),
                bash: require("highlight.js/lib/languages/bash"),
                shell: require("highlight.js/lib/languages/shell"),
                s: require("highlight.js/lib/languages/x86asm"),
                c: require("highlight.js/lib/languages/c"),
                css: require("highlight.js/lib/languages/css"),
                html: require("highlight.js/lib/languages/xml"),
                json: require("highlight.js/lib/languages/json"),
                python: require("highlight.js/lib/languages/python"),
                java: require("highlight.js/lib/languages/java"),
                csharp: require("highlight.js/lib/languages/csharp"),
                go: require("highlight.js/lib/languages/go"),
                ruby: require("highlight.js/lib/languages/ruby"),
                php: require("highlight.js/lib/languages/php"),
                swift: require("highlight.js/lib/languages/swift"),
                rust: require("highlight.js/lib/languages/rust"),
            },
        })
        .use(rehypeStringify)
        .process(markdown);

    return result.toString();
}
