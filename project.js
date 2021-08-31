 function on(){
  let b = document.getElementsByClassName("dropdown")[i];
  let c = document.getElementsByClassName("dropdown")[i+1];
  let d = document.getElementsByClassName("dropdown")[i+2];
  let e = document.getElementsByClassName("dropdown")[i+3];

    innerHTML=b;
    innerHTML=c;
    innerHTML=d;
    innerHTML=e;

    $(document).ready(function () {
       $(b).toggle();
       $(c).toggle();
       $(d).toggle();
       $(e).toggle();
       $(".dropdown,.conthide").not(b).not(c).not(d).not(e).hide();
    });
 }

function sem(){
  let a = document.getElementsByClassName("conthide")[i];
  $(document).ready(function () {
    $(a).toggle();
    $(".conthide").not(a).hide();
 });
}

$(document).ready(function(){
  $(".sub").click(function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
  } else {
    $(this).addClass('active');
  }
  $("button").not(this).removeClass('active');
  });
});

$(document).ready(function(){
  $(".dropdown").click(function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
  } else {
    $(this).addClass('active');
  }
  $(".dropdown").not(this).removeClass('active');
  });
});

function drop(){
  let a = document.getElementsByClassName("hamcont")[0];
  if((a).classList.contains("drop"))
  {
    a.classList.remove("drop");
    a.classList.add("back");
    setTimeout(function() {
    //hid will be executed after 120 millisecond
    a.classList.add("hid");},120);
    //it is for shorter time so that the display gets hidden fast
    //animation duration of back and hid are same then some blinking was coming
  }
  else
    {a.classList.add("drop");a.classList.remove("hid");a.classList.add("drop");}
}


// For showing maodal
function show(){
  let a = document.getElementsByClassName("modal")[0];
  a.style.display="block";
  $(".main").css("opacity","0.4"); //for making everything inoperable while modal is displaying
  $(".header").css("opacity","0.4");
  $(".header").css("z-index","-1");
}

setTimeout(function(){
    $(".modal").show(); $(".main").css("opacity","0.4");$(".header").css("z-index","-1");$(".header").css("opacity","0.4");},3000);

// For hiding modal
function hide(){
   let a = document.getElementsByClassName("modal")[0];
   a.style.display="none";
   $(".main").css("opacity","1");
   $(".header").css("opacity","1");
   $(".header").css("z-index","1");
}

z=0; 
   function nextPrev(){
      z=z+j;
      let a = document.getElementsByClassName("tab")[z];
      let b = document.getElementsByClassName("step")[z];
      $(a).show();
      $(".tab").not(a).hide();
      if(z!=0)
      {$("#prevBtn").show();}
      else{$("#prevBtn").hide();}

      if(z==2){$("#nextBtn").hide();}
      else{$("#nextBtn").show();}
      if(z!=0)
      {$("#step1").css("background-color","#d8d5d5");}
      else{$("#step1").css("background-color","#bbbbbb");}
      $(".step").not(b).removeClass("stepa");
      $(b).addClass("stepa");
      if(z==2)
      $("#submitBtn").show();
      else
      $("#submitBtn").hide();
  }

window.onload = function(){
  $(".tag").mouseover(function(){
  let a = document.getElementsByClassName("tag")[0];
  $(this).addClass("hover");
  $(a).removeClass("hover");
  $(".tag").mouseout(function(){
    $(this).removeClass("hover");
  });
});
};

/* for changing the page from home to contact and about us */
function nav(){
  let a = document.getElementsByClassName("main")[i];
  let b = document.getElementsByClassName("tag")[i];
  let c = document.getElementsByClassName("tag2")[i];
  $(".main").not(this).hide();
  a.style.display = "block";
  $(b).css("color", "rgb(4, 4, 43)");
  $(".tag").not(b).css("color", "whitesmoke");
  $(c).css("color", "rgb(4, 4, 43)");
  $(".tag2").not(c).css("color", "whitesmoke");

  $(".tag").removeClass("myhovi");
  $(b).addClass("myhovi");

$(".tag").mouseover(function(){
  $(this).not(b).addClass("hover");
});

$(".tag").mouseout(function(){
  $(this).removeClass("hover");
});
}

function search(){
  let a = document.getElementsByClassName("searchbox")[0];
  let b = document.getElementsByClassName("hamsearch")[0];
  let c = document.getElementById("inp");
  let d = document.getElementById("inp2");
  if(a.style.display==="block")
  {a.style.display="none";
  c.value='';
  d.value='';}
  else{
      a.style.display="block";
  }
  if(b.style.display==="block")
  {b.style.display="none";
  c.value='';
  d.value='';}
  else{
      b.style.display="block";
  }
}

function erase(){
  let a = document.getElementById("inp");
  a.value='';
}

// Screen size less than 270px will hide this website and will tell to use desktop view
$(window).resize(function() {

if ($(this).width() <=270) {

    $("#limit").show();
      $("#startcont").hide();
}
else
{ $("#limit").hide();
  $("#startcont").show();}
})

