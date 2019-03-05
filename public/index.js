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

/** Set icon for navigation search input */
(function() {
  var searchIcon = document.querySelectorAll(
    '.hw-nav-search .material-icons'
  )[0];

  var searchForm = document.querySelectorAll('.hw-nav-search form input')[0];

  searchForm.onfocus = function(e) {
    searchIcon.innerHTML = '';
  };
  searchForm.onblur = function(e) {
    searchIcon.innerHTML = 'search';
  };
})();
