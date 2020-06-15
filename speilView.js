function speilView() {
    document.getElementById('content').innerHTML = `
    <canvas id="myChart"></canvas>
    `;

    let myChart = document.getElementById('myChart').getContext('2d');

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';

    let massPopChart = new Chart(myChart, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['Læringsmiljø', 'Felles mål', 'standard', 'rift','forbedring','kunnskap'],
        datasets:[{
        label: 'Nummer1',
          data:[
            2,
            2,
            5,
            6,
            3,
            1,
          ],
        //   backgroundColor:'green',
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
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
        {
          label:'Nummer2',
          data:[
            4,
            4,
            4,
            2,
            2,
            1,
          ],
          //backgroundColor:'green',
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
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
        {
        label: 'Nummer3',
          data:[
            2,
            2,
            5,
            6,
            3,
            1,
          ],
        //   backgroundColor:'green',
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
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
        {
        label: 'Nummer4',
          data:[
            2,
            2,
            5,
            6,
            3,
            1,
          ],
        //   backgroundColor:'green',
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
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
    ]
      },
      options:{
        title:{
          display:true,
          text:'Resultat speilet',
          fontSize:25
        },
        legend:{
          display:true,
          position:'right',
          labels:{
            fontColor:'#000'
          },
        },
        scales: {
            yAxes : [{
                    ticks : {
                        max : 7,    
                        min : 0,
                    }
                }]
        },  
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true,
          fontColor:'#000',
          fontColor:'#000',
        }
      }
    });
}