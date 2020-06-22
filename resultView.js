
resultView();
function resultView() {
console.log(model.user.data);
        document.getElementById('content').innerHTML = `
        <div class="divContainer">
<text class="kategori">${plotQuestion()}</text> 
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
      <rect class="hovercolor" x="-4" y="4" width="16" height="4"></rect>
      <text x="-4" y="4">Alle</text>
  </g> 

  <g class="bar">
    <rect class="hovercolor" x="-4" y="7" width="4" height="1"></rect>
    <text x="-4" y="7">Samhold</text>
  </g>

  <g class="bar">
    <rect class="hovercolor" x="0" y="5" width="4" height="3"></rect>
    <text x="0" y="5">Produksjon</text>
  </g>

  <g class="bar">
    <rect class="hovercolor" x="4" y="3" width="4" height="5"></rect>
    <text x="4" y="3">Drift</text>
  </g>

  <g class="bar">
    <rect class="hovercolor" x="8" y="1" width="4" height="7"></rect>
    <text x="8" y="1">Lederskap</text>
</g>
</svg>
<div class="explain"></div>
</div>
        `;}