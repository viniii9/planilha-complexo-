const ctx = document.getElementById('graficoApostas').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    datasets: [{
      label: 'Apostas',
      data: [1407, 1403, 1314, 1511, 1637, 2029, 2202],
      backgroundColor: '#0074D9'
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
