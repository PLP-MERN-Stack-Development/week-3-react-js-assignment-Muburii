import { Outlet } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-300">
      <Navbar />
      <main className="flex-1 flex flex-col justify-center items-center px-4 sm:px-8 py-8 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
