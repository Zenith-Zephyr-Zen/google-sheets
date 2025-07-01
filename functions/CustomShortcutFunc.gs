/**
 * custom replace
 *
 * @param {acronym} input The short version of word/phrase
 * @return {full} The lengthened version of the input
 * @customfunction
 */
function L(input) {
  return Array.isArray(input) ?
    input.map(row => row.map(cell => cell * 2)) :
    input * 2;
}
