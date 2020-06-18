
resultView();
function resultView() {
console.log(model.user.data);
        document.getElementById('content').innerHTML = `
            <canvas id="myChart"></canvas>
        `;}