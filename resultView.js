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
    <svg class="chart" viewBox="0 0 7 7" height="300" width="300">
    
    <rect class="scale1" x="0" y="5" width="0.2" height="2"></rect>
    <rect class="scale2" x="0" y="2" width="0.2" height="3"></rect>
    <rect class="scale3" x="0" y="0" width="0.2" height="2"></rect>

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
              <rect class="hovercolor" x="${1 + (1 * y)}" y="${(7-model.user.answer[y + (index * 4)])}" width="1" height="${model.user.answer[y + (index * 4)]}"></rect>
              <text x="${1 + (1 * y)}" y="${(7-model.user.answer[y + (index * 4)])}">${model.user.answer[y + (index * 4)]}</text>
          </g>
      `;
  }
  return html;
}

function theMid(indexo) {
  let html = '';
  for (y = 0; y < 1; y++) {
    var verdi = (model.user.answer[0 + (1 * 4)]);
    var lengde = ((verdi + verdi + verdi + verdi) / 4);
      html += `
        <g class="bar1">
          <rect class="hovercolor" x="1" y="${7-lengde}" width="4" height="${lengde}"></rect>
          <text x="-4" y="${(7-lengde)}">${lengde}</text>
        </g>
      `;
  }
  console.log(model.user.answer[y + (indexo * 4)]);
  return html;
}


  
