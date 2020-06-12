function tempBackwardButton() {
    if (model.counter == 0) return console.log('start of survey');
    model.counter--;
    model.progressBar -= 20;
    updateView();
}

function tempForwardButton() {
    if (radioCheck()) {
        if (model.counter == 5) {
            model.page = 'resultView';
            return updateView();
        }
        model.counter++;
        model.progressBar += 20;
        updateView();
    } else alert('Answer all the question');
}

function dataCol(x) {
    let id = parseInt(x.id);
    let val = parseInt(x.value);
    model.user.answer[id] = val;
}

function radioCheck() {
    for (let i = 0; i < 4; i++) {
        if (model.user.answer[model.counter * 4 + i] == undefined) return false;
    }
    return true;
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

