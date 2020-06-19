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
        array.push(model.user.answer[i + (model.theme.length * index)])
    }
    return array;
}

// function plotQuestion() {
//     let array = [];
//     for (let i = 0; i < 4; i++) {
//         array[i] = plotRow(i);
//     }
//     return array;
// }

// function plotRow(index) {
//     let array = [];
//     for (let i = 0; i < 6; i++) {
//         array.push(model.survey[i + (6 * index)].question)
//     }
//     return array;
// }