import Link from 'next/link';

const Header = () => (
  <header className="bg-dark text-accent py-6 px-10 flex justify-between items-center">
    <div>
    </div>
    <div>
    </div>
    <div className='flex justify-center items-center space-x-6 me-20'>
    <nav className="space-x-4">
        <Link href="/" className="font-bold text-accent hover:bg-white hover:text-black hover:rounded-full hover:px-5 py-2 transition duration-300">Home</Link>
    </nav>
    </div>
    
  </header>
);

export default Header;
