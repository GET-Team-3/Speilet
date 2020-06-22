function plotQuestion() {
    let array = [];
    for (let index = 0; index < 4; index++) {
        let childArray = [];
        for (let i = 0; i < model.theme.length; i++) {
            childArray.push(model.survey[i + (model.theme.length * index)].question);
        }
        array.push(childArray);
    }
    return array;
}

function plotData(index) {
    let array = [];
    for (let i = 0; i < model.theme.length; i++) {
        array.push(model.user.answer[i + (model.theme.length * index)]);
    }
    return array;
}
