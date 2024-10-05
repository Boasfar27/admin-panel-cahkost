import React from 'react';
import Card from '../components/Card';
import BarChart from '../components/BarChart';

const Dashboard = () => {
    // Data untuk chart (diambil dari data statistik)
    const data = [120, 80, 15]; // Total Kamar Kost, Penyewa Aktif, Transaksi Terbaru

    return (
        <div className="p-6 bg-background min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

            {/* Grid untuk card */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card title="Total Kamar Kost" value="120" />
                <Card title="Penyewa Aktif" value="80" />
                <Card title="Transaksi Terbaru" value="15" />
            </div>

            {/* Chart Batang */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <BarChart data={data} />
            </div>
        </div>
    );
};

export default Dashboard;
