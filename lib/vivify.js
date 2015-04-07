module.exports = function() {

  /**
   *  Sequence class name manipulation over time.
   *
   *  Depends on the `class` plugin.
   *
   *  @param opts The options.
   */
  function vivify(opts, cb) {
    opts = opts || {};
    opts.wait = opts.wait !== undefined ? opts.wait : 0;
    opts.delay = opts.delay || 500;
    cb = cb || function noop(){};

    // classes to add at the beginning
    if(opts.begin) {
      this.addClass(opts.begin);
    }

    function start() {
      this.addClass(opts.start);
    }

    function stop() {
      this.removeClass(opts.start);
      if(opts.remove
        && typeof this.remove === 'function') {
        this.remove();
      }
      if(opts.pause) {
        //console.log('stop pause: ' + opts.pause);
        setTimeout(cb, opts.pause);
      }else{
        cb();
      }
    }

    // NOTE: often need a timeout to delay before adding the
    // NOTE: animation class to allow the browser to
    // NOTE: render the element
    if(opts.wait) {
      setTimeout(start.bind(this), opts.wait);
    }else{
      start();
    }

    setTimeout(stop.bind(this), opts.delay);
    return this;
  }

  this.vivify = vivify;
}
