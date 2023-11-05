import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ArcElement, ChartDataLabels);

export function PieChart({ mealCalories }) {
  console.log(mealCalories);

  const totalCalories = Object.values(mealCalories).reduce((a, b) => a + b, 0);
  const mealPercentages = Object.values(mealCalories).map((calories) => (calories / totalCalories) * 100);

  const data = {
    datasets: [
      {
        // data: [15, 35, 40, 10],
        data: mealPercentages,
        backgroundColor: ['red', 'lightblue', 'green', 'yellow'],
      },
    ],
    labels: ['Breakfast', 'Lunch', 'Dinner', 'Snacks'],
  };

  const options = {
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          let percentage = ((value * 100) / sum).toFixed(2) + '%';
          return ctx.chart.data.labels[ctx.dataIndex] + ': ' + percentage;
        },
        color: '#000000',
        font: {
          weight: 'bold',
          size: 14,
        },
        anchor: 'end',
        align: 'start',
        offset: 25,
      },
    },
  };

  return <Pie data={data} options={options} />;
}
