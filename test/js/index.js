let baseImageID = 'image-';
let targetImageID = '';
let currentImageID = '';

//take in imageID and hide it, check to see if it is equal to the currentImageID and if so clear the curentImageID
const hideImageNow = function(imageID) {
  $(imageID).hide();
  if (currentImageID == imageID) {
    currentImageID = '';
  }
};

//Take in the imageID and delay, set timeout by calling hideimagenow, set delay to run function, pass in imageID to hideimagenow function
const hideImageLater = function(imageID, delay) {
  setTimeout(hideImageNow, delay, imageID);
};

//pas in imageID check to see if current is not blank, if is not blank, send into hideImageNow and then set current to passed imageid and show. 
const showImage = function(imageID) {
  if (currentImageID != '') {
    hideImageNow(currentImageID);
  }
  currentImageID = imageID;
  $(imageID).show();
};

//on mouseover h2 set target to base, call in mouse-text and run through switch. set targetID to concat mousetext. run show image passing in target.
$("h2").mouseover(function() {
  targetImageID = baseImageID;
  let mouseText = $(this).attr("class").split(" ")[0];

  switch (mouseText) {
    case "wh-light":
      targetImageID += mouseText;
      break;
    case "wh-hl-ll":
      targetImageID += mouseText;
      break;
    case "part-hh-ll":
      targetImageID += mouseText;
      break;
  }

  showImage(targetImageID);
});

//on mouseout call hide imagelater function passing in currentID and delay
$("h2").mouseout(function() {
  hideImageLater(currentImageID, 1000);
});