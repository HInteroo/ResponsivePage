
$(window).on('load', function () {
  $('#rightButton').click(function(){             //Clicking on the -> arrow
    var activeSlide = "#"+ $(".active").attr('id');
    if($(activeSlide).next().addClass("active YesOpacity").length) {
      addRemoveClasses (activeSlide);
    }
    else{
      locationOfIndex(activeSlide,"First");
    }
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

function addRemoveClasses (idActive){
  $(idActive).removeClass("active YesOpacity");
  $(idActive).addClass("NoOpacity");
  setTimeout(function(){
    $(idActive).removeClass("NoOpacity");
  }, 500);
}
console.log(window.performance);
