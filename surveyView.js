function surveyView() {
    document.getElementById('content').innerHTML = `
    <div class="page">
        <p class="bV">◀</p>
        <div class="progressBar">
            <div class="progressBarInside">1/6</div>
        </div>
        <div class="survey">
        <h2 class="theme">${model.theme[0]}</h2>
        <hr>
        ${makeQuestionRow()}
        </div>
        <input type="text" class="notepad" placeholder="Notes"/>
        <div class="page2">
            <p class="bH">▶</p>
        </div>
    </div>
    `;
}

function makeQuestionRow() {
    let html = '';
    let teller = model.counter + 4;
    for (model.counter; model.counter < teller; model.counter++) {
        console.log(model.counter);
        html += `
            <h4 class="questions">${model.survey[model.counter].question}</h4>
            <h6 class="lowScoreAnswer">${model.survey[model.counter].negativeStatement}</h6>
            <div class="radioContainer">
                ${makeRadioButton()}
            </div>
            <h6 class="highScoreAnswer">${model.survey[model.counter].positiveStatement}</h6>
            <hr>
        `;
    }
    return html;
}

function makeRadioButton() {
    let html = '';
    for (let i = 1; i < 8; i++) {
        html += `
            <label class="buttonContainer label${i}">
                <input name="question${model.counter}" type="radio" id="radio${model.counter}${i}" value="${i}">
                <span class="createCustomButton radio${i}"></span>
            </label>
        `;
    }
    return html;
}