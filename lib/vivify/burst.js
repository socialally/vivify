module.exports = function() {

  /**
   *  Fade in, pause for a delay and fade out.
   */
  function burst(opts, cb) {
    if(typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};
    opts.start = 'fadeIn';
    // wait while visible
    opts.pause = opts.pause || 1000;
    return this.fadeIn(opts, this.fadeOut.bind(this, cb));
  }

  this.burst = burst;
}
