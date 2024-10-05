import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Kost from './pages/Kost';
import Tenants from './pages/Tenants';
import Transactions from './pages/Transactions';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Konten Utama */}
        <div className="flex-1 md:ml-64">
          <Navbar toggleSidebar={toggleSidebar} />
          <div className="p-6">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/kost" element={<Kost />} />
              <Route path="/tenants" element={<Tenants />} />
              <Route path="/transactions" element={<Transactions />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
