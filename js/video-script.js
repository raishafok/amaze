

 //video js//

// get video element id
var vidClip = document.getElementById("myVideo"); 

// play video event
function playVid() { 
    myVideo.play();
} 

// pause video event
function pauseVid() { 
  myVideo.pause(); 
}

// toggle button class on click
$('.control-btn').on('click', function() {
  $('.first, .second').toggle();
});

// toggle button class when finished
vidClip.onended = function(e) {
  $('.first, .second').toggle();
};
 //video js//

