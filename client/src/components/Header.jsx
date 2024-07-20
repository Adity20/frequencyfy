import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className='bg-slate-200'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
      <Link to="/" className="flex items-center space-x-2">
      <h1 className="font-bold text-2xl text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105">
        Frequencyfy
      </h1>
    </Link>
    <ul className="flex space-x-4">
      <li>
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-800 font-semibold py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-100"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="text-blue-600 hover:text-blue-800 font-semibold py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-100"
        >
          About
        </Link>
      </li>
          <Link to='/profile'>
            {currentUser ? (
              <img src={currentUser.profilePicture} alt='profile' className='h-7 w-7 rounded-full object-cover' />
            ) : (
              <li >Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
}
