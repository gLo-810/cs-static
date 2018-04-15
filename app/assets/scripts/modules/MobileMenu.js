import $ from 'jquery';

class MobileMenu {
  // dom selection usually and firing events when a page loads.
  constructor(){
    this.menuButton = $('.mobile-menu');
    this.events();
  }

  //events to watch for such as click
  events(){
    
    this.menuButton.click(function(){
      
        $('.primary-nav').slideToggle();
        
    });
    
  }

}

export default MobileMenu;
