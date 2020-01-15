<script>

	


	/*export default {
		extends: Line,
		props: {
			title: { required: false, type: String, }
		},
		data: () => ({
			chartdata: {
				labels: ["12:00 AM", "01:00 AM", "02:00 AM", "03:00 AM", "04:00 AM", "05:00 AM", "06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM"],
				datasets: [
					{
						label: "Temp. Zona 1",
						data: [40, 20, 10, 60, 80, 55, 45, 67, 32, 24, 34, 56],
						borderColor: "#235789",
						backgroundColor: "#235789",
						lineTension: 0.1,
						fill: false,
					},
					{
						label: "Temp. Zona 2",
						data: [3, 78, 45, 43, 14, 97, 45, 36, 24, 23, 24, 13],
						borderColor: "#17BEBB",
						backgroundColor: "#17BEBB",
						lineTension: 0.1,
						fill: false,
					},
					{
						label: "SP Temp",
						data: [33, 34, 35, 33, 32, 35, 33, 33, 35, 36, 33, 35],
						borderColor: "#FFC914",
						backgroundColor: "#FFC914",
						lineTension: 0.1,
						fill: false,
					},
					{
						label: "ST Comp",
						data: [36, 35, 36, 34, 33, 36, 34, 34, 36, 37, 34, 36],
						borderColor: "#76B041",
						backgroundColor: "#76B041",
						lineTension: 0.1,
						fill: false,
					}
				]
			}
		}),
		mounted() {
			this.renderChart(this.chartdata, {
				title: {
					display: true,
					text: this.title,
				},
				legend: {
                    position: "bottom",
                    labels: {
                        boxWidth: 30,
                        padding: 15,
                    }
                },
				responsive: true,
				maintainAspectRatio: false,
				scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
			});
		}
	};*/
</script>