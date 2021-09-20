function initState(pipeParams, initVar, cardVar, state) {

  // Variables
  var init1st = initVar[0];
  var init2nd = initVar[1];
  var init3rd = initVar[2];
  var init4th = initVar[3];
  var init5th = initVar[4];
  var init6th = initVar[5];
  var init7th = initVar[6];

  var card1st = cardVar[0];
  var card2nd = cardVar[1];
  var card3rd = cardVar[2];
  var card4th = cardVar[3];
  var card5th = cardVar[4];
  var card6th = cardVar[5];
  var card7th = cardVar[6];

  if (state === 1) {
    for (var x in pipeParams[init1st]) {
      card2nd.options[card2nd.options.length] = new Option(x, x);
    }

    for (var y in pipeParams[init1st][init2nd]) {
      card3rd.options[card3rd.options.length] = new Option(y, y);
    }
  }

  if (state === 2) {
    for (var y in pipeParams[init1st][init2nd]) {
      card3rd.options[card3rd.options.length] = new Option(y, y);
    }
  }

  var cardParams = [card4th, card5th, card6th, card7th];
  var dimensionParams = pipeParams[init1st][card2nd.value][init3rd];
  var paramKeys = Object.keys(dimensionParams);

  for (var i = 0; i < paramKeys.length; i++) {
    var param = paramKeys[i];
    var cardOption = cardParams[i];
    var elements = dimensionParams[param];

    for (var j = 0; j < elements.length; j++) {
      cardOption.options[cardOption.options.length] = new Option(elements[j], elements[j]);
    }
  }
}