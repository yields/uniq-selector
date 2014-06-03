
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

// with trailing space in className

cases.push({
  element: '<i>',
  of: '<p class=" foo bar "><i></i></p>',
  expect: 'p.foo.bar > i:nth-child(1)',
  selector: 'i'
});

// works on svg elements

cases.push({
  element: '<svg class=" foo bar ">',
  of: '<div><svg class=" foo bar "></svg></p>',
  expect: 'div > svg.foo.bar:nth-child(1)',
  selector: 'svg'
});

// escape brackets in className

cases.push({
  element: '<p class="foo[bar]"',
  of: '<p class="foo[bar]"><i></i></p>',
  expect: 'p.foo\\[bar\\] > i:nth-child(1)',
  selector: 'i'
});