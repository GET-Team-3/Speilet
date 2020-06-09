function tempButton() {
    if (model.counter == 20) return console.log('resultView')
    model.counter += 4;
    updateView();
}