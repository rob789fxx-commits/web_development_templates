// Document is loaded
$(document).ready(function(){

});

// text(), hide(), show()
$(function(){
    var tagP = $('p').text(); // text inside p is saved
    alert(tagP);
    var tagP = $('p').text('New text fo tag p'); // new text inside element 
    $('p').hide(3000, function(){}); // hide element 3000 ms
    $('p').show(2000); // show element 2000 ms
    $('p').hide(3000).show(2000);
    tagP.hide(3000).show(2000);
    tagP.hide(3000).text('New text fo tag p').show(2000);
});

//Authomatic cycles, width(), height()
$(function(){
    $('.icons > div').hide(3000); // hide 4 div - [div,div,div.div]
    var w = $('.btn').width(); // width in px
    var h = $('.btn').height(); // height in px
    var w = $('.btn').width(300); // change width
    function widthAndHeight(element){
        var className = "." + element;
        var w = $(className).width();
        var h = $(className).height();
        $('p').text('Height: ' + w + '; Width: ' + h);
    }
    widthAndHeight('btn');
});

// html()
$(function(){
    alert($('.mainText').html());
    $('.mainText').html('<h2>New title</h2><b>New text</>'); // delete old html and add new html
});

// fadeIn(), fadeOut()
$(function(){
    $('.mainText').fadeOut(2000).fadeIn(3000);
    function elementOut(element, time){
        if(time>5000||time<1000||isNaN(time)){
            return false;
        } else {
            var className = "." + element;
            $('element').fadeOut(time);
        }
    }
    elementOut('mainText', 2000);
});

// fadeTo() - to certain opasity
$(function(){
    $('.mainText').fadeTo(4000, 0.5, function(){}).fadeTo(3000, 1);
    function f(){
        // code
    }
    $('.mainText').fadeTo(4000, 0.5, f()).fadeTo(3000, 1);
});

// slideUp(), slideDown()
$(function(){
    $('.mainText').slideUp(2000).slideDown(2000);
});

// attr(), removeAttr() - get and add, remove attributes' values
$(function(){
    $('.logo img').attr('src', 'img/icon.png'); // change attribute
    $('.logo img').removeAttr('title');
    function changeAttr(element, newAttr, newValue){
        var className = "." + element;
        $(className).attr(newAttr, newValue);
    }
    changeAttr('logo', 'title', 'hint');
});

// addClass(), removeClass()
$(function(){
    $('.nav menu').addClass('border').removeClass('border');
});

// css() - change css styles
$(function(){
    $('.nav menu li a').css('color', '#ff0000').css('font-size', '25px');
    $('.nav menu li a').css({
        'color': '#ff0000',
        'font-size': '20px'
    })
});

// animate() - change css styles for certain period (quantity parameters)
$(function(){
    function f(){};
    $('.nav menu li a').animate({
        'padding': '#ff0000',
        'font-size': '20px'
    },3000, f())
});

// append(), prepend(), before(), after()
$(function(){
    $('.mainText').before('<span>New block</span>'); // add code before the selected element at the same level
    $('.mainText').after('<span>New block</span>');
    $('.mainText').append('<span>New block</span>'); // insert code into the selected element at the end
    $('.mainText').prepend('<span>New block</span>'); // insert code into the selected element at the beginning
});

// method each() and context this
$(function(){
    $('.icons img').each(function(){
        if($(this).attr('src') == 'img/icon3.png'){
            $(this).fadeOut(1000).css({});
        }
    }) // check each img, for each perform function
});

// length property
$(function(){
    $('div').length; // quantity of div tags 
});

// clone(), remove()
$(function(){
    var mainText = $('.mainText').clone();
    $('body').append(mainText); // clone .mainText to the end of the body tag
    var mainText = $('.mainText').remove(); // delete object and save to the variable
});

// choose different elements
$(function(){
    $('img, a').css('background', '#222');
    $('img[alt]').css('background', '#222');
});

// events
$(function(){
    $('.logo').mouseover(function(){
        alert("event");
    }); // mouse over element
    $('.logo').mouseout(function(){
        alert("event");
    });
    $('.logo').click(function(){
        alert("event");
    });
    $('.logo').mousemove(function(){
        alert("event");
    });
    $('.logo').mouseup(function(){
        alert("event");
    });
    // submit - button with submit type
    // focus - cursor to input, textarea
    // blur - cursor out of input, textarea
    // change - write text to input
    // reset - button with reset type
    // keypress
    // keydown
    // keyup
    // load - all files of the site are loaded
    // resize - browser window size change
    // scroll
});

