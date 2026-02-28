import React from "react";
import { Bar } from "react-chartjs-2"
import 'chart.js/auto'

export default function Act3Chart({ stats }) {
    const chartData = {
        labels: [">60% pursue Higher Education", "Dropout: Economic Hardship", "Dropout: Lack of Interest"],
        datasets: [
            {
                label: "Urban Schools (%)",
                data: [stats.urban.higherEd, stats.urban.dropoutEconomic, stats.urban.dropoutApathy],
                backgroundColor: "rgba(148, 163, 184, 0.9)", 
                borderRadius: 4
            },
            {
                label: "Rural Schools (%)",
                data: [stats.rural.higherEd, stats.rural.dropoutEconomic, stats.rural.dropoutApathy],
                backgroundColor: "rgba(16, 185, 129, 0.9)", 
                borderRadius: 4
            }
        ]
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: "top", labels: { font: { family: "Inter", size: 13 } } },
            tooltip: { backgroundColor: "rgba(15, 23, 42, 0.9)", padding: 12 }
        },
        scales: {
            x: { grid: { display: false } },
            y: {
                beginAtZero: true,
                max: 80,
                title: {
                    display: true,
                    text: "Percentage (%)",
                    font: { weight: "600" }
                }
            }
        }
    };

    return (
        <div className="chart-container">
            <Bar data={chartData} options={options} />
        </div>
    );
}