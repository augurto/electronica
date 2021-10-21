var Nav = (function() {
  
    var
        nav 		= $('.nav'),
        menu	= $('.menu'),
      page 		= $('.page'),
      section = $('.section'),
      link		= nav.find('.tabInner'),
      navH		= nav.innerHeight(),
      isOpen 	= true,
      hasT 		= false;
    
    var toggleNav = function() {
      nav.toggleClass('activeTab');
      menu.toggleClass('menu-close');
      shiftPage();
    };
    
    var shiftPage = function() {
      if (!isOpen) {
        page.css({
          'transform': 'translateY(' + navH + 'px)',
          '-webkit-transform': 'translateY(' + navH + 'px)'
        });
        isOpen = true;
      } else {
        page.css({
          'transform': 'none',
          '-webkit-transform': 'none'
        });
        isOpen = false;
      }
    };
    
    var switchPage = function(e) {
      var self = $(this);
      var i = self.parents('.tabItem').index();
      var s = section.eq(i);
      var a = $('section.activeSection');
      var t = $(e.target);
      
      if (!hasT) {
        if (i == a.index()) {
          return false;
        }
        a
        .addClass('section--hidden')
        .removeClass('activeSection');
  
        s.addClass('activeSection');
  
        hasT = true;
  
        a.on('transitionend webkitTransitionend', function() {
          $(this).removeClass('section--hidden');
          hasT = false;
          a.off('transitionend webkitTransitionend');
        });
      }
  
      return false;
    };
    
    var keyNav = function(e) {
      var a = $('section.activeSection');
      var aNext = a.next();
      var aPrev = a.prev();
      var i = a.index();
      
      
      if (!hasT) {
        if (e.keyCode === 37) {
        
          if (aPrev.length === 0) {
            aPrev = section.last();
          }
  
          hasT = true;
  
          aPrev.addClass('activeSection');
          a
            .addClass('section--hidden')
            .removeClass('activeSection');
  
          a.on('transitionend webkitTransitionend', function() {
            a.removeClass('section--hidden');
            hasT = false;
            a.off('transitionend webkitTransitionend');
          });
  
        } else if (e.keyCode === 39) {
  
          if (aNext.length === 0) {
            aNext = section.eq(0)
          } 
  
  
          aNext.addClass('activeSection');
          a
            .addClass('section--hidden')
            .removeClass('activeSection');
  
          hasT = true;
  
          aNext.on('transitionend webkitTransitionend', function() {
            a.removeClass('section--hidden');
            hasT = false;
            aNext.off('transitionend webkitTransitionend');
          });
  
        } else {
          return
        }
      }  
    };
      
    var bindActions = function() {
      menu.on('click', toggleNav);
      link.on('click', switchPage);
      $(document).on('ready', function() {
         page.css({
          'transform': 'translateY(' + navH + 'px)',
           '-webkit-transform': 'translateY(' + navH + 'px)'
        });
      });
      $('body').on('keydown', keyNav);
    };
    
    var init = function() {
      bindActions();
    };
    
    return {
      init: init
    };
    
  }());
  
  Nav.init();