// Event model
$(function(){
    $(window).scroll(function(){
        alert('scroll');
    })
    $('.arrowDown').click(function(){
        var clone = $(this).clone();
        $(this).after(clone);
    })
});

// hover, mouseover, mouseout
$(function(){
    var link = $('.menu li a');
    link.mouseover(function(){
       $(this).addClass('border'); 
    })
    link.mouseout(function(){
        $(this).removeClass('border'); 
     })
     link.hover(function(){
        $(this).addClass('border'); 
     }),function(){
        $(this).removeClass('border'); 
     } 
});

// eventObject
$(function(){
    $('.mainText').click(function(e){
        alert(e.screenX + " " + e.screenY);
    }) // coordinates from monitor left top corner
    $('.mainText').click(function(e){
        alert(e.pageX + " " + e.pageY);
    }) // coordinates from browser left top corner
    $('.mainText').click(function(e){
        alert(e.altKey);
    }) // if alt key is pressed - true in alert, else - false in alert
    $('.mainText').click(function(e){
        alert(e.ctrlKey);
    })
    $('.mainText').click(function(e){
        alert(e.shiftKey);
    })
    $('.mainText').click(function(e){
        alert(e.target);
    }) // type of element
});

// cancelling of standard behavior
$(function(){
    $('.btn').click(function(e){
        // e.preventDefault();
        // return false;
        var answer = confirm('Do you want to send data?');
        if(!answer){
            e.preventDefault();
        }
    })
});

// Form elements selection
$(function(){
   $(':checkbox').fadeOut(1000);
   $(':radio').fadeOut(1000);
   $(':submit').fadeOut(1000);
   $(':reset').fadeOut(1000);
   $(':file').fadeOut(1000);
   $(':button').fadeOut(1000);
   $(':text').fadeOut(1000);
   $(':password').fadeOut(1000);
   $(':input').fadeOut(1000);
   $('.form1 :input').fadeOut(1000);
});

// Form elements filtering
$(function(){
   $('.form1 :checkbox:checked').fadeOut(1000);
   $('.form1 :radio:checked').fadeOut(1000);
   $('#select1 :selected').remove();
});

// val()
$(function(){
   $(':submit').click(function(){
      var value = $('textarea').val();
      alert(value);
   })
   $(':submit').click(function(){
      var value = $('input.text1').val();
      alert(value);
   })
   $(':submit').click(function(){
      var value = $('#select1 :selected').val();
      alert(value);
   })
   $(':submit').click(function(){
      var value = $(':checkbox').each(function(){
         var value = $(this).val();
         alert(value);
      });
   })
   $(':submit').click(function(){
      var value = $(':checkbox:checked').each(function(){
         var value = $(this).val();
         alert(value);
      });
   })
});

submit(), focus()
$(function(){
  $('.form1').submit(function(e){
      if($('.text1').val() == ""){
         e.preventDefault();
         alert('Form fields are not filled')
      }
  })
   $('.text1').focus(function(){
      $(this).css({
         'border': '2px double blue',
         'background': 'green'
      });
   });
});

// blur(), change()
$(function(){
   $('.text1').focus(function(){
      $(this).addClass('border');
   });
   $('.text1').blur(function(){
      $(this).removeClass('border');
   });
   $('#select1').change(function(){
      var v = $('#select1 :selected').val();
      if(v == 1){
         $('#select2').html('<option value="1" selected>Value 1</option>')
      } else if(v == 2){
         $('#select2').html('<option value="1" selected>Value 1</option><option value="2" selected>Value 2</option>')
      } else if(v == 3){
         $('#select2').html('<option value="1" selected>Value 1</option><option value="2" selected>Value 2</option><option value="3" selected>Value 3</option>')
      } else if(v == 4){
         $('#select2').html('<option value="1" selected>Value 1</option><option value="2" selected>Value 2</option><option value="3" selected>Value 3</option><option value="4" selected>Value 4</option>')
      } else {
         $('#select2').html('<option value="1" selected>Value 1</option>')
      }
   })
});

// Form elements blocking
$(function(){
   $(':submit').click(function(e) {
      $('.text2').attr('disabled','disabled');
      e.preventDefault();
   });
   $(':reset').click(function(e) {
      $('.text2').removeAttr('disabled');
      e.preventDefault();
   });
});