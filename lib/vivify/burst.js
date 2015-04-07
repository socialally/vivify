module.exports = function() {

  /**
   *  Fade in, pause for a delay, fade out and remove the element(s).
   */
  function burst(opts, cb) {
    if(typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};
    opts.start = 'fadeIn';
    opts.pause = opts.pause || 500;
    function onFadeIn() {
      opts.start = 'fadeOut';
      opts.pause = 0;
      opts.remove = true;
      this.vivify.call(this, opts, cb);
    }
    return this.vivify.call(this, opts, onFadeIn.bind(this));
  }

  this.burst = burst;
}
