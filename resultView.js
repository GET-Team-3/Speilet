// let kake = '';
// let ex = document.getElementById('exp');
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
    <div id="exp${i}" class="explain"></div>
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
      function smegma(elem) {
      let div1 = document.getElementById('exp0');
      let div2 = document.getElementById('exp1');
      let div3 = document.getElementById('exp2');
      let div4 = document.getElementById('exp3');
      let div5 = document.getElementById('exp4');
      let div6 = document.getElementById('exp5');
      if (elem < 4) div1.innerHTML = model.survey[elem].question;
      else if (elem < 8) div2.innerHTML = model.survey[elem].question;
      else if (elem < 12) div3.innerHTML = model.survey[elem].question;
      else if (elem < 16) div4.innerHTML = model.survey[elem].question;
      else if (elem < 20) div5.innerHTML = model.survey[elem].question;
      else if (elem < 25) div6.innerHTML = model.survey[elem].question;
    }

function tempo(index) {
  let color = 'fill:rgb(168, 228, 163)';
  let html = '';
  for (y = 0; y < 4; y++) {
    let answer = model.user.answer[y + (index * 4)];
    if (answer < 5) {color = 'fill:rgb(253, 249, 160)'}
    if (answer < 2) {color = 'fill:rgb(255, 111, 108)'}
      html += `
          <g class="bar" id="${y + (index * 4)}" style="${color}" onmouseover="smegma(this.id)">
              <rect class="hovercolor" x="${-0.4 + (2 * y)}" y="${(7-answer)}" width="2" height="${answer}" ></rect>
              <text x="${0.3 + (2 * y)}" y="${(8-answer)}">${answer}</text>
          </g>
      `;
  }
  return html;

  
}





