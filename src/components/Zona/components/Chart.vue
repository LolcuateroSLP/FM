<script>
import { Line } from "vue-chartjs";

	export default {
		extends: Line,
		data: () => ({
			chartdata: {
				labels: ["12:00 AM", "01:00 AM", "02:00 AM", "03:00 AM", "04:00 AM", "05:00 AM", "06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM"],
				datasets: [
					{
						label: "Temperatura",
						data: [40, 20, 10, 60, 80, 55, 45, 67, 32, 24, 34, 56],
						borderColor: "#235789",
						backgroundColor: "#235789",
						lineTension: 0.1,
						fill: false,
					},
					{
						label: "SETPOINT",
						data: [33, 34, 35, 33, 32, 35, 33, 33, 35, 36, 33, 35],
						borderColor: "#FFC914",
						backgroundColor: "#FFC914",
						lineTension: 0.1,
						fill: false,
					},
					{
						label: "Exterior",
						data: [36, 35, 36, 34, 33, 36, 34, 34, 36, 37, 34, 36],
						borderColor: "#76B041",
						backgroundColor: "#76B041",
						lineTension: 0.1,
						fill: false,
					}
				]
			},
			options: {
				responsive: true,
                maintainAspectRatio: false,
                legend: {
                    position: "bottom",
                    // fullWidth: false,
                    labels: {
                        boxWidth: 30,
                        padding: 15,
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
			}
		}),
		mounted() {
			this.renderChart(this.chartdata, this.options);
		}
	};
</script>