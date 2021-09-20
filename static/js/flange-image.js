$(document).ready(function(){

  selectChange(false);

  $('#first-select-card').on("change", function(e){
    selectChange(false);
  
  })

  $('#second-select-card').on("change", function(e){
    selectChange(false);
  
  })

  $('#third-select-card').on("change", function(e){
    selectChange(false);
  
  })

  $('#sixth-select-card').on("change", function(e){
    selectChange(false);
  
  })

})
function selectChange(deadParam){

  // Create svg name
  var select1st = $("#first-select-card").val();
  var select2nd = $("#second-select-card").val();
  var select3rd = $("#third-select-card").val();
  var select6th = $("#sixth-select-card").val();

  var card6thDiv = document.getElementById("card-6");
  var card6thSty = window.getComputedStyle(card6thDiv).display;

  var svgName = select6th + '-' + select3rd;
  if (deadParam) {
    svgName = "dead-param";
  } else if (card6thSty === "none" || select3rd === "Lapped Flange") {
    svgName = select3rd;
  }
  svgName = svgName.replaceAll(" ", "-").toLowerCase();

  var imageFluid = document.getElementById("svg-content");
  var allSvg = imageFluid.getElementsByClassName("item-chart");

  // svgName follow name of svg image
  // svgId follow id of svg tag in html
  for (var i = 0; i < allSvg.length; i++) {
    var svgId = allSvg[i].id;
    var svgIdx = "#" + svgId;
    svgId === svgName ? $(svgIdx).show() : $(svgIdx).hide();
  }
}