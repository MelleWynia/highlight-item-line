/* global describe, it, expect */

'use strict';

// eslint-disable-next-line no-console
console.log(`\n———————————————————————————————— ${(new Date())}\n\n`);

describe('MarkTodoItem', () => {
  const test_case_mocks = require('./test-case.mocks');

  const MarkTodoItem = require('../src');
  const markTodoItem = MarkTodoItem();

  test_case_mocks.forEach( (test_case_mock) => {
    it(test_case_mock.it, () => {
      expect(markTodoItem(test_case_mock.input))
        .toBe(test_case_mock.output);
    });
  });

});
