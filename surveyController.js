function tempBackwardButton() {
    if (model.counter == 0) return console.log('start of survey');
    model.counter -= 4;
    model.progressBar -= 20;
    model.tempCounter--;
    updateView();
}

function tempForwardButton() {
    if (radioCheck()) {
        if (model.counter == 20) return console.log('end of survey');
        model.counter += 4;
        model.progressBar += 20;
        model.tempCounter++;
        updateView();
    } else console.log('Answer all the question');
}

function dataCol(x) {
    let id = parseInt(x.id);
    let val = parseInt(x.value);
    model.user.answer[id] = val;
}

function radioCheck() {
    for (let i = 0; i < 4; i++) {
        if (model.user.answer[model.counter + i] == undefined) return false;
    }
    return true;
}