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
