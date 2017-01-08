
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
    input: `<days-indication> – Fix bug with -\`;\`- inside object (?) which only occured when building`,
    output: `<span class="segment-html">&lt;days-indication&gt;</span> Fix bug with <code>;</code> inside object (?) which only occured when building`,
  },
  {
    it: `should output segment-html on first segment`,
    input: `<days-indication/> – Fix bug with -=;=- inside object (?) which only occured when building`,
    output: `<span class="segment-html">&lt;days-indication/&gt;</span> Fix bug with <mark>;</mark> inside object (?) which only occured when building`,
  },
];
