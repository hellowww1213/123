export const Sidebar = () => {
  return (
    <aside className="w-64 p-4 bg-neutral-800 border-r border-neutral-700 hidden md:block">
      <h2 className="text-lg font-bold mb-4">
        <span className="text-red-500">Bet</span><span className="text-yellow-400">Boom</span>
      </h2>
      <nav>
        <ul className="space-y-2">
          <li><a href="#" className="block px-2 py-1 hover:text-yellow-300">История платежей</a></li>
          <li><a href="#" className="block px-2 py-1 hover:text-yellow-300">Профиль</a></li>
          <li><a href="#" className="block px-2 py-1 hover:text-yellow-300">Настройки</a></li>
        </ul>
      </nav>
    </aside>
  );
};
