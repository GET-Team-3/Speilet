
resultView();
function resultView() {
console.log(model.user.data);
        document.getElementById('content').innerHTML = `
        <text class="kategori">Kategori</text>   
        <svg class="chart" viewBox="0 0 100 100" height="300" width="300">
            <g class="bar1">
                <text x="0" y="7">Alle</text>
                <rect x="0" y="10" width="80" height="90"></rect>
              </g> 
        
          <g class="bar">
            <text x="0" y="7">Samhold</text>
            <rect x="0" y="50" width="20" height="50"></rect>
          </g>
        
          <g class="bar">
            <text x="0" y="7">Produksjon</text>
            <rect x="20" y="80" width="20" height="20"></rect>
          </g>
        
          <g class="bar">
            <text x="0" y="7">Drift</text>
            <rect x="40" y="20" width="20" height="80"></rect>
          </g>
        
          <g class="bar">
            <text x="0" y="7">Lederskap</text>  
            <rect x="60" y="40" width="20" height="60"></rect>
        </g>
        </svg>
        `;}