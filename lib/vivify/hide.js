module.exports = function() {

  /**
   *  Fade out an element.
   */
  function hide(opts, cb) {
    if(typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};
    opts.begin = 'a-fade';
    opts.start = 'a-fade-out';
    opts.pause = opts.pause || 0;
    opts.wait = opts.wait !== undefined ? opts.wait : 10;
    return this.vivify.call(this, opts, cb);
  }

  this.hide = hide;
}
