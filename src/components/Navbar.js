const Navbar = ({ toggleSidebar }) => {
    return (
        <nav className="bg-primary p-4 text-white">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">Admin Panel</h1>

                {/* Hamburger menu untuk mobile */}
                <div className="md:hidden">
                    <button onClick={toggleSidebar} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>

                {/* Hapus Tombol logout untuk desktop */}
            </div>
        </nav>
    );
};

export default Navbar;
