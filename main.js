const ctx = document.getElementById('graficoApostas').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    datasets: [{
      label: 'Últimas 24h',
      data: [1313, 1368, 1752, 1856, 1534, 1716, 1752],
      backgroundColor: [
        '#001f3f', '#0074D9', '#0074D9', '#e50914', '#001f3f', '#0074D9', '#e50914'
      ],
      borderRadius: 10,
      borderSkipped: false
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { backgroundColor: '#001f3f', titleColor: '#fff', bodyColor: '#fff' }
    },
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
    }
  }
});
