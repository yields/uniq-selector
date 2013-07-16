
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
})
