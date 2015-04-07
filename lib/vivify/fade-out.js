module.exports = function() {

  /**
   *  Fade an element out.
   */
  function fadeOut(opts, cb) {
    if(typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    if(opts) {
      opts.start = 'fadeOut';
    }
    return this.vivify.call(this, opts || 'fadeOut', cb);
  }

  this.fadeOut = fadeOut;
}
