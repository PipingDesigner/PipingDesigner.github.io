$(document).ready(() => {
        $('#demo-bt').bind('click', function () {
        loadFile();
      });
      });

function loadFile() {
        var file = "/database/Pipe/Schedule/pipe10.csv";
        $.get(file, function(csv) {
            var data = $.csv.toArrays(csv, {
              onParseValue: $.csv.hooks.castToScalar
            });
            console.log(data);
        });
      }