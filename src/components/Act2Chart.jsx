import { Bar } from "react-chartjs-2"
import 'chart.js/auto'
import { plugins } from "chart.js/auto"

export default function Act2Chart({ stats }) {
    const chartData = {
        labels: ["Urban Teachers", "Rural Teachers"],
        datasets: [
            {
                label: "Average Experience (Years)",
                data: [stats.urban.experience, stats.rural.experience],
                backgroundColor: "rgba(79, 70, 229, 0.9)",
                yAxisID: "y"
            },
            {
                label: "% of Teachers Who NEVER Use Digital Tools",
                data: [stats.urban.techNeverUsed, stats.rural.techNeverUsed],
                backgroundColor: "rgba(225, 29, 72, 0.9)",
                yAxisID: "y1"
            }
        ]
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 800
        },
        plugins: {
            legend: { position: "top" }
        },
        scales: {
            x: {
                grid: { display: false }
            },
            y: {
                type: "linear",
                display: true,
                position: "left",
                title: {
                    display: true,
                    text: "Years of Experience",
                    font: { weight: "bold", color: "rgba(37, 99, 235, 1)"}
                },
                beginAtZero: true
            },
            y1: {
                type: "linear",
                display: true,
                position: "right",
                title: {
                    display: true,
                    text: "Percentage (%)",
                    font: { weight: "bold", color: "rgba(225, 29, 72, 1)" }
                },
                beginAtZero: true,
                max: 100,
                grid: {
                    drawOnChartArea: false
                }
            }
        }
    }

    return (
        <div className="chart-container">
            <Bar data={chartData} options={options}/>
        </div>
    )
}