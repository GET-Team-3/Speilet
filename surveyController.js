function tempBackwardButton() {
    if (model.counter == 0) return console.log('start of survey');
    model.counter -= 4;
    model.progressBar -= 20;
    model.tempCounter--;
    updateView();
}

function tempForwardButton() {
    if (model.counter == 20) return console.log('end of survey');
    model.counter += 4;
    model.progressBar += 20;
    model.tempCounter++;
    updateView();
}

function dataCol(x) {
    let id = parseInt(x.id);
    let val = parseInt(x.value);
    model.user.answer[id] = val;
}
