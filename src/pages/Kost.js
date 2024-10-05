import { useState } from 'react';

const Kost = () => {
    // Fungsi untuk menghasilkan fasilitas secara acak
    const getRandomFacilities = () => {
        const allFacilities = [
            'AC',
            'Kamar Mandi Dalam',
            'Kamar Mandi Luar',
            'Kipas Angin',
            'Parkiran Mobil',
            'Parkiran Motor'
        ];
        const randomFacilities = allFacilities
            .sort(() => Math.random() - Math.random())
            .slice(0, Math.floor(Math.random() * allFacilities.length) + 1);
        return randomFacilities;
    };

    // Data Kost dengan deskripsi dan fasilitas acak
    const [kostList, setKostList] = useState([
        { id: 1, name: "Kost Mawar", address: "Jl. Sudirman", price: "500000", description: "Kost murah dan nyaman", facilities: getRandomFacilities() },
        { id: 2, name: "Kost Melati", address: "Jl. Diponegoro", price: "450000", description: "Dekat dengan pusat kota", facilities: getRandomFacilities() },
        { id: 3, name: "Kost Anggrek", address: "Jl. Ahmad Yani", price: "600000", description: "Lingkungan aman dan nyaman", facilities: getRandomFacilities() },
        { id: 4, name: "Kost Kamboja", address: "Jl. Gajah Mada", price: "650000", description: "Akses mudah ke transportasi", facilities: getRandomFacilities() },
        { id: 5, name: "Kost Dahlia", address: "Jl. HOS Cokroaminoto", price: "700000", description: "Fasilitas lengkap", facilities: getRandomFacilities() },
        { id: 6, name: "Kost Teratai", address: "Jl. Pahlawan", price: "750000", description: "Dekat dengan pusat perbelanjaan", facilities: getRandomFacilities() },
        { id: 7, name: "Kost Cempaka", address: "Jl. Pemuda", price: "800000", description: "Kost eksklusif dengan fasilitas terbaik", facilities: getRandomFacilities() },
        { id: 8, name: "Kost Kenanga", address: "Jl. Dipati Ukur", price: "850000", description: "Lokasi strategis", facilities: getRandomFacilities() },
        { id: 9, name: "Kost Sakura", address: "Jl. Ir. H. Juanda", price: "900000", description: "Kost nyaman dengan fasilitas premium", facilities: getRandomFacilities() },
        { id: 10, name: "Kost Bougenville", address: "Jl. Merdeka", price: "950000", description: "Cocok untuk mahasiswa dan pekerja", facilities: getRandomFacilities() },
    ]);

    // State untuk Modal dan Data Edit
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editData, setEditData] = useState({
        id: '',
        name: '',
        address: '',
        price: '',
        description: '',
        facilities: [],
    });

    const allFacilities = [
        'AC',
        'Kamar Mandi Dalam',
        'Kamar Mandi Luar',
        'Kipas Angin',
        'Parkiran Mobil',
        'Parkiran Motor'
    ];

    // Fungsi untuk membuka modal edit dan mengisi data
    const handleEdit = (kost) => {
        setEditData(kost);
        setIsModalOpen(true);
    };

    // Fungsi untuk menutup modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // Fungsi untuk menangani perubahan input
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditData({ ...editData, [name]: value });
    };

    // Fungsi untuk menangani perubahan checkbox fasilitas
    const handleFacilityChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            // Tambahkan fasilitas yang dipilih
            setEditData((prevData) => ({
                ...prevData,
                facilities: [...prevData.facilities, value],
            }));
        } else {
            // Hapus fasilitas yang tidak dipilih
            setEditData((prevData) => ({
                ...prevData,
                facilities: prevData.facilities.filter((facility) => facility !== value),
            }));
        }
    };

    // Fungsi untuk menyimpan perubahan
    const handleSave = () => {
        setKostList(
            kostList.map((kost) => (kost.id === editData.id ? editData : kost))
        );
        handleCloseModal(); // Tutup modal setelah menyimpan
    };

    // Fungsi untuk menghapus kost
    const handleDelete = (id) => {
        const newKostList = kostList.filter((kost) => kost.id !== id);
        setKostList(newKostList);
    };

    return (
        <div className="p-4 sm:p-6 md:p-8 bg-background min-h-screen">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Manajemen Kost</h2>

            {/* Tabel responsif di layar kecil */}
            <div className="bg-white shadow rounded-lg">
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th className="p-2 sm:p-4">Nama Kost</th>
                                <th className="p-2 sm:p-4">Alamat</th>
                                <th className="p-2 sm:p-4">Harga</th>
                                <th className="p-2 sm:p-4">Deskripsi</th>
                                <th className="p-2 sm:p-4">Fasilitas</th>
                                <th className="p-2 sm:p-4">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {kostList.map((kost) => (
                                <tr key={kost.id} className="border-b">
                                    <td className="p-2 sm:p-4 whitespace-nowrap">{kost.name}</td>
                                    <td className="p-2 sm:p-4 whitespace-nowrap">{kost.address}</td>
                                    <td className="p-2 sm:p-4 whitespace-nowrap">Rp {kost.price}</td>
                                    <td className="p-2 sm:p-4">{kost.description}</td>
                                    <td className="p-2 sm:p-4">
                                        <ul className="list-disc list-inside">
                                            {kost.facilities.map((facility, index) => (
                                                <li key={index}>{facility}</li>
                                            ))}
                                        </ul>
                                    </td>
                                    <td className="p-2 sm:p-4 flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
                                        {/* Button Edit */}
                                        <button
                                            onClick={() => handleEdit(kost)}
                                            className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-700 w-full sm:w-auto"
                                        >
                                            Edit
                                        </button>
                                        {/* Button Hapus */}
                                        <button
                                            onClick={() => handleDelete(kost.id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700 w-full sm:w-auto"
                                        >
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal Edit */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg w-full max-w-md">
                        <h3 className="text-xl font-bold mb-4">Edit Kost</h3>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Nama Kost</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={editData.name}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Alamat</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={editData.address}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Harga</label>
                                <input
                                    type="number"
                                    name="price"
                                    value={editData.price}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Deskripsi</label>
                                <textarea
                                    name="description"
                                    value={editData.description}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>

                            {/* Checkbox untuk Fasilitas */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Fasilitas</label>
                                <div className="grid grid-cols-2 gap-2">
                                    {allFacilities.map((facility, index) => (
                                        <div key={index} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                value={facility}
                                                checked={editData.facilities.includes(facility)}
                                                onChange={handleFacilityChange}
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                            />
                                            <label className="ml-2 text-sm text-gray-700">{facility}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Button untuk menyimpan */}
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

export default Kost;
