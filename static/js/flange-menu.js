var pipeParams = {
  "Flanges": {
  	"ASME B16.5 Flanges": {
  		"Weldneck Flange": {
  			"Size": ["0+1/2\"", "0+3/4\"", "1\"", "1+1/4\"", "1+1/2\"", "2\"", "2+1/2\"", "3\"", "3+1/2\"", "4\"", "5\"", "8\"", "10\"", "12\"", "14\"", "16\"", "18\"", "20\"", "24\""],
  			"Class": ["150#", "300#", "400#", "600#", "900#", "1500#", "2500#"],
  			"Face": ["RF", "RTJ"],
  			"Schedule": ["5s", "5", "10s", "10", "20", "30", "40s", "STD", "40", "60", "80s", "XS", "80", "100", "120", "140", "160", "XXS"]
  		},
  		"Slip-on Flange": {
  			"Size": ["0+1/2\"", "0+3/4\"", "1\"", "1+1/4\"", "1+1/2\"", "2\"", "2+1/2\"", "3\"", "3+1/2\"", "4\"", "5\"", "8\"", "10\"", "12\"", "14\"", "16\"", "18\"", "20\"", "24\""],
  			"Class": ["150#", "300#", "400#", "600#", "900#", "1500#"],
  			"Face": ["RF", "RTJ"]
  		},
  		"Blind Flange": {
  			"Size": ["0+1/2\"", "0+3/4\"", "1\"", "1+1/4\"", "1+1/2\"", "2\"", "2+1/2\"", "3\"", "3+1/2\"", "4\"", "5\"", "8\"", "10\"", "12\"", "14\"", "16\"", "18\"", "20\"", "24\""],
  			"Class": ["150#", "300#", "400#", "600#", "900#", "1500#", "2500#"],
  			"Face": ["RF", "RTJ"]
  		},
  		"Threaded Flange": {
  			"Size": ["0+1/2\"", "0+3/4\"", "1\"", "1+1/4\"", "1+1/2\"", "2\"", "2+1/2\"", "3\"", "3+1/2\"", "4\"", "5\"", "8\"", "10\"", "12\"", "14\"", "16\"", "18\"", "20\"", "24\""],
  			"Class": ["150#", "300#", "400#", "600#", "900#", "1500#", "2500#"],
  			"Face": ["RF", "RTJ"]
  		},
  		"Socket Welded Flange": {
  			"Size": ["0+1/2\"", "0+3/4\"", "1\"", "1+1/4\"", "1+1/2\"", "2\"", "2+1/2\"", "3\""],
  			"Class": ["150#", "300#", "600#", "1500#"],
  			"Face": ["RF", "RTJ"]
  		},
  		"Lapped Flange": {
  			"Size": ["0+1/2\"", "0+3/4\"", "1\"", "1+1/4\"", "1+1/2\"", "2\"", "2+1/2\"", "3\"", "3+1/2\"", "4\"", "5\"", "8\"", "10\"", "12\"", "14\"", "16\"", "18\"", "20\"", "24\""],
  			"Class": ["150#", "300#", "400#", "600#", "900#", "1500#", "2500#"]
  		},
  		"Long Welding Flange": {
  			"Size": ["0+1/2\"", "0+3/4\"", "1\"", "1+1/4\"", "1+1/2\"", "2\"", "2+1/2\"", "3\"", "3+1/2\"", "4\"", "5\"", "8\"", "10\"", "12\"", "14\"", "16\"", "18\"", "20\"", "24\""],
  			"Class": ["150#", "300#", "600#", "900#"]
  		}
  	},
  	"ASME B16.47 Series A Flanges": {
      "Series A Weldneck Flange": {
        "Size": ["26\"", "28\"", "30\"", "32\"", "34\"", "36\"", "38\"", "40\"", "42\"", "44\"", "46\"", "48\"", "52\"", "54\"", "56\"", "58\"", "60\""],
        "Class": ["150#", "400#", "300#", "600#", "900#"],
        "Face": ["RF", "RTJ"]
      },
      "Series A Blind Flange": {
        "Size": ["26\"", "28\"", "30\"", "32\"", "34\"", "36\"", "38\"", "40\"", "42\"", "44\"", "46\"", "48\"", "52\"", "54\"", "56\"", "58\"", "60\""],
        "Class": ["150#", "400#", "300#", "600#", "900#"],
        "Face": ["RF", "RTJ"]
      }
  	},
  	"ASME B16.47 Series B Flanges": {
      "Series B Weldneck Flange": {
        "Size": ["26\"", "28\"", "30\"", "32\"", "34\"", "36\"", "38\"", "40\"", "42\"", "44\"", "46\"", "48\"", "52\"", "54\"", "56\"", "58\"", "60\""],
        "Class": ["150#", "400#", "300#", "600#", "900#"]
      },
      "Series B Blind Flange": {
        "Size": ["26\"", "28\"", "30\"", "32\"", "34\"", "36\"", "38\"", "40\"", "42\"", "44\"", "46\"", "48\"", "52\"", "54\"", "56\"", "58\"", "60\""],
        "Class": ["150#", "400#", "300#", "600#", "900#"]
      }
  	},
  	"ASME Orifice Flanges": {
      "Weldneck Orifice Flange": {
        "Size": ["1\"", "1+1/2\"", "3\"", "3+1/2\"", "4\"", "5\"", "8\"", "10\"", "12\"", "14\"", "16\"", "18\"", "20\"", "22\"", "24\""],
        "Class": ["300#", "600#", "900#", "1500#", "2500#"]
      },
      "Slip-on Orifice Flange": {
        "Size": ["1\"", "1+1/2\"", "3\"", "3+1/2\"", "4\"", "5\"", "8\"", "10\"", "12\"", "14\"", "16\"", "18\"", "20\"", "22\"", "24\""],
        "Class": ["300#"]
      },
      "Threaded Orifice Flange": {
        "Size": ["1\"", "1+1/2\"", "3\"", "3+1/2\"", "4\"", "5\"", "8\"", "10\"", "12\"", "14\"", "16\"", "18\"", "20\"", "22\"", "24\""],
        "Class": ["300#"]
      }
  	},
  	"API Type 6B Flanges": {
      "API Type 6B Weldneck Flange": {
        "API Size": ["2+1/16\"", "2+9/16\"", "3+1/8\"", "4+1/16\"", "5+1/8\"", "7+1/16\"", "9\"", "11\""],
        "API Rating": ["13.8 MPa", "20.7 MPa", "34.5 MPa"]
      },
      "API Type 6B Threaded Flange": {
        "API Size": ["2+1/16\"", "2+9/16\"", "3+1/8\"", "4+1/16\"", "5+1/8\"", "7+1/16\"", "9\"", "11\"", "13+5/8\"", "16+3/4\"", "21+1/4\""],
        "API Rating": ["13.8 MPa", "20.7 MPa", "34.5 MPa"]
      }
  	},
  	"API Type 6BX Flanges": {
      "API Type BX Weldneck Flange": {
        "API Size": ["1+13/16\"", "2+1/16\"", "2+9/16\"", "3+1/16\"", "4+1/16\"", "5+1/8\"", "7+1/16\"", "9\"", "11\"", "13+5/8\"", "16+3/4\""],
        "API Rating": ["69.0 MPa", "103.5 MPa", "138.0 MPa"]
      },
      "API Type BX Blind and Test Flange": {
        "API Size": ["1+13/16\"", "2+1/16\"", "2+9/16\"", "3+1/16\"", "4+1/16\"", "5+1/8\""],
        "API Rating": ["69.0 MPa", "103.5 MPa", "138.0 MPa"]
      }
  	},
  	"ASME Reducing Flanges": {
      "Threaded Reducing Flange": {
        "Size": ["1/2\"", "3/4\"", "1\"", "1+1/4\"", "1+1/2\"", "2\"", "2+1/2\"", "3\"", "3+1/2\"", "4\"", "5\"", "6\"", "8\"", "10\"", "12\"", "14\"", "16\"", "18\"", "20\"", "22\"", "24\""],
        "Small Size": ["3/8\"", "1/2\"", "3/4\"", "1\""],
        "Class": ["150#", "300#", "400#", "600#", "900#", "1500#", "2500#"]
      },
      "Slip-On Reducing Flange": {
        "Size": ["1/2\"", "3/4\"", "1\"", "1+1/4\"", "1+1/2\"", "2\"", "2+1/2\"", "3\"", "3+1/2\"", "4\"", "5\"", "6\"", "8\"", "10\"", "12\"", "14\"", "16\"", "18\"", "20\"", "22\"", "24\""],
        "Small Size": ["3/8\"", "1/2\"", "3/4\"", "1\""],
        "Class": ["150#", "300#", "400#", "600#", "900#", "1500#", "2500#"]
      }
  	},
  	"ASME Compact Flanges": {
      "Compact Flange": {
        "Size": ["1\"", "1+1/4\"", "1+1/2\"", "2\"", "2+1/2\"", "3\"", "4\"", "5\"", "6\"", "8\"", "10\"", "12\"", "14\"", "16\"", "18\"", "20\"", "24\"", "30\"", "36\"", "40\""],
        "Class": ["300#", "600#", "900#", "1500#", "2500#"]
      },
      "Compact Swivel Flange": {
        "Size": ["1+1/2\"", "2\"", "2+1/2\"", "3\"", "4\"", "5\"", "6\"", "8\""],
        "Class": ["300#", "600#", "900#", "1500#", "2500#"]
      },
      "Compact Blind Flange": {
        "Size": ["1\"", "1+1/4\"", "1+1/2\"", "2\"", "2+1/2\"", "3\"", "4\"", "5\"", "6\"", "8\"", "10\"", "12\"", "14\"", "16\"", "18\"", "20\"", "24\"", "30\"", "36\"", "40\""],
        "Class": ["300#", "600#", "900#", "1500#", "2500#"]
      }
  	},
  	// "Hub and Clamp": {
   //    "Size": ["12\""],
   //    "Schedule": ["STD", "40", "60", "80", "120", "160", "XXS"]
  	// },
  	"DIN Flanges": {
      "DIN Plate Flange": {
        "Size": ["3/8\"", "1/2\"", "3/4\"", "1\"", "1+1/4\"", "1+1/2\"", "2\"", "2+1/2\"", "3\"", "3+1/2\"", "4\"", "5\"", "6\"", "8\"", "10\"", "12\"", "14\"", "16\""],
        "PN": ["PN 2.5", "PN 6", "PN 10", "PN 16", "PN 25", "PN 40", "PN 63", "PN 100"]
      },
      "DIN Blind Flange": {
        "Size": ["3/8\"", "1/2\"", "3/4\"", "1\"", "1+1/4\"", "1+1/2\"", "2\"", "2+1/2\"", "3\"", "3+1/2\"", "4\"", "5\"", "6\"", "8\"", "10\"", "12\"", "14\"", "16\"", "18\"", "20\"", "24\""],
        "PN": ["PN 2.5", "PN 6", "PN 10", "PN 16", "PN 25", "PN 40", "PN 63", "PN 100"]
      },
      "DIN Weldneck Flange": {
        "Size": ["3/8\"", "1/2\"", "3/4\"", "1\"", "1+1/4\"", "1+1/2\"", "2\"", "2+1/2\"", "3\"", "3+1/2\"", "4\"", "5\"", "6\"", "8\"", "10\"", "12\"", "14\"", "16\"", "18\"", "20\"", "24\""],
        "PN": ["PN 6", "PN 10", "PN 16", "PN 25", "PN 40", "PN 63", "PN 100", "PN 160", "PN 250", "PN 320", "PN 400"]
      },
      "DIN Slip-On Flange": {
        "Size": ["3/8\"", "1/2\"", "3/4\"", "1\"", "1+1/4\"", "1+1/2\"", "2\"", "2+1/2\"", "3\"", "3+1/2\"", "4\"", "5\"", "6\"", "8\"", "10\"", "12\"", "14\"", "16\"", "18\"", "20\"", "24\""],
        "PN": ["PN 6", "PN 10", "PN 16", "PN 25", "PN 40", "PN 63", "PN 100"]
      },
      "DIN Threaded Flange": {
        "Size": ["3/8\"", "1/2\"", "3/4\"", "1\"", "1+1/4\"", "1+1/2\"", "2\"", "2+1/2\"", "3\"", "3+1/2\"", "4\"", "5\"", "6\"", "8\"", "10\"", "12\"", "14\"", "16\"", "18\"", "20\"", "24\""],
        "PN": ["PN 6", "PN 10", "PN 16", "PN 25", "PN 40", "PN 63", "PN 100"]
      }
  	},
  	// "BS10 Flanges": {
   //    "Size": ["1\"", "1+1/4\"", "1+1/2\"", "2\"", "2+1/2\"", "3\"", "3+1/2\"", "4\"", "5\"", "6\"", "8\"", "10\"", "12\"", "13\"", "14\"", "15\"", "16\"", "17\"", "18\"", "19\"", "20\"", "21\"", "22\"", "23\"", "24\"", "27\"", "29\"", "30\"", "33\"", "35\"", "36\"", "39\"", "42\"", "45\"", "48\"", "54\"", "60\"", "66\"", "72\"", "78\"", "84\"", "96\""],
   //    "Table": ["Table A", "Table D", "Table E", "Table F", "Table H", "Table J", "Table K", "Table R", "Table S", "Table T"]
  	// }
  }
}

