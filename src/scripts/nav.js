/** Navigtion */
(function() {
  // toggle drop down
  var li = document.querySelectorAll('.nav li.dropdown');
  li.forEach(function(item) {
    if (item.querySelector('ul')) {
      item.addEventListener('click', function(e) {
        e.stopPropagation();
        var isopen = this.querySelector('.is-open');
        var isopenAll = document.querySelectorAll('.is-open');
        var subMenuAll = document.querySelectorAll('.sub-menu');
        if (window.getComputedStyle(isopen).display === 'none') {
          isopenAll.forEach(function(item) {
            item.style.display = 'none';
          });
          subMenuAll.forEach(function(item) {
            item.style.display = 'none';
          });
          isopen.style.display = 'block';
        } else {
          isopen.style.display = 'none';
        }
      });
    }
  });

  var subMenuLink = document.querySelectorAll('.sub-menu a');
  subMenuLink.forEach(function(item) {
    item.addEventListener('click', function(e) {
      var isopenAll = document.querySelectorAll('.is-open');
      isopenAll.forEach(function(item) {
        item.style.display = 'none';
      });
    })

  })

  //   li.querySelector()
  //   $(document).ready(function(){
  //     $("li:has(ul)").click(function(){
  //       if ($(this).find(".is-open").is(":visible")) {
  //         $(".is-open").hide();
  //       } else {
  //         $(".is-open").hide();
  //         $(this).find(".is-open").toggle();
  //       }
  //     });
  //   });
  // close menu when clicked outside of drop down menu
  // var triggerOn = document.querySelectorAll('a.waves-effect.waves-light');
  // triggerOn.forEach(function(item) {
    
  //   item.addEventListener('click', function(e){
  //     // if(e)
  //     e.stopPropagation();
  //   })
  // });
  document.addEventListener('click', function(e) {
    // var triggerOn = document.querySelectorAll('a.waves-effect.waves-light');
    
    // triggerOn.forEach(function(item) {
      // console.log(item.innerHTML,  e.target.innerHTML);
      // console.log(item.innerHTML === e.target.innerHTML);
      // if (item.innerHTML !== e.target.innerHTML) {
      //   var isopen = document.querySelector('.is-open');
      //   // if(isopen.offsetWidth > 0 || isopen.offsetHeight > 0){
      //     // console.log(window.getComputedStyle(isopen).display)
      //     isopen.style.display = 'none';
      //   }
      // }
      var isopen = document.querySelectorAll('.is-open');
      isopen.forEach(function(item) {
        // if (item.innerHTML !== e.target.innerHTML) {
          item.style.display = 'none';
        // }
      });
    // });
  });
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });

  var hasSubmenu = document.querySelectorAll('.has-sub-menu');
  hasSubmenu.forEach(function(item) {
    if (item.querySelector('.sub-menu')) {
      item.addEventListener('click', function(e) {
        e.stopPropagation();
        var subMenuItem = item.querySelector('.sub-menu');
        if (window.getComputedStyle(subMenuItem).display === 'none') {
          subMenuItem.style.display = 'block';
        } else {
          subMenuItem.style.display = 'none';
        }
       
      });
    }
    // item.addEventListener('click', function(e) {
    //   e.stopPropagation();
    //   if (item.querySelector('.sub-menu')) {
    //     item.addEventListener('click', function(e) {
    //       var isopen = this.querySelector('.is-open');
    //       if (window.getComputedStyle(isopen).display === 'none') {
    //         isopen.style.display = 'block';
    //       } else {
    //         isopen.style.display = 'none';
    //       }
    //     });
    //   }
    // });
  });
  // Do something
  //     e.stopPropagation();
  //  });

  //   li.querySelector()
  //   $(document).ready(function(){
  //     $("li:has(ul)").click(function(){
  //       if ($(this).find(".is-open").is(":visible")) {
  //         $(".is-open").hide();
  //       } else {
  //         $(".is-open").hide();
  //         $(this).find(".is-open").toggle();
  //       }
  //     });
  //   });

  // close menu when clicked outside of drop down menu
  // $(document).on("click", function(event){
  // var $triggerOn = $(".dropdown");
  // if($triggerOn !== event.target && !$triggerOn.has(event.target).length){
  //   $(".is-open").hide();
  // }
  // });
})();
