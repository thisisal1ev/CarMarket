import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menu, setMenu] = useState(false)
  const [isScroll, setIsScroll] = useState(false)

  const favorites = useSelector(state => state.addToFavorites);
  const dataCount = favorites.length > 9 ? "9+" : favorites.length

  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`py-5 fixed w-full top-0 z-10 rounded-b-xl !pb-3 pt-6 transition-colors duration-300 ${isScroll ? 'backdrop-blur-lg' : ''}`}>

      <div className="content-container flex items-center justify-between">

        <h1 className='hover-hover:hover:text-skyBlue transition-colors duration-300'>

          <Link className='font-bold text-2xl' to='/'>
            LOGO
          </Link>

        </h1>

        <nav className='translate-x-12 items-center justify-center grow space-x-14 hidden lg:flex'>

          <Link
            className="relative items-center font-medium text-lg leading-6 hover:text-skyBlue duration-300 transition-colors after:hover-effect"
            to="/">
            Katalog
          </Link>

          <Link
            className="relative items-center font-medium text-lg leading-6 hover:text-skyBlue duration-300 transition-colors after:hover-effect"
            to="/">
            About us
          </Link>

          <Link
            className="relative items-center font-medium text-lg leading-6 hover:text-skyBlue duration-300 transition-colors after:hover-effect"
            to="/feedback">
            Feedback
          </Link>

          <Link
            className="relative items-center font-medium text-lg leading-6 hover:text-skyBlue duration-300 transition-colors after:hover-effect"
            to="/">
            About us
          </Link>

        </nav>

        <div className='flex items-center justify-between space-x-4'>

          <a className='hidden relative border-2 w-10 h-10 border-white rounded-lg group transition-colors duration-300 hover-hover:hover:border-skyBlue items-center justify-center md:inline-flex' href="tel:#">
            <svg className='mx-auto transition-colors duration-300 fill-current hover-hover:group-hover:fill-skyBlue active:fill-skyBlue' width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_37_17)">
                <path d="M11.7253 0.898132C5.76536 0.898132 0.9104 5.75309 0.9104 11.7131C0.9104 17.6731 5.76536 22.5375 11.7253 22.5375C14.271 22.5375 16.6124 21.6454 18.4627 20.1641L22.9676 24.6666C23.1949 24.8845 23.4985 25.0048 23.8134 25.0015C24.1283 24.9984 24.4295 24.872 24.6523 24.6494C24.8752 24.4269 25.002 24.1261 25.0056 23.8111C25.0093 23.4962 24.8895 23.1924 24.6719 22.9648L20.167 18.4599C21.6495 16.6067 22.5427 14.2617 22.5427 11.7131C22.5427 5.75309 17.6853 0.898132 11.7253 0.898132ZM11.7253 3.30201C16.3862 3.30201 20.1365 7.05226 20.1365 11.7131C20.1365 16.3739 16.3862 20.1336 11.7253 20.1336C7.0645 20.1336 3.31425 16.3739 3.31425 11.7131C3.31425 7.05226 7.0645 3.30201 11.7253 3.30201Z" />
              </g>
              <defs>
                <clipPath id="clip0_37_17">
                  <rect width="25" height="25" fill="white" transform="translate(0.5 0.5)" />
                </clipPath>
              </defs>
            </svg>
          </a>

          <button className='relative border-2 w-10 h-10 border-white rounded-lg group transition-colors duration-300 hover-hover:hover:border-skyBlue hidden md:inline-block'>
            <svg className='mx-auto transition-colors duration-300 fill-current hover-hover:group-hover:fill-skyBlue active:fill-skyBlue' width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_37_17)">
                <path d="M11.7253 0.898132C5.76536 0.898132 0.9104 5.75309 0.9104 11.7131C0.9104 17.6731 5.76536 22.5375 11.7253 22.5375C14.271 22.5375 16.6124 21.6454 18.4627 20.1641L22.9676 24.6666C23.1949 24.8845 23.4985 25.0048 23.8134 25.0015C24.1283 24.9984 24.4295 24.872 24.6523 24.6494C24.8752 24.4269 25.002 24.1261 25.0056 23.8111C25.0093 23.4962 24.8895 23.1924 24.6719 22.9648L20.167 18.4599C21.6495 16.6067 22.5427 14.2617 22.5427 11.7131C22.5427 5.75309 17.6853 0.898132 11.7253 0.898132ZM11.7253 3.30201C16.3862 3.30201 20.1365 7.05226 20.1365 11.7131C20.1365 16.3739 16.3862 20.1336 11.7253 20.1336C7.0645 20.1336 3.31425 16.3739 3.31425 11.7131C3.31425 7.05226 7.0645 3.30201 11.7253 3.30201Z" />
              </g>
              <defs>
                <clipPath id="clip0_37_17">
                  <rect width="25" height="25" fill="white" transform="translate(0.5 0.5)" />
                </clipPath>
              </defs>
            </svg>
          </button>

          <button className='favoritesBtn hover-hover:hover:border-skyBlue group hidden md:block' datacount={dataCount}>
            <svg className='mx-auto transition-colors duration-300 fill-current hover-hover:group-hover:fill-skyBlue active:fill-skyBlue' width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.7882 3.84201C8.55921 -3.4587 0 0.518492 0 8.4714C0 14.4434 11.7342 23.7853 12.7882 25C13.8493 23.7853 25 14.4434 25 8.4714C25 0.578785 17.025 -3.4587 12.7882 3.84201Z" />
            </svg>
          </button>

          {/* <button className='inline-block lg:hidden relative border-2 w-10 h-10 border-white rounded-lg group transition-colors duration-300 active:bg-white'>
            <svg className='mx-auto fill-current group-active:fill-mainBlack transition-colors duration-300' width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M3 10.25C3 9.91848 3.1317 9.60054 3.36612 9.36612C3.60054 9.1317 3.91848 9 4.25 9H17.135C17.4665 9 17.7845 9.1317 18.0189 9.36612C18.2533 9.60054 18.385 9.91848 18.385 10.25C18.385 10.5815 18.2533 10.8995 18.0189 11.1339C17.7845 11.3683 17.4665 11.5 17.135 11.5H4.25C3.91848 11.5 3.60054 11.3683 3.36612 11.1339C3.1317 10.8995 3 10.5815 3 10.25ZM3 5.25C3 4.91848 3.1317 4.60054 3.36612 4.36612C3.60054 4.1317 3.91848 4 4.25 4H21.75C22.0815 4 22.3995 4.1317 22.6339 4.36612C22.8683 4.60054 23 4.91848 23 5.25C23 5.58152 22.8683 5.89946 22.6339 6.13388C22.3995 6.3683 22.0815 6.5 21.75 6.5H4.25C3.91848 6.5 3.60054 6.3683 3.36612 6.13388C3.1317 5.89946 3 5.58152 3 5.25ZM3 15.25C3 14.9185 3.1317 14.6005 3.36612 14.3661C3.60054 14.1317 3.91848 14 4.25 14H21.75C22.0815 14 22.3995 14.1317 22.6339 14.3661C22.8683 14.6005 23 14.9185 23 15.25C23 15.5815 22.8683 15.8995 22.6339 16.1339C22.3995 16.3683 22.0815 16.5 21.75 16.5H4.25C3.91848 16.5 3.60054 16.3683 3.36612 16.1339C3.1317 15.8995 3 15.5815 3 15.25ZM3 20.25C3 19.9185 3.1317 19.6005 3.36612 19.3661C3.60054 19.1317 3.91848 19 4.25 19H17.135C17.4665 19 17.7845 19.1317 18.0189 19.3661C18.2533 19.6005 18.385 19.9185 18.385 20.25C18.385 20.5815 18.2533 20.8995 18.0189 21.1339C17.7845 21.3683 17.4665 21.5 17.135 21.5H4.25C3.91848 21.5 3.60054 21.3683 3.36612 21.1339C3.1317 20.8995 3 20.5815 3 20.25Z" />
            </svg>

          </button> */}

          <button onClick={() => setMenu(prev => !prev)} className={`group inline-block lg:hidden relative border-2 py-1 px-2 w-10 h-10 border-white rounded-lg group transition-colors duration-300 ${menu ? '!border-skyBlue' : ''}`}>
            <span className={`menu-btn group-hover:before:w-5 group-hover:after:w-5 before:-top-3 after:top-3 ${menu ? 'open' : ''}`}></span>
          </button>

        </div>

      </div>

    </header>
  )
}

export default Header