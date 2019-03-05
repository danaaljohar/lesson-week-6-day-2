function turnOffLights() {
    // change background color of stop light to red
    let stopLight = $("#stopLight");
    stopLight.css("background","#111");
}
// turn on stop function
function turnOnStopLight() {
  turnOffLights();
  let stopLight = $("#stopLight");
  stopLight.css("background","red");
  let slowLight = $("#slowLight");
  slowLight.css("background","#111");
  let goLight = $("#goLight");
  goLight.css("background","#111");
    // change background color of stop light to red
}

// turn on slow function
function turnOnSlowLight() {
// change background color of slow light to yellow
turnOffLights();
  let slowLight = $("#slowLight");
  slowLight.css("background","yellow");
  let stopLight = $("#stopLight");
  stopLight.css("background","#111");
  let goLight = $("#goLight");
  goLight.css("background","#111");
}

// turn on go function
function turnOnGoLight() {
    // change background color of go light to green
    turnOffLights();
    let goLight = $("#goLight");
    goLight.css("background","green");
    let stopLight = $("#stopLight");
    stopLight.css("background","#111");
    let slowLight = $("#slowLight");
    slowLight.css("background","#111");
}

// set stop light click event
$("#stopButton").on("click",turnOnStopLight);
// set slow light click event
$("#slowButton").on("click",turnOnSlowLight);
// set go light click event
$("#goButton").on("click",turnOnGoLight);

turnOnStopLight();
turnOnSlowLight();
turnOnGoLight();