$(document).ready(function(){

  // Initiate
  var card1st = document.getElementById("first-select-card");
  var card2nd = document.getElementById("second-select-card");
  var card3rd = document.getElementById("third-select-card");
  var card4th = document.getElementById("fourth-select-card");
  var card5th = document.getElementById("fifth-select-card");
  var card6th = document.getElementById("sixth-select-card");
  var card7th = document.getElementById("seventh-select-card");

  init1st = "Flanges";
  init2nd = "ASME B16.5 Flanges";
  init3rd = "Weldneck Flange";
  init4th = "Size";
  init5th = "Class";
  init6th = "Face";
  init7th = "Schedule";

  var initVar = [init1st, init2nd, init3rd, init4th, init5th, init6th, init7th];
  var cardVar = [card1st, card2nd, card3rd, card4th, card5th, card6th, card7th];

  // Run init state
  var state = 1; // mean init with 1st card change
  initState(pipeParams, initVar, cardVar, state);

  // Show card name
  $('#text-card-2').text("Sub");
  $('#text-card-3').text("Type");
  $('#text-card-4').text("Size");
  $('#text-card-5').text("Class");
  $('#text-card-6').text("Face");
  $('#text-card-7').text("Schedule");

  // 2nd card action
  $("#second-select-card").change(function() {
    card3rd.length = 0;
    card4th.length = 0;
    card5th.length = 0;
    card6th.length = 0;
    card7th.length = 0;

    if (card2nd.value === "ASME B16.5 Flanges") {
 
      // Initial state
      init1st = "Flanges";
      init2nd = "ASME B16.5 Flanges";
      init3rd = "Weldneck Flange";
      init4th = "Size";
      init5th = "Class";
      init6th = "Face";
      init7th = "Schedule";

      var initVar = [init1st, init2nd, init3rd, init4th, init5th, init6th, init7th];
      var state = 2; // mean init with 2nd card change
      initState(pipeParams, initVar, cardVar, state);

      $('#text-card-4').text("Size");
      $('#text-card-5').text("Class");
      $('#text-card-6').text("Face");
      $('#text-card-7').text("Schedule");

      $('#card-4').show();
      $('#card-5').show();
      $('#card-6').show();
      $('#card-7').show();

    } else if (card2nd.value === "ASME B16.47 Series A Flanges") {

      // Initial state
      init1st = "Flanges";
      init2nd = "ASME B16.47 Series A Flanges";
      init3rd = "Series A Weldneck Flange";
      init4th = "Size";
      init5th = "Class";
      init6th = "Face";
      init7th = "Schedule";

      var initVar = [init1st, init2nd, init3rd, init4th, init5th, init6th, init7th];
      var state = 2;
      initState(pipeParams, initVar, cardVar, state);

      $('#text-card-4').text("Size");
      $('#text-card-5').text("Class");
      $('#text-card-6').text("Face");

      $('#card-4').show();
      $('#card-5').show();
      $('#card-6').show();
      $('#card-7').hide();

    } else if (card2nd.value === "ASME B16.47 Series B Flanges") {

      // Initial state
      init1st = "Flanges";
      init2nd = "ASME B16.47 Series B Flanges";
      init3rd = "Series B Weldneck Flange";
      init4th = "Size";
      init5th = "Class";
      init6th = "Face";
      init7th = "Schedule";

      var initVar = [init1st, init2nd, init3rd, init4th, init5th, init6th, init7th];
      var state = 2;
      initState(pipeParams, initVar, cardVar, state);

      $('#text-card-4').text("Size");
      $('#text-card-5').text("Class");

      $('#card-4').show();
      $('#card-5').show();
      $('#card-6').hide();
      $('#card-7').hide();

    } else if (card2nd.value === "ASME Orifice Flanges") {

      // Initial state
      init1st = "Flanges";
      init2nd = "ASME Orifice Flanges";
      init3rd = "Weldneck Orifice Flange";
      init4th = "Size";
      init5th = "Class";
      init6th = "Face";
      init7th = "Schedule";

      var initVar = [init1st, init2nd, init3rd, init4th, init5th, init6th, init7th];
      var state = 2;
      initState(pipeParams, initVar, cardVar, state);

      $('#text-card-4').text("Size");
      $('#text-card-5').text("Class");

      $('#card-4').show();
      $('#card-5').show();
      $('#card-6').hide();
      $('#card-7').hide();

    } else if (card2nd.value === "API Type 6B Flanges") {

      // Initial state
      init1st = "Flanges";
      init2nd = "API Type 6B Flanges";
      init3rd = "API Type 6B Weldneck Flange";
      init4th = "API Size";
      init5th = "API Rating";
      init6th = "Face";
      init7th = "Schedule";

      var initVar = [init1st, init2nd, init3rd, init4th, init5th, init6th, init7th];
      var state = 2;
      initState(pipeParams, initVar, cardVar, state);

      $('#text-card-4').text("API Size");
      $('#text-card-5').text("API Rating");

      $('#card-4').show();
      $('#card-5').show();
      $('#card-6').hide();
      $('#card-7').hide();

    } else if (card2nd.value === "API Type 6BX Flanges") {

      // Initial state
      init1st = "Flanges";
      init2nd = "API Type 6BX Flanges";
      init3rd = "API Type BX Weldneck Flange";
      init4th = "API Size";
      init5th = "API Rating";
      init6th = "Face";
      init7th = "Schedule";

      var initVar = [init1st, init2nd, init3rd, init4th, init5th, init6th, init7th];
      var state = 2;
      initState(pipeParams, initVar, cardVar, state);

      $('#text-card-4').text("API Size");
      $('#text-card-5').text("API Rating");

      $('#card-4').show();
      $('#card-5').show();
      $('#card-6').hide();
      $('#card-7').hide();

    } else if (card2nd.value === "ASME Reducing Flanges") {

      // Initial state
      init1st = "Flanges";
      init2nd = "ASME Reducing Flanges";
      init3rd = "Threaded Reducing Flange";
      init4th = "Size";
      init5th = "Small Size";
      init6th = "Class";
      init7th = "Schedule";

      var initVar = [init1st, init2nd, init3rd, init4th, init5th, init6th, init7th];
      var state = 2;
      initState(pipeParams, initVar, cardVar, state);

      $('#text-card-4').text("Size");
      $('#text-card-5').text("Small Size");
      $('#text-card-6').text("Class");

      $('#card-4').show();
      $('#card-5').show();
      $('#card-6').show();
      $('#card-7').hide();
      
    } else if (card2nd.value === "ASME Compact Flanges") {

      // Initial state
      init1st = "Flanges";
      init2nd = "ASME Compact Flanges";
      init3rd = "Compact Flange";
      init4th = "Size";
      init5th = "Class";
      init6th = "Class";
      init7th = "Schedule";

      var initVar = [init1st, init2nd, init3rd, init4th, init5th, init6th, init7th];
      var state = 2;
      initState(pipeParams, initVar, cardVar, state);

      $('#text-card-4').text("Size");
      $('#text-card-5').text("Class");

      $('#card-4').show();
      $('#card-5').show();
      $('#card-6').hide();
      $('#card-7').hide();
      
    } else if (card2nd.value === "DIN Flanges") {

      // Initial state
      init1st = "Flanges";
      init2nd = "DIN Flanges";
      init3rd = "Plate Flange";
      init4th = "Size";
      init5th = "PN";
      init6th = "Class";
      init7th = "Schedule";

      var initVar = [init1st, init2nd, init3rd, init4th, init5th, init6th, init7th];
      var state = 2;
      initState(pipeParams, initVar, cardVar, state);

      $('#text-card-4').text("Size");
      $('#text-card-5').text("PN");

      $('#card-4').show();
      $('#card-5').show();
      $('#card-6').hide();
      $('#card-7').hide();
      
    }
  })

  // Third card action
  $("#third-select-card").change(function() {
    // Empty card selection
    card4th.length = 0;
    card5th.length = 0;
    card6th.length = 0;
    card7th.length = 0;

    if (card3rd.value === "Weldneck Flange") {
      var cardParams = [card4th, card5th, card6th, card7th];
      var dimensionParams = pipeParams[init1st][card2nd.value][this.value];
      var paramKeys = Object.keys(dimensionParams);

      for (var i = 0; i < paramKeys.length; i++) {
        var param = paramKeys[i];
        var cardOption = cardParams[i];
        var elements = dimensionParams[param];

        for (var j = 0; j < elements.length; j++) {
          cardOption.options[cardOption.options.length] = new Option(elements[j], elements[j]);
        }
      }

      $('#card-2').show();
      $('#card-3').show();
      $('#card-4').show();
      $('#card-5').show();
      $('#card-6').show();
      $('#card-7').show();

    } else if (card3rd.value === "Slip-on Flange" || card3rd.value === "Blind Flange" || card3rd.value === "Threaded Flange" || card3rd.value === "Socket Welded Flange") {
      var cardParams = [card4th, card5th, card6th];
      var dimensionParams = pipeParams[init1st][card2nd.value][this.value];
      var paramKeys = Object.keys(dimensionParams);

      for (var i = 0; i < paramKeys.length; i++) {
        var param = paramKeys[i];
        var cardOption = cardParams[i];
        var elements = dimensionParams[param];

        for (var j = 0; j < elements.length; j++) {
          cardOption.options[cardOption.options.length] = new Option(elements[j], elements[j]);
        }
      }

      $('#text-card-6').text("Face");

      $('#card-2').show();
      $('#card-3').show();
      $('#card-4').show();
      $('#card-5').show();
      $('#card-6').show();
      $('#card-7').hide();

    } else if (card3rd.value === "Long Welding Flange" || card3rd.value === "Lapped Flange") {
      var cardParams = [card4th, card5th];
      var dimensionParams = pipeParams[init1st][card2nd.value][this.value];
      var paramKeys = Object.keys(dimensionParams);

      for (var i = 0; i < paramKeys.length; i++) {
        var param = paramKeys[i];
        var cardOption = cardParams[i];
        var elements = dimensionParams[param];

        for (var j = 0; j < elements.length; j++) {
          cardOption.options[cardOption.options.length] = new Option(elements[j], elements[j]);
        }
      }

      $('#card-2').show();
      $('#card-3').show();
      $('#card-4').show();
      $('#card-5').show();
      $('#card-6').hide();
      $('#card-7').hide();

    }
  })
});