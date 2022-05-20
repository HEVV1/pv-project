// Any of the following formats may be used
const ctx = document.getElementById('myChart').getContext("2d");
const colorHex = ['#2E3438', '#00ACC1', '#F7B500']
const data = {
  labels: ['Black', 'Blue', 'Orange'],
  datasets: [
    {            
      data: [33, 17, 50],
      backgroundColor: colorHex,
      borderColor: colorHex,
      borderWidth: 1
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  tooltips: {
    enabled: false
  },
  legend: {
    display: false,
    position: 'top',
  },
  title: {
    display: false,
    text: 'Chart'
  },
  plugins: {
    datalabels: {
      formatter: (value, ctx) => {
        let sum = ctx.dataset._meta[0].total;
        let percentage = (value * 100 / sum).toFixed(0) + "%";
        return percentage;
      },
      color: '#fff',
      font: {
        size: 22,
        family: 'Roboto',
        weight: 600
      }
    }
  },
  events: []
}
const myChart = new Chart(ctx, {
  type: 'doughnut',
  data: data,
  options: options
});
