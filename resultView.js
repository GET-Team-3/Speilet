function resultView() {
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
        ${theMid(i)}
        
        ${tempo(i)}
    </svg>
    <div class="explain">questionheader</div>
    </div>
    `;

  }
  document.getElementById('content').innerHTML = html;
}

function tempo(index) {
  let html = '';
  for (y = 0; y < 4; y++) {
      html += `
          <g class="bar">
              <rect class="hovercolor" x="${-4 + (4 * y)}" y="${(8-model.user.answer[y + (index * 4)])}" width="4" height="${model.user.answer[y + (index * 4)]}"></rect>
              <text x="${-4 + (4 * y)}" y="${(8-model.user.answer[y + (index * 4)])}">${model.user.answer[y + (index * 4)]}</text>
          </g>
      `;
  }
  return html;
}

function theMid(indexo) {
  let html = '';
  for (y = 0; y < 1; y++) {
    var verdi = (model.user.answer[4 + (indexo * 4)]);
    var lengde = ((verdi + verdi + verdi + verdi) / 4);
      html += `
        <g class="bar1">
          <rect class="hovercolor" x="-4" y="${8-lengde}" width="16" height="${lengde}"></rect>
          <text x="-4" y="${(8-lengde)}">${lengde}</text>
        </g>
      `;
  }
  console.log(model.user.answer[y + (indexo * 4)]);
  return html;
}


  
