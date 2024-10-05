import { useState } from 'react';

const Transactions = () => {
    // Data Transaksi
    const [transactionsList, setTransactionsList] = useState([
        { id: 1, tenantName: "John Doe", kostName: "Kost Mawar", transactionDate: "01/01/2024", amount: 1500000, paymentMethod: "Transfer Bank", paymentStatus: "Lunas" },
        { id: 2, tenantName: "Jane Smith", kostName: "Kost Melati", transactionDate: "15/01/2024", amount: 1200000, paymentMethod: "Tunai", paymentStatus: "Belum Bayar" },
        { id: 3, tenantName: "Alex Johnson", kostName: "Kost Sakura", transactionDate: "25/01/2024", amount: 1000000, paymentMethod: "E-Wallet", paymentStatus: "Lunas" },
    ]);

    // State untuk modal dan data yang akan diedit
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editData, setEditData] = useState({
        id: '',
        tenantName: '',
        kostName: '',
        transactionDate: '',
        amount: '',
        paymentMethod: '',
        paymentStatus: '',
    });

    // Fungsi untuk membuka modal edit dan mengisi data
    const handleEdit = (transaction) => {
        setEditData(transaction);
        setIsModalOpen(true);
    };

    // Fungsi untuk menutup modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // Fungsi untuk menangani perubahan input di form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditData({ ...editData, [name]: value });
    };

    // Fungsi untuk menyimpan perubahan
    const handleSave = () => {
        setTransactionsList(transactionsList.map((transaction) =>
            transaction.id === editData.id ? editData : transaction
        ));
        handleCloseModal(); // Tutup modal setelah menyimpan
    };

    // Fungsi untuk menghapus transaksi
    const handleDelete = (id) => {
        const newTransactionsList = transactionsList.filter((transaction) => transaction.id !== id);
        setTransactionsList(newTransactionsList);
    };

    return (
        <div className="p-6 bg-background min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Manajemen Transaksi</h2>
            <div className="bg-white p-6 rounded shadow-lg overflow-x-auto">
                <table className="min-w-full table-auto">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th className="p-2 sm:p-4">No</th>
                            <th className="p-2 sm:p-4">ID Pembayaran</th>
                            <th className="p-2 sm:p-4">Nama Penyewa</th>
                            <th className="p-2 sm:p-4">Nama Kost</th>
                            <th className="p-2 sm:p-4">Tanggal Transaksi</th>
                            <th className="p-2 sm:p-4">Jumlah Pembayaran</th>
                            <th className="p-2 sm:p-4">Metode Pembayaran</th>
                            <th className="p-2 sm:p-4">Status Pembayaran</th>
                            <th className="p-2 sm:p-4">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactionsList.map((transaction, index) => (
                            <tr key={transaction.id} className="border-b">
                                <td className="p-2 sm:p-4">{index + 1}</td>
                                <td className="p-2 sm:p-4">{transaction.id}</td>
                                <td className="p-2 sm:p-4">{transaction.tenantName}</td>
                                <td className="p-2 sm:p-4">{transaction.kostName}</td>
                                <td className="p-2 sm:p-4">{transaction.transactionDate}</td>
                                <td className="p-2 sm:p-4">Rp {transaction.amount.toLocaleString('id-ID')}</td>
                                <td className="p-2 sm:p-4">{transaction.paymentMethod}</td>
                                <td className={`p-2 sm:p-4 ${transaction.paymentStatus === "Lunas" ? "text-green-500" : "text-red-500"}`}>
                                    {transaction.paymentStatus}
                                </td>
                                <td className="p-2 sm:p-4 flex space-x-2">
                                    {/* Tombol Edit */}
                                    <button
                                        onClick={() => handleEdit(transaction)}
                                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                                    >
                                        Edit
                                    </button>
                                    {/* Tombol Hapus */}
                                    <button
                                        onClick={() => handleDelete(transaction.id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                                    >
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal untuk Edit Transaksi */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg w-full max-w-md">
                        <h3 className="text-xl font-bold mb-4">Edit Transaksi</h3>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">ID Pembayaran</label>
                                <input
                                    type="text"
                                    name="id"
                                    value={editData.id}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    disabled
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Nama Penyewa</label>
                                <input
                                    type="text"
                                    name="tenantName"
                                    value={editData.tenantName}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Nama Kost</label>
                                <input
                                    type="text"
                                    name="kostName"
                                    value={editData.kostName}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Tanggal Transaksi</label>
                                <input
                                    type="date"
                                    name="transactionDate"
                                    value={editData.transactionDate}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Jumlah Pembayaran</label>
                                <input
                                    type="number"
                                    name="amount"
                                    value={editData.amount}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Metode Pembayaran</label>
                                <select
                                    name="paymentMethod"
                                    value={editData.paymentMethod}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    <option value="Transfer Bank">Transfer Bank</option>
                                    <option value="Tunai">Tunai</option>
                                    <option value="E-Wallet">E-Wallet</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Status Pembayaran</label>
                                <select
                                    name="paymentStatus"
                                    value={editData.paymentStatus}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    <option value="Lunas">Lunas</option>
                                    <option value="Belum Bayar">Belum Bayar</option>
                                </select>
                            </div>

                            {/* Tombol Simpan dan Batal */}
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={handleSave}
                                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                                >
                                    Simpan
                                </button>
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="ml-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                >
                                    Batal
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Transactions;
