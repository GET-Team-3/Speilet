function tempBackwardButton() {
    if (model.questionCounter == 0) return;
    if ([4,8,12,16,20].includes(model.questionCounter)) model.themeCounter--;
    model.questionCounter--;
    model.progressBar -= 4.34782608695;
    updateView();
}

function tempForwardButton() {
    if (model.user.answer[model.questionCounter] == undefined) {
        if (model.questionCounter == 23) {
             model.page = 'resultView';
            return updateView();
        }
        if ([3,7,11,15,19].includes(model.questionCounter)) model.themeCounter++;
        model.questionCounter++;
        model.progressBar += 4.34782608695;
        updateView();
    } else alert('Answer all the question');
}

function answer(x) {
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
    let i = model.questionCounter;
    model.user.note[i] = notepadValue;
}

window.addEventListener('click', (event) => {
    let popup = document.getElementsByClassName('popup')[0];
    let popbutton = document.getElementsByClassName('popbutton')[0];
    if (model.page == 'surveyView' && !popup.contains(event.target) && !popbutton.contains(event.target) && popup.style.display == 'block') popup.style.display = "none";
})