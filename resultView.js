let kake = '';
let ex = document.getElementById('exp');
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
    <svg class="chart" viewBox="0 0 7 7" height="405" width="440">
    
    <rect class="scale" x="-0.7" y="6" width="9" height="0.01"></rect>
    <rect class="scale" x="-0.7" y="5" width="9" height="0.01"></rect>
    <rect class="scale" x="-0.7" y="4" width="9" height="0.01"></rect>
    <rect class="scale" x="-0.7" y="3" width="9" height="0.01"></rect>
    <rect class="scale" x="-0.7" y="2" width="9" height="0.01"></rect>
    <rect class="scale" x="-0.7" y="1" width="9" height="0.01"></rect>
    <rect class="scale" x="-0.7" y="0.1" width="9" height="0.01"></rect>

        ${theMid(i)}
        
        ${tempo(i)}
    </svg>
    <div id="exp" class="explain">${smegma(i)}</div>
    </div>
    `;

  function theMid(indexo) {
    let html = '';
      var verdi = (model.user.answer[0+(i*4)]+model.user.answer[1+(i*4)]+model.user.answer[2+(i*4)]+model.user.answer[3+(i*4)]);
      var lengde = (verdi / 4);
        html += `
          <g class="bar1">
            <rect class="hovercolor" x="-0.4" y="${7-lengde}" width="8" height="${lengde}"></rect>
            <text x="-4" y="${(7-lengde)}">${lengde}</text>
          </g>
        `;
    return html;
  }
  }

  document.getElementById('content').innerHTML = html;
}
      function smegma() {
        k = document.getElementById('exp');
        kake = model.survey[0].question;
        k = kake;
      return k;

    }

function tempo(index) {
  let color = 'fill:rgb(168, 228, 163)';
  let html = '';
  for (y = 0; y < 4; y++) {
    let answer = model.user.answer[y + (index * 4)];
    if (answer < 5) {color = 'fill:rgb(253, 249, 160)'}
    if (answer < 2) {color = 'fill:rgb(255, 111, 108)'}
      html += `
          <g id="" class="bar" style="${color}" onmouseover="${smegma(this)}">
              <rect  class="hovercolor" x="${-0.4 + (2 * y)}" y="${(7-answer)}" width="2" height="${answer}" ></rect>
              <text x="${0.3 + (2 * y)}" y="${(8-answer)}">${answer}</text>
          </g>
      `;
  }
  return html;

  
}





