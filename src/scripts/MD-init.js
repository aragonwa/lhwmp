/** Initiate Materialize scripts */
(function() {
  M.AutoInit();
``  var elems = document.querySelectorAll('.carousel');
  document.addEventListener('DOMContentLoaded', function() {
    var instances = M.Carousel.init(elems, { fullWidth: true });
  });
  var next = document.querySelectorAll('#next');
  next[0].addEventListener('click', function() {
    var instance = M.Carousel.getInstance(elems[0]);
    instance.next();
  });
  var prev = document.querySelectorAll('#prev');
  prev[0].addEventListener('click', function() {
    var instance = M.Carousel.getInstance(elems[0]);
    instance.prev();
  });
})();
