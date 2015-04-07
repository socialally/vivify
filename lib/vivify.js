module.exports = function() {

  /**
   *  Sequence class name manipulation over time.
   *
   *  Depends on the `class` plugin.
   *
   *  @param opts The options.
   */
  function vivify(opts, cb) {
    if(typeof opts === 'string') {
      opts = {start: opts};
    }
    opts = opts || {};
    opts.wait = opts.wait !== undefined ? opts.wait : 10;
    opts.delay = opts.delay || 1000;
    opts.begin = opts.begin || 'animated';
    cb = cb || function noop(){};
    cb = cb.bind(this);

    this.removeClass(opts.begin);
    this.removeClass(opts.start);

    // classes to add at the beginning
    if(opts.begin) {
      this.addClass(opts.begin);
    }

    function start() {
      this.addClass(opts.start);
      setTimeout(stop.bind(this), opts.delay);
    }

    function stop() {
      this.removeClass(opts.start);
      this.removeClass(opts.begin);

      function complete() {

        if(opts.remove
          && typeof this.remove === 'function') {
          this.remove();
        }
        cb();
      }

      if(opts.pause) {
        setTimeout(complete, opts.pause);
      }else{
        complete();
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

    return this;
  }

  this.vivify = vivify;
}
