/**
 * custom replace
 *
 * @param {acronym} input The short version of word/phrase
 * @return {full} The lengthened version of the input
 * @customfunction
 */
function L(input) {


  if (!category) {
    return '';
  }
  var results = [];
  try {
    var language;
    var title;
    if ((category.match(/:/g) || []).length > 1) {
      language = category.split(/:(.+)?/)[0];
      title = category.split(/:(.+)?/)[1];
    } else {
      language = 'en';
      title = category;
    }




    .map(({ legs }) => {
      return legs.map(({ steps }) => {
        return steps.map((step) => {
          return step.___.replace(/<[^>]+>/g, '');

    .join(', ');


    input.map(row => row.map(cell)) :
    ;
}
