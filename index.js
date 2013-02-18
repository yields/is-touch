
/**
 * Whether or not touch is supported.
 * 
 * Example:
 * 
 *      var touchable = require('touch');
 *      touchable();
 *      // > true
 * 
 * @return {Boolean}
 */

module.exports = function(){
  return 'ontouchstart' in window
    || 'onmsgesturechange' in window;
};
