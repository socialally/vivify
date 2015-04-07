module.exports = function() {

  /**
   *  Fade an element in.
   */
  function fadeIn(opts, cb) {
    if(typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    if(opts) {
      opts.start = 'fadeIn';
    }
    return this.vivify.call(this, opts || 'fadeIn', cb);
  }

  this.fadeIn = fadeIn;
}
