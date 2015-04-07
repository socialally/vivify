module.exports = function() {

  /**
   *  Fade in an element.
   */
  function show(opts, cb) {
    if(typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};
    opts.begin = 'a-fade a-fade-out';
    opts.start = 'a-fade-in';
    opts.pause = opts.pause || 0;
    opts.wait = opts.wait !== undefined ? opts.wait : 10;
    return this.vivify.call(this, opts, cb);
  }

  this.show = show;
}
