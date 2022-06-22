$(document).ready(function(){

    $('#middle').fadeIn(3000).delay(1600).fadeOut("slow");
  
    // -------------------- TOGGLE MENU --------------------
  
    var menuopen = true;
    $('#m2,#m3,#m4,#m5,#m6,#m7').hide();
    $('#plus').click(function(){
      menu();
    });
  
    function menu() {
      if (menuopen == true){
        $('#plus').html('-');
        $('#m2,#m3,#m4,#m5,#m6,#m7').show();
        menuopen = false;
      }
      else {
        $('#plus').html('+');
        $('#m2,#m3,#m4,#m5,#m6,#m7').hide();
        menuopen = true;
      }
    };
  
  // -------------------- TOGGLE NEWS --------------------
  
    var newsopen = true;
    $('#news-menu').click(function(){
      news();
    });
  
    function news() {
      if (newsopen == true){
        $('#news-menu').html(`News &#8593;`);
        $('#news-list').css("display","block");
        newsopen = false;
      }
      else {
        $('#news-menu').html(`News &#8595;`);
        $('#news-list').css("display","none");
        newsopen = true;
      }
    };
  
  // -------------------- ABOUT & NEWSLETTER CONTAINER --------------------
  
    // about
    $('#m4').click(function(){
      $('#projects,#videos,#titles,#overview-container,#chen').addClass('blur').delay(1000);
      $('#subscribe-container').css("display","none").delay(1000);
      $('#blur-bg').css("display","block");
      $('#overview p').css("opacity","0");
      $('#about-full').css("display","block");
      $('#plus').html('+');
      $('#m2,#m3,#m4,#m5,#m6,#m7').hide();
      menuopen = true;
    });
    // subscribe
    $('#m5,#newsletter').click(function(){
      $('#projects,#videos,#titles,#overview-container,#overview,#about-full').addClass('blur').delay(1000);
      $('#blur-bg,#subscribe-container').css('display','block');
      $('#overview,#about-full').css('pointer-events','none');
      $('#plus').html('+');
      $('#m2,#m3,#m4,#m5,#m6,#m7').hide();
      menuopen = true;
    });
    // blur background
    $('#blur-bg').click(function(){
      $('#projects,#videos,#titles,#overview-container,#chen,#overview,#about-full').removeClass('blur').delay(1000);
      $('#blur-bg,#subscribe-container,#about-full').css('display','none');
      $('#overview,#about-full').css('pointer-events','auto');
      $('#overview p,#overview span').css("opacity","1");
      $('#overview').css('display','block');
    });
  
    // check if the user entered the email
    function validateEmail(e) {
        var emailValue = document.querySelector('input[type="email"]').value;
        if (emailValue == null || emailValue == "" || emailValue.length == 0) {
          // alert("Please enter your email.");
          // e.preventDefault();
          console.log(e);
          return false;
        }
      }
    // after submitting a valid email, dialogue closed
    $('#submit,#submit-blur').click(function(){
      if ( validateEmail() ) {
        $('#projects,#videos,#titles,#overview-container,#chen,#overview').removeClass('blur').delay(1000);
        $('#subscribe-container').css('display','none');
        $('#blur-bg').css('display','none');
      }
    });
  
  });