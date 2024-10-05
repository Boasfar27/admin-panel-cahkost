const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <div className={`bg-primary h-full w-64 p-6 fixed z-50 top-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
            {/* Membuat flex container untuk menempatkan tombol logout di bagian bawah */}
            <div className="flex flex-col h-full justify-between">
                <ul className="space-y-6 text-white">
                    <li>
                        <a href="/dashboard" className="block py-2 px-4 rounded hover:bg-accent">Dashboard</a>
                    </li>
                    <li>
                        <a href="/kost" className="block py-2 px-4 rounded hover:bg-accent">Manajemen Kost</a>
                    </li>
                    <li>
                        <a href="/tenants" className="block py-2 px-4 rounded hover:bg-accent">Penyewa</a>
                    </li>
                    <li>
                        <a href="/transactions" className="block py-2 px-4 rounded hover:bg-accent">Transaksi</a>
                    </li>
                </ul>

                {/* Tombol Logout di bagian bawah di Mobile & Desktop */}
                <div className="p-4">
                    <button className="bg-accent py-2 px-4 w-full rounded hover:bg-blue-700">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
