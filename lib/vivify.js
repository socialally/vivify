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
    opts.wait = opts.wait !== undefined ? opts.wait : 0;
    opts.delay = opts.delay || 1000;
    opts.begin = opts.begin || 'animated';
    cb = cb || function noop(){};
    cb = cb.bind(this);

    console.log(opts);

    this.removeClass(opts.begin);
    this.removeClass(opts.start);

    // classes to add at the beginning
    if(opts.begin) {
      this.addClass(opts.begin);
    }

    var start = function start() {

      if(opts.show) {
        this.attr('hidden', null);
      }

      this.addClass(opts.start);
      setTimeout(stop, opts.delay);
    }.bind(this);

    var stop = function stop() {
      this.removeClass(opts.start);
      this.removeClass(opts.begin);

      if(opts.pause) {
        setTimeout(cb, opts.pause);
      }else{
        cb();
      }
    }.bind(this);

    // NOTE: often need a timeout to delay before adding the
    // NOTE: animation class to allow the browser to
    // NOTE: render the element
    if(opts.wait) {
      setTimeout(start, opts.wait);
    }else{
      start();
    }

    return this;
  }

  this.vivify = vivify;
}
