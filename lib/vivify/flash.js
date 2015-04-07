module.exports = function() {

  /**
   *  Flash an element.
   */
  function flash(opts, cb) {
    if(typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    return this.vivify.call(this, opts || 'flash', cb);
  }

  this.flash = flash;
}
