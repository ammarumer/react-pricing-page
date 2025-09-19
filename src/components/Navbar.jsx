function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
            <h1 className="text-xl font-bold">MyPricing</h1>
            <ul className="flex gap-6">
                <li><a href="#" className="hover:text-blue-400">Home</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
