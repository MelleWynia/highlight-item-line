
'use strict';

/*global expect*/

console.log(`———————————————————————————————— ${(new Date())} \n\n`);

describe('HighlightItemLine', () => {
  const test_case_mocks = require('./test-case.mocks');

  const HighlightItemLine = require('../');
  const highlightItemLine = HighlightItemLine();

  test_case_mocks.forEach( (test_case_mock) => {
    it(test_case_mock.it, () => {
      expect(highlightItemLine(test_case_mock.input))
        .toBe(test_case_mock.output);
    });
  });

});
