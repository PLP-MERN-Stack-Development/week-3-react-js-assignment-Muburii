function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-12 max-w-6xl mx-auto my-16 border border-gray-100 dark:border-gray-800 transition-colors duration-300">
      {title && <h2 className="text-3xl font-extrabold mb-6 text-blue-700 dark:text-blue-300">{title}</h2>}
      {children}
    </div>
  );
}

export default Card;