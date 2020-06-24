resultView();
function resultView() {
  console.log()
let html = '';
for (i = 0; i < 6; i++) {
html += `
<div class="divContainer">
<text class="kategori">${model.theme[i]}</text> 
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
`;
}
for (oi = 0; oi < model.user.answer.length; oi++) {
  html += `
  <g class="bar1">
      <rect class="hovercolor" x="-4" y="${(8-median())}" width="16" height="${median()}"></rect>
      <text x="-4" y="${(8-median())}">${median()}</text>
  </g> 

  <g class="bar">
    <rect class="hovercolor" x="-4" y="${(8-model.user.answer[oi])}" width="4" height="${model.user.answer[oi]}"></rect>
    <text x="-4" y="${(8-model.user.answer[oi])}">${model.user.answer[oi]}</text>
  </g>
  `;
}
  for (i = 0; i < 6; i++) {
    html += `
  </svg>
  <div class="explain">questionheader</div>
  </div>
    `;
}
document.getElementById('content').innerHTML = html;
}



