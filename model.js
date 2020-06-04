const model = {
    user: [],
    theme: [],
    question: [],
    page: 'surveyView',
    date: '',
};

let temp = {name: '', answer: [], note: []}

let content = document.getElementById('content');
function show() {
    content.innerHTML = `
    <h1>${model.theme[0]}</h1>
    <h3>${model.question[0].question1}</h3>
    `;
}
