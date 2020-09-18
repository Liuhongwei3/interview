run() {
    if (this.intervalid != null) return;
    this.intervalid = setInterval(() => {
      var start = this.msg.substring(0, 1)
      var end = this.msg.substring(1)
      this.msg = end + start
    }, 300)
  },
  paused: function () {
    clearInterval(this.intervalid)
    this.intervalid = null;
  }