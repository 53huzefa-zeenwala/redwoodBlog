import { Link, routes, useLocation } from '@redwoodjs/router'
import {useAuth} from '@redwoodjs/auth'

const Navbar = () => {
  const { pathname } = useLocation()
  const { isAuthenticated, logOut } = useAuth()
  return (
    <div className=" w-full max-w-7xl">
      <div
        className="flex flex-col max-w-screen-xl mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
      >
        <div className="flex flex-row items-center justify-between lg:justify-start">
          <a className="text-lg font-bold tracking-tighter text-blue-600 transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8 pr-4">
            REDWOOD BLOG
          </a>
          <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline hidden"  >
                <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8">
                    <path  fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
            </button>
        </div>

        <nav className="flex-col items-center flex-grow pb-4 border-blue-600 md:pb-0 md:flex md:flex-row border-l-2 pl-2 pt-4 md:pt-0 md:bg-white bg-gray-100 md:mt-0 mt-2" >
          <a
            className="px-4 py-2 mt-2 text-md font-semibold text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline"
          >
            <Link
              to={routes.home()}
              className={pathname === '/' ? 'text-black font-bold focus:text-blue-600 focus:outline-none' : "focus:text-blue-600 focus:outline-none"}
            >
              Home
            </Link>
          </a>
          <a
            className="px-4 py-2 mt-2 text-md font-semibold text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline py-4"
          >
            <Link
              to={routes.contact()}
              className={pathname === '/contact' ? 'text-black font-bold focus:text-blue-600 focus:outline-none' : "focus:text-blue-600 focus:outline-none"}
            >
              Contact Us
            </Link>
          </a>
          <a
            className="px-4 py-2 mt-2 text-md font-semibold text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline"
          >
            <Link
              to={routes.about()}
              className={pathname === '/about' ? 'text-black font-bold focus:text-blue-600 focus:outline-none' : "focus:text-blue-600 focus:outline-none"}
            >
              About
            </Link>
          </a>
          <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
            {isAuthenticated ?  (
                <button className="items-center block px-10 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" onClick={logOut}>LogOut</button>) : (
                <Link to={routes.login()} className="items-center block px-10 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Login</Link> )}
            </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
