function tempBackwardButton() {
    if (model.counter == 0) return console.log('start of survey');
    model.counter -= 4;
    updateView();
}

function tempForwardButton() {
    if (model.counter == 20) return console.log('end of survey')
    model.counter += 4;
    updateView();
}