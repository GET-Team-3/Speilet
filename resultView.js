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
    <svg class="chart" viewBox="0 0 7 7" height="300" width="350">
    
    <rect class="scale1" x="-0.6" y="5" width="0.1" height="2"></rect>
    <rect class="scale2" x="-0.6" y="2" width="0.1" height="3"></rect>
    <rect class="scale3" x="-0.6" y="0" width="0.1" height="2"></rect>

        ${theMid(i)}
        
        ${tempo(i)}
    </svg>
    <div id="explain" class="explain">Text</div>
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

function tempo(index) {
  let color = 'fill:rgb(168, 228, 163)';
  let stroke = 'stroke:rgb(168, 228, 163)'
  let html = '';
  for (y = 0; y < 4; y++) {
    let answer = model.user.answer[y + (index * 4)];
    if (answer < 5) {color = 'fill:rgb(253, 249, 160)'}
    if (answer < 2) {color = 'fill:rgb(255, 111, 108)'}
      html += `
          <g class="bar" style="${color}" onmouseover="${mouseOver()}">
              <rect class="hovercolor" x="${-0.4 + (2 * y)}" y="${(7-answer)}" width="2" height="${answer}" ></rect>
              <text x="${0.3 + (2 * y)}" y="${(8-answer)}">${answer}</text>
          </g>
      `;
  }
  return html;
}

function mouseOver() {
var d = document.getElementById('explain');
var v = model.survey[0].question;
console.log(d,v);
}




  
