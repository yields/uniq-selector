
/**
 * dependencies
 */

var index = require('indexof');
var id = function(_){ return _ };

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
  arr = arr || [];
  if (!el) return arr.join(' > ');
  arr.unshift(selector(el));
  if (el.id) return arr.join(' > ');
  if (9 == el.nodeType) return arr.join(' > ');
  if (1 != el.nodeType) return arr.join(' > ');
  return uniq(el.parentNode, arr);
}

/**
 * Generate a selector of the given `el`.
 *
 * @param {Element} el
 * @return {String}
 */

function selector(el){
  var i = index(el);

  return el.tagName.toLowerCase()
    + (el.id ? '#' + el.id : '')
    + className(el)
    + (~i ? ':nth-child(' + (i + 1) + ')' : '');
}

/**
 * Generate a string representation of the className for `el`.
 *
 * @param {Element} el
 * @return {String}
 */

function className(el){
  return el.className ? el.className.trim().replace(/ +$/g, '').replace(/^| +/g, '.') : '';
}
