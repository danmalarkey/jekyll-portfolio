// =============================================================
//  
//  Alerts
//	
// ============================================================= 


// Use the class .alert-gone to remove
// the element from the DOM

// Use the class .alert-hide to just
// hide the element from the DOM

$(document).ready(function(){
  // This removes the element from the DOM
  $('.close').click(function(e) {
    var elem = $(e.currentTarget).parents('.alert-gone');
    elem.removeClass('in');
    
    setTimeout(function () {
      elem.remove();
    }, 450);
  });

  // This just hides the element
  $('.close').click(function(e){
    var hiding = $(e.currentTarget).parents('.alert-hide');
    hiding.removeClass('in');
  });
  
  $('.brand').click( function(){
    $(".contact-nav").addClass("animated fadeIn contact-nav-show");
    $(".contact-nav").removeClass("contact-nav-hide animated");
    $(".contact-nav-panel").addClass("contact-nav-panel-show animated downFade");
    $(".contact-nav-panel").removeClass("contact-nav-panel-hide upFade");
  });

  $('.contact-nav-close-icon').click( function(){
    $(".contact-nav").addClass("contact-nav-hide animated fadeOut");
    $(".contact-nav").removeClass("animated fadeIn contact-nav-show");
    $(".contact-nav-panel").addClass("contact-nav-panel-hide animated upFade");
    $(".contact-nav-panel").removeClass("contact-nav-panel-show downFade");
  });
  
  
});


