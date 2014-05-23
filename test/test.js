
var domify = require('domify')
var uniq = require('uniq-selector');
var assert = require('assert');

cases.forEach(function(test){
  describe('uniq(' + test.element + ')', function(){
    it('should return "' + test.expect + '" of "' + test.of + '"', function(){
      var html = domify(test.of);
      var el = html.querySelector(test.selector);
      var ret = uniq(el);
      assert(test.expect == ret, 'expected "' + test.expect + '" got "' + ret + '"');
      assert(el == html.querySelector(ret), 'expected "' + ret + '" to get "' + test.element + '"');
    })
  })

  describe('[' + test.element + '].map(uniq)', function(){
    it('should return "' + test.expect + '" of "' + test.of + '"', function(){
      var html = domify(test.of);
      var els = [].slice.call(html.querySelectorAll(test.selector));
      var ret = els.map(uniq)[0];
      assert(test.expect == ret, 'expected "' + test.expect + '" got "' + ret + '"');
      assert(els[0] == html.querySelector(ret), 'expected "' + ret + '" to get "' + test.element + '"');
    })
  });
})

describe('uniq(attached element)', function(){
  it('should work', function(){
    var el = document.createElement('div');
    document.body.appendChild(el);
    uniq(el);
  })
});
