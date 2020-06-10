function surveyView() {
    document.getElementById('content').innerHTML = `
    <div class="page">
        <p onclick="tempBackwardButton()" class="bV">◀</p>
        <div class="progressBar">
            <div class="progressBarInside" id="bar" style="width: ${model.progressBar}%;opacity: ${model.counter == 0 ? 0 : 1}"></div>
        </div>
        <div class="survey">
        <h2 class="theme">${model.survey[model.counter].theme}</h2>
        <hr>
        ${makeQuestionRow()}
        </div>
        <input type="text" class="notepad" placeholder="Notes"/>
        <div class="page2">
            <p onclick="tempForwardButton()" class="bH">▶</p>
        </div>
    </div>
    `;
}

function makeQuestionRow() {
    let html = '';
    for (let i = 0; i < 4; i++) {
        html += `
            <h4 class="questions">${model.survey[model.counter].row[i].question}</h4>
            <h6 class="lowScoreAnswer">${model.survey[model.counter].row[i].negativeStatement}</h6>
            <div class="radioContainer">
                ${makeRadioButton(i)}
            </div>
            <h6 class="highScoreAnswer">${model.survey[model.counter].row[i].positiveStatement}</h6>
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