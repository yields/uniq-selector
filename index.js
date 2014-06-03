
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
  var i = index(el);

  return el.tagName.toLowerCase()
    + id(el)
    + classname(el)
    + (~i ? ':nth-child(' + (i + 1) + ')' : '');
}

/**
 * Retrieve element id
 * Escape id selector and append #
 *
 * @param  {Element} el
 * @return {String}
 * @api private
 */

function id(el){
  return el.getAttribute('id') ? '#' + escapeSelector(el.getAttribute('id')) : '';
}

/**
 * Escape selector as per w3 spec.
 *
 * @param  {String} sel selector to escape
 * @return {String}
 * @api private
 */

function escapeSelector(sel){
  //Based on the stackoverflow answer and w3 spec
  //http://stackoverflow.com/questions/2786538/need-to-escape-a-special-character-in-a-jquery-selector-string
  return sel ? sel.replace(/[!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g, "\\$&") : '';

}

/**
 * Retrieve element classname
 * Escape selector and replace spaces with dots
 *
 * @param  {Element} el
 * @return {String}
 * @api private
 */

function classname(el){
  var classname = trim(el.className.baseVal ? el.className.baseVal : el.className);

  return classname ? escapeSelector(classname).replace(/^| +/g, '.') : '';
}
