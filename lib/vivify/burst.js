module.exports = function() {

  /**
   *  Fade in, pause for a delay, fade out and remove the element(s).
   */
  function burst(opts, cb) {
    opts = opts || {};
    opts.begin = 'a-fade';
    opts.start = 'a-fade-in';
    opts.pause = opts.pause || 500;
    opts.wait = opts.wait !== undefined ? opts.wait : 10;
    function onFadeIn() {
      opts.start = 'a-fade-out';
      opts.remove = true;
      this.vivify.call(this, opts, cb);
    }
    return this.vivify.call(this, opts, onFadeIn.bind(this));
  }

  this.burst = burst;
}
