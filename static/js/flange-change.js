$(document).ready(function(){
  var array = flange();
  var link  = array[0];
  var svgName = array[1];
  var size = $("#fourth-select-card").val().toString().replaceAll("\"", "");

  loadFileCSV(link, size, svgName);
})

$(document).on("change", function(){

  var array = flange();
  var link  = array[0];
  var svgName = array[1];
  var size = $("#fourth-select-card").val().toString().replaceAll("\"", "");

  selectChange(false);
  loadFileCSV(link, size, svgName);
})

function flange() {

  var select1st = $("#first-select-card").val();
  var select2nd = $("#second-select-card").val();
  var select3rd = $("#third-select-card").val();

  var select5th = $("#fifth-select-card").val();
  var select6th = $("#sixth-select-card").val();
  var select7th = $("#seventh-select-card").val();

  var card6thDiv = document.getElementById("card-6");
  var card6thSty = window.getComputedStyle(card6thDiv).display;

  var preLink = "https://raw.githubusercontent.com/PipingDesigner/PipingDesigner.github.io/main/database/";
  if (select3rd === "Slip-on Flange" || select3rd === "Blind Flange" || select3rd === "Threaded Flange" || select3rd === "Socket Welded Flange") {
    var postLink = select1st + "/" + select2nd + "/" + select3rd + "/flange" + select5th + select6th + ".csv"
    postLink = postLink.replace("#", "").replaceAll(" ", "-").toLowerCase();

  } else if (select3rd === "Weldneck Flange") {
    var postLink = select1st + "/" + select2nd + "/" + select3rd + "/flange" + select5th + select6th + select7th + ".csv"
    postLink = postLink.replace("#", "").replaceAll(" ", "-").toLowerCase();

  } else if (select3rd === "Long Welding Flange" || select3rd === "Lapped Flange") {
    var postLink = select1st + "/" + select2nd + "/" + select3rd + "/flange" + select5th + ".csv"
    postLink = postLink.replace("#", "").replaceAll(" ", "-").toLowerCase();

  }

  var link = preLink + postLink;

  var svgName = select6th + '-' + select3rd;
  if (card6thSty === "none" || select3rd === "Lapped Flange") {
    svgName = select3rd;
  }
  svgName = svgName.replaceAll(" ", "-").toLowerCase();

  return [link, svgName];
}

function loadFileCSV(file, size, svgName) {
  $.get(file, function(csv) {
    var data = $.csv.toArrays(csv, {
      onParseValue: $.csv.hooks.castToScalar
    });
    var index = getIndex(size, data);

    if (index === -1) {
      // Redirect to invalid parameters
      selectChange(true);

      return;
    }

    // Remove first element in array
    var removeElelemt = data[index].shift();
    var params = data[index];

    injectSVG(params, svgName);
  });
}

function injectSVG(params, svgName) {

  var svgChart = document.getElementById(svgName);
  var text = svgChart.getElementsByClassName("text-inject");

  for (var i = 0; i < text.length; i++) {
    text[i].textContent = params[i].toString().replace("*", "\xB0");
  }
}

function getIndex(size, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][0] == size) { return i; }
  }
  return -1;
}

