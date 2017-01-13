
'use strict';

module.exports = [
  {
    it: `should return '' when there is no input.`,
    input: ``,
    output: ``,
  },
  {
    it: `should return no first segment and no formatting`,
    input: `Select projects to show`,
    output: `Select projects to show`,
  },
  // Escape HTML characters!
  {
    it: `should escape html tags`,
    input: `Select <projects to> 'show"`,
    output: `Select &lt;projects to&gt; 'show&quot;`,
  },
  // First segment is an URL
  {
    it: `should output simple url on first segment`,
    input: `/report – Select projects to show`,
    output: `<span class="segment-url">/report</span> Select projects to show`,
  },
  {
    it: `should output url on first segment`,
    input: `/projects/:id – Only load items from -365 days with option to show all`,
    output: `<span class="segment-url">/projects/:id</span> Only load items from -365 days with option to show all`,
  },
  {
    it: `should output url on first segment, only separators`,
    input: `/ projects/:id – Only load items from -365 days with option to show all`,
    output: `<span class="segment-url">/</span> projects/:id <span class="separator-sign">–</span> Only load items from -365 days with option to show all`,
  },
  // First segment is an HTML tag
  {
    it: `should output segment-html on first segment`,
    input: `<days-indication> – Fix bug with semicolins inside object (?) which only occured when building`,
    output: `<span class="segment-html">&lt;days-indication&gt;</span> Fix bug with semicolins inside object (?) which only occured when building`,
  },
  {
    it: `should output segment-html on first segment`,
    input: `<days-indication/> – Fix bug with semicolins inside object (?) which only occured when building`,
    output: `<span class="segment-html">&lt;days-indication/&gt;</span> Fix bug with semicolins inside object (?) which only occured when building`,
  },

  //
  // Second argument
  //

  // Second segment contains <code>code</code> with backticks (can be escaped with \`)
  {
    it: `should output <code> text around backtick-blocks`,
    input: `This is a \`code\` which rules the world.`,
    output: `This is a <code>code</code> which rules the world.`,
  },
  {
    it: `should output <code> text around backtick-blocks - incl. escaped backtick!`,
    input: `This is a \`a largeeeeee \\\` code\` with an escaped backtick.`,
    output: `This is a <code>a largeeeeee &#96; code</code> with an escaped backtick.`,
  },
  {
    it: `should output <code> text around backtick-blocks - incl. escaped backticks!`,
    input: `This \\\` is a \`a largeeeeee \\\` code\` with \`escaped\` \`\\\`\` backticks.\\\``,
    output: `This &#96; is a <code>a largeeeeee &#96; code</code> with <code>escaped</code> <code>&#96;</code> backticks.&#96;`,
  },
  // Second segment contains <html-element>...
  {
    it: `should output <html-elements />!`,
    input: `This is an important <html-element>, <not a element!!>, <another/>, <anotherrrr-yeah /> or thisssss <a>`,
    output: `This is an important <code>&lt;html-element&gt;</code>, &lt;not a element!!&gt;, <code>&lt;another/&gt;</code>, <code>&lt;anotherrrr-yeah /&gt;</code> or thisssss <code>&lt;a&gt;</code>`,
  },
  // Second segment contains <mark>mark</mark> with equal sign (can be escaped with \`)
  {
    it: `should output <mark> text around equal signs`,
    input: `This is an important =marking=!!!`,
    output: `This is an important <mark>marking</mark>!!!`,
  },
  {
    it: `should output <mark> text around equal signs - incl. escaped equal signs!`,
    input: `This is a =a largeeeeee \\= escaped equal sign= with an escaped equal sign.`,
    output: `This is a <mark>a largeeeeee &#61; escaped equal sign</mark> with an escaped equal sign.`,
  },
  {
    it: `should output <mark> text around equal signs - incl. escaped backticks!`,
    input: `This \\=is a =a largeeeeee \\= escaped equal sign= with an \\=escaped =equal \\= sign=.\\=`,
    output: `This &#61;is a <mark>a largeeeeee &#61; escaped equal sign</mark> with an &#61;escaped <mark>equal &#61; sign</mark>.&#61;`,
  },
];
