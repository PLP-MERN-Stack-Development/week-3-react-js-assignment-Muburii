function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="backdrop-blur bg-white/80 dark:bg-gray-900/80 p-6 text-center text-gray-600 dark:text-gray-300 shadow-inner mt-8 rounded-t-xl">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <span>{year} MUBURI NJUGUNA &copy; All rights reserved.</span>
        <a href="https://github.com/muburii" className="text-blue-600 dark:text-blue-400 hover:underline"> GitHub </a>
      </div>
    </footer>
  );
}

export default Footer;