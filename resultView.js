resultView();
function resultView() {
  console.log()
let html = '';
for (i = 0; i < model.user.answer.length; i++) {
  for (let o = 0; o < 6; o++) {
html += `
<div class="divContainer">
<text class="kategori">${model.theme[o]}</text> 
<div class="points">
  <div class="pointa">7</div>
  <div class="pointa">6</div>
  <div class="pointa">5</div>
  <div class="pointa">4</div>
  <div class="pointa">3</div>
  <div class="pointa">2</div>
  <div class="pointa">1</div>
</div>
<svg class="chart" viewBox="0 0 8 8" height="300" width="600">

  <g class="bar1">
      <rect class="hovercolor" x="-4" y="${(8-median())}" width="16" height="${median()}"></rect>
      <text x="-4" y="${(8-median())}">${median()}</text>
  </g> 

  <g class="bar">
    <rect class="hovercolor" x="-4" y="${(8-model.user.answer[i])}" width="4" height="${model.user.answer[i]}"></rect>
    <text x="-4" y="${(8-model.user.answer[i])}">${model.user.answer[i]}</text>
  </g>

  <g class="bar">
    <rect class="hovercolor" x="0" y="${(8-model.user.answer[i])}" width="4" height="${model.user.answer[i]}"></rect>
    <text x="0" y="${(8-model.user.answer[i])}">${model.user.answer[i]}</text>
  </g>

  <g class="bar">
    <rect class="hovercolor" x="4" y="${(8-model.user.answer[i])}" width="4" height="${model.user.answer[i]}"></rect>
    <text x="4" y="${(8-model.user.answer[i])}">${model.user.answer[i]}</text>
  </g>

  <g class="bar">
    <rect class="hovercolor" x="8" y="${(8-model.user.answer[i])}" width="4" height="${model.user.answer[i]}"></rect>
    <text x="8" y="${(8-model.user.answer[i])}">${model.user.answer[i]}</text>
  </g>
  
  </svg>
  <div class="explain">questionheader</div>
  </div>
    `;
  }
}
document.getElementById('content').innerHTML = html;
}



