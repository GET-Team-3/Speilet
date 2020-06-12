function surveyView() {
    document.getElementById('content').innerHTML = `
    <div class="page">
        <p onclick="tempBackwardButton()" class="bV" style="${model.counter == 0 ? 'color:lightgray;cursor: not-allowed;' : ''}">◀</p>
        <div class="progressBar">
            <div class="progressBarInside" id="bar" style="width: ${model.progressBar}%;opacity: ${model.counter == 0 ? 0 : 1}"></div>
        </div>
        <div class="survey">
            <h2 class="theme">${model.survey[model.counter].theme}</h2>
            <hr>
            ${makeQuestionRow()}
            <div class="popup" style="display: none;">
                <textarea rows="20" cols="25" placeholder="Notes" id="notepad" class="notepad" onchange="pushNotes()">${model.user.note[model.counter] || ''}</textarea>
            </div>
            <button class="popbutton" onclick="showHideDiv()">Show/hide div</button>
        </div>
        <div class="page2">
            <p onclick="tempForwardButton()" class="bH">▶</p>
        </div>
    </div>
    `;
}

function makeQuestionRow() {
    let html = '';
    let row = model.survey[model.counter].row;
    for (let i = 0; i < row.length; i++) {
        html += `
            <h4 class="questions">${row[i].question}</h4>
            <h6 class="lowScoreAnswer">${row[i].negativeStatement}</h6>
            <div class="radioContainer">
                ${makeRadioButton(i)}
            </div>
            <h6 class="highScoreAnswer">${row[i].positiveStatement}</h6>
            <hr>
        `;
    }
    return html;
}

function makeRadioButton(questionIndex) {
    let html = '';
    for (let i = 1; i < 8; i++) {
        html += `
            <label class="buttonContainer label${i}">
                <input name="question${questionIndex}" type="radio" id="${model.counter * 4 + questionIndex}" value="${i}" 
                onchange="dataCol(this)" ${model.user.answer[model.counter * 4 + questionIndex] == i ? 'checked' : ''}>
                <span class="createCustomButton radio${i}"></span>
            </label>
        `;
    }
    return html;
}