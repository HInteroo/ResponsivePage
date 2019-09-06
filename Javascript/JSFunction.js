function start() {                            //An infinite loop that loops through slides evey 10 seconds
  window.setInterval(function () {
    nextSlide();
  }, 10000);
}
start();

$(window).on('load', function () {
  $('#rightButton').click(function(){             //Clicking on the -> arrow
    nextSlide();
  });
  $('#leftButton').click(function(){                //Clicking on the <- arrow
    var activeSlide = "#"+ $(".active").attr('id');
    if($(activeSlide).prev().addClass("active YesOpacity").length) {
      addRemoveClasses (activeSlide);
      }
    else{
      locationOfIndex(activeSlide,"Last");
    }
  });
});

function locationOfIndex(idActive, index){
  $(idActive).removeClass("active YesOpacity");
  $(idActive).removeClass("NoOpacity");
  $("li:"+index).addClass("active YesOpacity");
  setTimeout(function(){
    $("li:"+index).removeClass("NoOpacity")
  }, 500);
}

function nextSlide(){                       //A function that goes to the next slide of the image carousel
  var activeSlide = "#"+ $(".active").attr('id');
  if($(activeSlide).next().addClass("active YesOpacity").length) {
    addRemoveClasses (activeSlide);
  }
  else{
    locationOfIndex(activeSlide,"First");
  }
}

function addRemoveClasses (idActive){          //Makes a slide active and the other slide(s) inactive
  $(idActive).removeClass("active YesOpacity");
  $(idActive).addClass("NoOpacity");
  setTimeout(function(){
    $(idActive).removeClass("NoOpacity");
  }, 500);
}
