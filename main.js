// main.js

const ctx = document.getElementById('graficoApostas').getContext('2d');

const grafico = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [
      'Segunda 23/06',
      'Terça 24/06',
      'Quarta 25/06',
      'Quinta 26/06',
      'Sexta 27/06',
      'Sábado 28/06',
      'Domingo 29/06'
    ],
    datasets: [{
      label: 'Apostas últimas 24h',
      data: [1407, 1403, 1314, 1511, 1637, 2029, 2202],
      backgroundColor: '#0074D9',
      borderRadius: 8,
      borderSkipped: false
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 500,
          color: '#001f3f'
        }
      },
      x: {
        ticks: {
          color: '#001f3f'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: '#001f3f',
        titleColor: '#ffffff',
        bodyColor: '#ffffff'
      }
    }
  }
});
