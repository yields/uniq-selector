
// cases

var cases = [];

// simple

cases.push({
  element: '<i>',
  of: '<p><i></i></p>',
  expect: 'p > i:nth-child(1)',
  selector: 'i'
});

// list

cases.push({
  element: '<li>',
  of: '<ul><li></li><li></li></ul>',
  expect: 'ul > li:nth-child(2)',
  selector: 'li:nth-child(2)'
});

// complex

cases.push({
  element: '<i class="baz">',
  of: '<i><i id="foo" class="foo button"><i><i><i class="baz"></i></i></i></i></i>',
  expect: 'i#foo.foo.button:nth-child(1) > i:nth-child(1) > i:nth-child(1) > i.baz:nth-child(1)',
  selector: '.baz'
});
