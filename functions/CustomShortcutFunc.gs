/**
 * custom replace
 *
 * @param {acronym} input The short version of word/phrase
 * @return {full} The lengthened version of the input
 * @customfunction
 */
function L(input) {

  var acronym = input;
  var full;

    if acronym == 'GAD' {
      full = 'guarding ad litem';
    } elsif acronym == 'PGM' {
      full = 'paternal grandmother';
    } elsif acronym == 'CL' {
      full = 'caselaw';
    } elsif acronym == 'JR' {
      full = 'judicial report';
    } elsif acronym == 'MOP' {
      full = 'modification of placement';
    } elsif acronym == 'WON' {
      full = 'whether or not';
    } elsif acronym == 're' {
      full = 'regarding';
    } elsif acronym == 'DCF' {
      full = 'Department of Children and Families';
    } elsif acronym == 'TPR' {
      full = 'termination of parental rights';
    } elsif acronym == 'NOF' {
      full = 'notice of filing';
    } elsif acronym == 'CLS' {
      full = 'children's legal services';
    } elsif acronym == 'Arr' {
      full = 'arraignment';
    } elsif acronym == 'Supp dispo' {
      full = 'supplemental disposition';
    } elsif acronym == 'Med' {
      full = 'guarding ad litem';
    }
  

  ((CELL)).replace(/L[^\)]+\)/g, full)



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
