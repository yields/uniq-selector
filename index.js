
/**
 * Module dependencies.
 */

var index = require('indexof');
var trim = require('trim');

/**
 * Export `uniq`
 */

module.exports = uniq;

/**
 * Generate unique selector of `el`.
 *
 * @param {Element} el
 * @return {String}
 * @api public
 */

function uniq(el, arr){
  arr = arr && arr.join ? arr : [];
  if (!el) return arr.join(' > ');
  if (9 == el.nodeType) return arr.join(' > ');
  if (1 != el.nodeType) return arr.join(' > ');
  arr.unshift(selector(el));
  if (el.id) return arr.join(' > ');
  return uniq(el.parentNode, arr);
}

/**
 * Generate a selector of the given `el`.
 *
 * @param {Element} el
 * @return {String}
 * @api private
 */

function selector(el){
  var classname = trim(el.className.baseVal ? el.className.baseVal : el.className);
  var i = index(el);

  return el.tagName.toLowerCase()
    + (el.id ? '#' + el.id : '')
    + (classname ? classname.replace(/^| +/g, '.') : '')
    + (~i ? ':nth-child(' + (i + 1) + ')' : '');
}
