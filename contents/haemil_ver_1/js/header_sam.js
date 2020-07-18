(function(){

  
  /* HEADER */
  window.onload = function() {scrollFunction()};
  window.onscroll = function() {scrollFunction()};
    
  function scrollFunction() {
      if (document.documentElement.scrollTop > 70) {
        var header = document.getElementById('header');
        if(!header.classList.contains('navbar_fixed')){
          header.classList.add('navbar_fixed');
          document.getElementsByTagName('body')[0].style.marginTop = '70px';
          header.style.display = 'none';
          setTimeout(function() {
            header.style.display = 'block';
          }, 40);
        }
      } else {
        var header = document.getElementById('header');
        if(header.classList.contains('navbar_fixed')){
          header.classList.remove('navbar_fixed');
          document.getElementsByTagName('body')[0].style.marginTop = '0';
        }
      }
  }
  
  
  
  
  function menuToggle(){
      document.getElementById('menu').classList.toggle('show');
    }
    
  document.getElementById('toggle_btn').addEventListener('click', menuToggle);
  
  
  
  
  /* ANCHOR */
  function moveTo(id) {
      if (id == 'brand') {
          window.scrollTo(0, 0);
      } else {
          window.scrollTo(0, document.getElementById(id).offsetTop - 70);
      }
      document.getElementById('menu').classList.remove('show');
  }
  
  document.getElementById('navbarBrand').addEventListener('click', moveTo.bind(null, 'brand'));
  document.getElementById('navbarAbout').addEventListener('click', moveTo.bind(null, 'about'));
  document.getElementById('navbarSkill').addEventListener('click', moveTo.bind(null, 'skill'));
  document.getElementById('navbarPortfolio').addEventListener('click', moveTo.bind(null, 'portfolio'));
  document.getElementById('navbarContact').addEventListener('click', moveTo.bind(null, 'contact'));

})();
