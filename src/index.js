
'use strict';

module.exports = (options = {}) => {

  options = Object.assign({
    classNames: {
      segmentUrl: 'segment-url',
      segmentHtml: 'segment-html',
      separatorSign: 'separator-sign',
    },
  }, options);

  const htmlentities = (str) => {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  };

  const escapechars = (str) => {
    return String(str)
      .replace(/\\`/g, '&#96;')
      .replace(/\\=/g, '&#61;');
  };

  return (input) => {

    if (! input) {
      return '';
    }

    let output_first_segment = '';
    let output_second_segment = '';
    let secondSegment = '';

    let separate_segments = {
      url: /^(?:(\/[^\s]*) (?:[-–—] )?)(.*)$/,
      html: /^(?:(<[\w "'='-_]*\/?>) (?:[-–—] )?)(.*)$/,
    };

    if (separate_segments.url.test(input)) {
      let segments = separate_segments.url.exec(input);
      output_first_segment = `<span class="${options.classNames.segmentUrl}">${htmlentities(segments[1])}</span> `;
      secondSegment = segments[2];
    } else if (separate_segments.html.test(input)) {
      let segments = separate_segments.html.exec(input);
      output_first_segment = `<span class="${options.classNames.segmentHtml}">${htmlentities(segments[1])}</span> `;
      secondSegment = segments[2];
    } else {
      secondSegment = input;
    }

    /*
    * Second segement
    */

    secondSegment = htmlentities(secondSegment);
    secondSegment = escapechars(secondSegment);

    /* Highlight with <code> */

    secondSegment = secondSegment.replace(/`([^`]+?)`/gi, (input, contents) => {
      return `<code>${contents}</code>`;
    });

    secondSegment = secondSegment.replace(/(&lt;[a-z-_]+? ?\/?&gt;)/gi, (input, contents) => {
      return `<code>${contents}</code>`;
    });

    /* Highlight with <mark> */

    secondSegment = secondSegment.replace(/=(.+?)=/gi, (input, contents) => {
      return `<mark>${contents}</mark>`;
    });

    output_second_segment = secondSegment.replace(/[–—]/g, (input) => {
      return `<span class="${options.classNames.separatorSign}">${input}</span>`;
    });

    /**
    * Return all segments
    */

    return `${output_first_segment}${output_second_segment}`;
  };
};
