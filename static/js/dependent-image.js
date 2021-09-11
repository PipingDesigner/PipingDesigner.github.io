$(document).ready(function(){

  $('#first-select-card').on("change", function(e){
    var item = $("#first-select-card").val();
    if (item === "Pipe") {
      $("#item-svg-chart").attr('data', '/static/img/pipe.svg');
    } else if (item === "Flanges") {
      $("#item-svg-chart").attr('data', '/static/img/rf-weldneck-flange.svg');
    }
  })

  $('#second-select-card').on("change", function(e){
    var item = $("#second-select-card").val();
    if (item === "Pipe") {
      $("#item-svg-chart").attr('data', '/static/img/pipe.svg');
    }
  })

  $('#third-select-card').on("change", function(e){
    var item = $("#third-select-card").val();
    if (item === "Blind Flange") {
      $("#item-svg-chart").attr('data', '/static/img/rf-blind-flange.svg');
    } else if (item === "Weldneck Flange") {
      $("#item-svg-chart").attr('data', '/static/img/rf-weldneck-flange.svg');
    } else if (item === "Slip-on Flange") {
      $("#item-svg-chart").attr('data', '/static/img/rf-slipon-flange.svg');
    } else if (item === "Threaded Flange") {
      $("#item-svg-chart").attr('data', '/static/img/rf-threaded-flange.svg');
    } else if (item === "Socket Welded Flange") {
      $("#item-svg-chart").attr('data', '/static/img/rf-socket-flange.svg');
    } else if (item === "Lapped Flange") {
      $("#item-svg-chart").attr('data', '/static/img/rf-lapped-flange.svg');
    } else if (item === "Long Welding Flange") {
      $("#item-svg-chart").attr('data', '/static/img/rf-long-flange.svg');
    }
  })

  $('#sixth-select-card').on("change", function(e){
    var item1 = $("#third-select-card").val();
    var item2 = $("#sixth-select-card").val();

    if (item1 === "Weldneck Flange" && item2 === "RF") {
      $("#item-svg-chart").attr('data', '/static/img/rf-weldneck-flange.svg');
    } else if (item1 === "Weldneck Flange"  && item2 === "RTJ") {
      $("#item-svg-chart").attr('data', '/static/img/rtj-weldneck-flange.svg');
    } else if (item1 === "Slip-on Flange"  && item2 === "RF") {
      $("#item-svg-chart").attr('data', '/static/img/rf-slipon-flange.svg');
    } else if (item1 === "Slip-on Flange"  && item2 === "RTJ") {
      $("#item-svg-chart").attr('data', '/static/img/rtj-slipon-flange.svg');
    } else if (item1 === "Blind Flange"  && item2 === "RF") {
      $("#item-svg-chart").attr('data', '/static/img/rf-blind-flange.svg');
    } else if (item1 === "Blind Flange"  && item2 === "RTJ") {
      $("#item-svg-chart").attr('data', '/static/img/rtj-blind-flange.svg');
    } else if (item1 === "Threaded Flange"  && item2 === "RF") {
      $("#item-svg-chart").attr('data', '/static/img/rf-threaded-flange.svg');
    } else if (item1 === "Threaded Flange"  && item2 === "RTJ") {
      $("#item-svg-chart").attr('data', '/static/img/rtj-threaded-flange.svg');
    } else if (item1 === "Socket Welded Flange"  && item2 === "RF") {
      $("#item-svg-chart").attr('data', '/static/img/rf-socket-flange.svg');
    } else if (item1 === "Socket Welded Flange"  && item2 === "RTJ") {
      $("#item-svg-chart").attr('data', '/static/img/rtj-socket-flange.svg');
    }
  })
})
