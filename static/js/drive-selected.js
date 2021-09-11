$(document).ready(function(){
  $('#form-card-4').on("change", function(e){
    if ($("#first-select-card").val() === "Pipe") {
    	pipe(e);
    } else if ($("#first-select-card").val() === "Flanges") {
      flange(e);
    }
  })

  $('#form-card-5').on("change", function(e){
    if ($("#first-select-card").val() === "Pipe") {
      pipe(e);
    } else if ($("#first-select-card").val() === "Flanges") {
      flange(e);
    }
  })

  $('#form-card-6').on("change", function(e){
    if ($("#first-select-card").val() === "Flanges") {
      flange(e);
    }
  })

  $('#form-card-7').on("change", function(e){
    if ($("#first-select-card").val() === "Flanges") {
      flange(e);
    }
  })
})

function pipe(e) {
  var firstSelection = $("#first-select-card").val();
  var secondSelection = $("#second-select-card").val();
  var fourthSelection = $("#fourth-select-card").val();
  var fifthSelection = $("#fifth-select-card").val();

  e.preventDefault();
  $.ajax({
    url: "http://127.0.0.1:5000/pipe/",
    data: {"card-select-1": firstSelection,
          "card-select-2": secondSelection,
          "card-select-4": fourthSelection,
          "card-select-5": fifthSelection},
    method: "POST",
    success: function(data) {
      var params = data["result"];
      injectSVG(params);
    }
  })
}

function flange(e) {
  var firstSelection = $("#first-select-card").val();
  var secondSelection = $("#second-select-card").val();
  var thirdSelection = $("#third-select-card").val();
  var fourthSelection = $("#fourth-select-card").val();
  var fifthSelection = $("#fifth-select-card").val();
  var sixthSelection = $("#sixth-select-card").val();
  var seventhSelection = $("#seventh-select-card").val();

  e.preventDefault();
  $.ajax({
    url: "http://127.0.0.1:5000/flange/",
    data: {"card-select-1": firstSelection,
           "card-select-2": secondSelection,
           "card-select-3": thirdSelection,
           "card-select-4": fourthSelection,
           "card-select-5": fifthSelection,
           "card-select-6": sixthSelection,
           "card-select-7": seventhSelection},
    method: "POST",
    success: function(data) {
      var params = data["result"];
      injectSVG(params);
    }
  })
}

function injectSVG(params) {
  if (params === "IndexError") {
    alert("Not manufactured with the selected parameters. Try another parameters.");
    return;
  }

  var svgChart = document.getElementById("item-svg-chart").contentDocument;
  var text = svgChart.querySelectorAll('text.text-inject');

  for (var i = 0; i < text.length; i++) {
    text[i].textContent = params[i];
    if (params[i].includes("*")) {
      text[i].textContent = params[i].replace("*", "\xB0")
    }
  }
}
