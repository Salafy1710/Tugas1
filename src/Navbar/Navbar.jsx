export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">MyWebsite</h1>
        <ul className="flex space-x-6">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
