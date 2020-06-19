function resultView() {
    document.getElementById('content').innerHTML = `
    <h2 class='resultStyle'>Resultat</h2>
    <p class='resultStyle'>Hold musepekeren over en graf for å se tilhørende spørsmål</p>
    <div class="chart-container" style="position: relative; height:40vh; width:80vw">
    <canvas id="myChart"></canvas>
    </div>
    `;
    // height: max-content;

    var ctx = document.getElementById('myChart').getContext('2d');
    var labels = plotQuestion();

    // Global Options:
    Chart.defaults.global.defaultFontColor = 'dodgerblue';
    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontFamily = 'Arial'

    // Data with datasets options
    var data = {
      labels: model.theme,
      datasets: [
        {
          fill: true,
          backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(63, 191, 127, 0.6)',
            'rgba(191, 63, 127, 0.6)',
          ],
          borderWidth:1,
          borderColor:'#777',
          data: plotData(0)
        },
        {
          fill: true,
         backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(63, 191, 127, 0.6)',
            'rgba(191, 63, 127, 0.6)',
          ],
          borderWidth:1,
          borderColor:'#777',
          data: plotData(1)
        },
        {
          fill: true,
         backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(63, 191, 127, 0.6)',
            'rgba(191, 63, 127, 0.6)',
          ],
          borderWidth:1,
          borderColor:'#777',
          data: plotData(2)
        },
        {
          
          fill: true,
         backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(63, 191, 127, 0.6)',
            'rgba(191, 63, 127, 0.6)',
          ],
          borderWidth:1,
          borderColor:'#777',
          data: plotData(3)
        },
      ]
    };

    var options = {
      responsive: true,
      legend: {
        display: false,
    },
      
  
      tooltips: {
        callbacks: {
          label: function (item) {
            return labels[item.datasetIndex][item.index];
          }
        }
      },
      scales: {
        xAxes: [{
          ticks: {
               fontSize: 14
          }
      }],
        yAxes: [{
            ticks: {
                suggestedMin: 0,
                suggestedMax: 7
            }
        }]
    },
      title: {
        // display: true,
        // text: 'Ice Cream Truck',
        // position: 'bottom'
      },
    };

    // Chart declaration:
    var myBarChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });
  }