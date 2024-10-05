import { useState } from 'react';

const Tenants = () => {
    // Data Penyewa
    const [tenantsList, setTenantsList] = useState([
        { id: 1, name: "John Doe", kostName: "Kost Mawar", kostAddress: "Jl. Sudirman No.10", phone: "08123456789", startDate: "01/01/2023", endDate: "31/12/2023", paymentStatus: "Lunas" },
        { id: 2, name: "Jane Smith", kostName: "Kost Melati", kostAddress: "Jl. Diponegoro No.22", phone: "08129876543", startDate: "15/02/2023", endDate: "15/08/2023", paymentStatus: "Belum Bayar" },
    ]);

    // State untuk mengelola modal dan data yang akan diedit
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editData, setEditData] = useState({
        id: '',
        name: '',
        kostName: '',
        kostAddress: '',
        phone: '',
        startDate: '',
        endDate: '',
        paymentStatus: '',
    });

    // Fungsi untuk membuka modal edit dan mengisi data
    const handleEdit = (tenant) => {
        setEditData(tenant);
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
        setTenantsList(tenantsList.map((tenant) => (tenant.id === editData.id ? editData : tenant)));
        handleCloseModal(); // Tutup modal setelah menyimpan
    };

    // Fungsi untuk menghapus penyewa
    const handleDelete = (id) => {
        const newTenantsList = tenantsList.filter((tenant) => tenant.id !== id);
        setTenantsList(newTenantsList);
    };

    return (
        <div className="p-6 bg-background min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Manajemen Penyewa</h2>
            <div className="bg-white p-6 rounded shadow-lg overflow-x-auto">
                <table className="min-w-full table-auto">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th className="p-2 sm:p-4">No</th>
                            <th className="p-2 sm:p-4">Nama Penyewa</th>
                            <th className="p-2 sm:p-4">Nama Kost</th>
                            <th className="p-2 sm:p-4">Alamat Kost</th>
                            <th className="p-2 sm:p-4">Nomor Telepon</th>
                            <th className="p-2 sm:p-4">Tanggal Mulai Sewa</th>
                            <th className="p-2 sm:p-4">Tanggal Akhir Sewa</th>
                            <th className="p-2 sm:p-4">Status Pembayaran</th>
                            <th className="p-2 sm:p-4">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tenantsList.map((tenant, index) => (
                            <tr key={tenant.id} className="border-b">
                                <td className="p-2 sm:p-4">{index + 1}</td>
                                <td className="p-2 sm:p-4">{tenant.name}</td>
                                <td className="p-2 sm:p-4">{tenant.kostName}</td>
                                <td className="p-2 sm:p-4">{tenant.kostAddress}</td>
                                <td className="p-2 sm:p-4">{tenant.phone}</td>
                                <td className="p-2 sm:p-4">{tenant.startDate}</td>
                                <td className="p-2 sm:p-4">{tenant.endDate}</td>
                                <td className={`p-2 sm:p-4 ${tenant.paymentStatus === "Lunas" ? "text-green-500" : "text-red-500"}`}>
                                    {tenant.paymentStatus}
                                </td>
                                <td className="p-2 sm:p-4 flex space-x-2">
                                    {/* Tombol Edit */}
                                    <button
                                        onClick={() => handleEdit(tenant)}
                                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                                    >
                                        Edit
                                    </button>
                                    {/* Tombol Hapus */}
                                    <button
                                        onClick={() => handleDelete(tenant.id)}
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

            {/* Modal untuk Edit Penyewa */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg w-full max-w-md">
                        <h3 className="text-xl font-bold mb-4">Edit Penyewa</h3>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Nama Penyewa</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={editData.name}
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
                                <label className="block text-sm font-medium text-gray-700">Alamat Kost</label>
                                <input
                                    type="text"
                                    name="kostAddress"
                                    value={editData.kostAddress}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Nomor Telepon</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={editData.phone}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Tanggal Mulai Sewa</label>
                                <input
                                    type="date"
                                    name="startDate"
                                    value={editData.startDate}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Tanggal Akhir Sewa</label>
                                <input
                                    type="date"
                                    name="endDate"
                                    value={editData.endDate}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
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

export default Tenants;
