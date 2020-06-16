function tempBackwardButton() {
    console.log(model.questionCounter)
    if (model.questionCounter == 0) return;
    if ([4,8,12,16,20].includes(model.questionCounter)) model.themeCounter--;
    model.questionCounter--;
    model.progressBar -= 4.16666666666;
    updateView();
}

function tempForwardButton() {
    if (radioCheck()) {
        if (model.questionCounter == 23) {
            // model.page = 'resultView';
            return updateView();
        }
        if ([3,7,11,15,19].includes(model.questionCounter)) model.themeCounter++;
        model.questionCounter++;
        model.progressBar += 4.16666666666;
        updateView();
    } else alert('Answer all the question');
}

function radioCheck() {
    if (model.user.answer[model.questionCounter] != undefined) return false;
    return true;

    // for (let i = 0; i < 4; i++) {
    //     if (model.user.answer[model.counter * 4 + i] == undefined) return false;
    // }
    // return true;
}

function dataCol(x) {
    let id = parseInt(x.id);
    let val = parseInt(x.value);
    model.user.answer[id] = val;
}

function showHideDiv() {
    let x =  document.getElementsByClassName('popup')[0];
    if (x.style.display == "none") x.style.display = "block";
    else x.style.display = "none";
}

function pushNotes() {
    let notepadValue = document.getElementById("notepad").value;
    let i = model.counter;
    model.user.note[i] = notepadValue;
}