import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = ({ data }) => {
    const chartData = {
        labels: ['Total Kamar Kost', 'Penyewa Aktif', 'Transaksi Terbaru'],
        datasets: [
            {
                label: 'Statistik Kost',
                data: data, // Menggunakan data dari props
                backgroundColor: [
                    '#3B82F6', // Warna biru untuk Total Kamar Kost
                    '#10B981', // Warna hijau untuk Penyewa Aktif
                    '#F59E0B', // Warna kuning untuk Transaksi Terbaru
                ],
                borderColor: [
                    '#2563EB', // Border biru
                    '#059669', // Border hijau
                    '#D97706', // Border kuning
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true, // Membuat chart responsif
        maintainAspectRatio: false, // Supaya chart tidak terkunci rasio
        plugins: {
            legend: {
                display: true,
            },
            title: {
                display: true,
                text: 'Dashboard Kost Statistics',
            },
        },
        scales: {
            y: {
                beginAtZero: true, // Pastikan skala y dimulai dari nol
            },
        },
    };

    return (
        <div className="w-full h-64 md:h-96">
            {/* Adjust height based on screen size */}
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default BarChart;
