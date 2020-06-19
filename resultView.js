function resultView() {
    document.getElementById('content').innerHTML = `
    <h2>Chart</h2>
    <div style="height:600px;width:maxcontent;border-style:solid">
    <canvas id="myChart"></canvas>
    </div>
    `;
    // height: max-content;

    var ctx = document.getElementById('myChart').getContext('2d');
    var labels = plotQuestion();

    // Global Options:
    Chart.defaults.global.defaultFontColor = 'dodgerblue';
    Chart.defaults.global.defaultFontSize = 16;

    // Data with datasets options
    var data = {
      labels: model.theme,
      datasets: [
        {
          label: "Theme1",
          fill: true,
          backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(63, 191, 127, 0.6)',
            'rgba(191, 63, 127, 0.6)',
          ],
          data: plotData(0)
        },
        {
          label: "kakepris",
          fill: true,
         backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(63, 191, 127, 0.6)',
            'rgba(191, 63, 127, 0.6)',
          ],
          data: plotData(1)
        },
        {
          label: "Ice Cream Prices ",
          fill: true,
         backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(63, 191, 127, 0.6)',
            'rgba(191, 63, 127, 0.6)',
          ],
          data: plotData(2)
        },
        {
          label: "Ice Cream Prices ",
          fill: true,
         backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(63, 191, 127, 0.6)',
            'rgba(191, 63, 127, 0.6)',
          ],
          data: plotData(3)
        },
        
      ]
    };

    var options = {

      legend: {
        display: false
    },
      tooltips: {
        callbacks: {
          label: function (item) {
            return labels[item.datasetIndex][item.index];
          }
        }
      },
      scales: {
        yAxes : [{
                ticks : {
                    max : 7,    
                    min : 0,
                }
            }]
    },  
      title: {
        // display: true,
        // text: 'Ice Cream Truck',
        // position: 'bottom'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };

    // Chart declaration:
    var myBarChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });
  }