// click event for gray button
$("#grayButton").on("click",switchGray);
// click event for white button
$("#whiteButton").on("click",switchWhite);


function switchGray() {
let body =$("body");
body.css({"background":"gray",
         "color":"white"});

    // change background to gray
    // change font to white
}

function switchWhite() {
  let body= $("body");
  body.css("background" ,"white");
    body.css("color","black");
    // change background to white
    // change font to black
}
