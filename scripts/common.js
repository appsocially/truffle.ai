var TO_SCROLL = {
  toScroll: function(query) {
    var offset = $(query).offset();
    var d = new $.Deferred();
    var p = $('html,body');
    if(!(p.is(':animated'))){ // アニメーションしていなければ
      p.animate({scrollTop: offset.top}, 800, 'easeOutCubic', function() {
        d.resolve();
      });
    }
    return d;
  },
};