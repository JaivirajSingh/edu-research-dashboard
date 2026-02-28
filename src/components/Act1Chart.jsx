import React from "react"
import { Bar } from "react-chartjs-2"
import 'chart.js/auto'
import { Tooltip } from "chart.js/auto"

export default function Act1Chart({ stats }) {
    const [showReality, setShowReality] = React.useState(false)

    const datasets = [
        {
            label: "Official Separate Toilets",
            data: [stats.urban.separateToilets, stats.rural.separateToilets],
            backgroundColor: "rgba(156, 163, 175, 0.8)"
        }
    ]

    if (showReality) {
        datasets.push(
            {
                label: "Always Clean Toilets",
                data: [stats.urban.cleanToilets, stats.rural.cleanToilets],
                backgroundColor: "rgba(239, 68, 68, 0.8)"
            },
            {
                label: "Running Water",
                data: [stats.urban.runningWater, stats.rural.runningWater],
                backgroundColor: "rgba(245, 158, 11, 0.8)"
            }
        )
    }
    const chartData = {
        labels: ["Urban Schools", "Rural Schools"],
        datasets: datasets
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 800
        },
        plugins: {
            legend: {
                position: "top",
                labels: { font: { family: "system-ui", size: 14 } }
            },
            tooltip: {
                backgroundColor: "rgba(17, 24, 39, 0.9)",
                padding: 12,
                titleFont: { size: 14 },
                bodyFont: { size: 13 }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                title: {
                    display: true,
                    text: "Percentage of Schools (%)",
                    font: { weight: "bold" }
                }
            },
            x: {
                grid: { display: false }
            }
        }
    }

    return (
        <div style={{width: "90%", height: "450px", padding: "20px"}}>
            <Bar data={chartData} options={options}/>
            <button onClick={() => setShowReality(!showReality)}>
                {showReality ? "Hide Reality" : "Reveal Reality"}
            </button>
        </div>
    )
}