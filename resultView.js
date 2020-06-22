
theTheme();
function resultView() {
document.getElementById('content').innerHTML = `
<div class="divContainer">
<text class="kategori">${theTheme()}</text> 
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
    <rect class="hovercolor" x="-4" y="${8-theScore()}" width="4" height="${theScore()}"></rect>
    <text x="-4" y="${8-theScore()}">Drift</text>
  </g>

  <g class="bar">
    <rect class="hovercolor" x="0" y="${8-theScore()}" width="4" height="${theScore()}"></rect>
    <text x="0" y="${8-theScore()}">Ledelse</text>
  </g>

  <g class="bar">
    <rect class="hovercolor" x="4" y="${8-theScore()}" width="4" height="${theScore()}"></rect>
    <text x="4" y="${8-theScore()}">Samhold</text>
  </g>

  <g class="bar">
    <rect class="hovercolor" x="8" y="${8-theScore()}" width="4" height="${theScore()}"></rect>
    <text x="8" y="${8-theScore()}">Puls</text>
</g>
</svg>
<div class="explain"></div>
</div>
<text class="kategori">${theTheme()}</text> 
        `;}