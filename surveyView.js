function surveyView() {
    document.getElementById('content').innerHTML = `
    <div class="page">
            <p onclick="tempBackwardButton()" class="bV bothB ${model.questionCounter == 0 ? 'noHover' : ''}" style="${model.questionCounter == 0 ? 'color:lightgray' : ''}">◀</p>
        <div class="progressBar">
            <div class="progressBarInside" id="bar" style="width: ${model.progressBar < 96 ? model.progressBar : 100}%;opacity: ${model.questionCounter == 0 ? 0 : 1}">${model.questionCounter + 1}/24</div>
        </div>
        <div class="survey">
            <h2 class="theme">${model.theme[model.themeCounter]}</h2>
            <hr>
            ${makeQuestionRow()}
            <div class="popup" style="display: none;">
                <textarea rows="20" cols="25" placeholder="Notes" id="notepad" class="notepad" onchange="pushNotes()">${model.user.note[model.counter] || ''}</textarea>
            </div>
            <button class="popbutton" onclick="showHideDiv()">Show/hide div</button>
        </div>
        <div class="page2">
            <p onclick="tempForwardButton()" class="bH bothB" style="${model.questionCounter == 23 ? 'color:red' : ''}">▶</p>
        </div>
    </div>
    `;
    console.log(model.themeCounter)
}

function makeQuestionRow() {
    let row = model.survey[model.questionCounter];
    let html = `
            <h4 class="questions">${row.question}</h4>
            <h6 class="lowScoreAnswer">${row.negativeStatement}</h6>
            <div class="radioContainer">
                ${makeRadioButton()}
            </div>
            <h6 class="highScoreAnswer">${row.positiveStatement}</h6>
            <hr>
        `;
    return html;
}

function makeRadioButton() {
    let html = '';
    for (let i = 1; i < 8; i++) {
        html += `
            <label class="buttonContainer label${i}">
                <input name="question${model.questionCounter}" type="radio" id="${model.questionCounter}" value="${i}" 
                onchange="answer(this)" ${model.user.answer[model.questionCounter] == i ? 'checked' : ''}>
                <span class="createCustomButton radio${i}"></span><span class="numbersUnderCheckmark">${i}</span>
            </label>
        `;
    }
    return html;
}