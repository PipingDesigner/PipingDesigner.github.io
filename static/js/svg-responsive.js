$(document).ready(function() {
  var svg = $("#item-svg-chart").attr('data');
  if ($(window).width() < 595) {
    if (!svg.includes('small.svg')) {
      svg = svg.replace('.svg', '-small.svg');
    }
  } else if ($(window).width() > 595) {
    if (svg.includes('small.svg')) {
      svg = svg.replace('-small.svg', '.svg');
    }
  }
  $("#item-svg-chart").attr('data', svg);
})

$(window).resize(function(e) {
  var svg = $("#item-svg-chart").attr('data');
  if ($(window).width() < 595) {
    if (!svg.includes('small.svg')) {
      svg = svg.replace('.svg', '-small.svg');
    }
  } else if ($(window).width() > 595) {
    if (svg.includes('small.svg')) {
      svg = svg.replace('-small.svg', '.svg');
    }
  }
  $("#item-svg-chart").attr('data', svg);
});
