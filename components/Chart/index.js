import styles from './Chart.module.css'
import { Bar } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useState, useEffect } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
)

export default function Chart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });
    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["2018", "2019", "2020", "2021", "2022"],
            datasets: [
                {
                    label: 'Number of persons',
                    data: [2802000, 2863500, 2909600, 3132400, 3749600],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: '#627952',
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Number of persons with mood disorder in Canada'
                },
                maintainAspectRatio: false,
                responsive: true,
            },
        })
    })

    return(
        <>
            <div style={{position: 'relative', width: '290px', height: '150px'}}>
                <Bar data={chartData} options={chartOptions} style={{width: "500px", height: "300px"}} />
            </div>
        </>
    )
}