import React from 'react';
import { faBars, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import adminRoutes from '../routes/admin';
import MenuDropdown from './MenuDropdown';
import MobileMenuDropdown from './MobileMenuDropdown';

const Header = () => {
  const [menuOpenState, setMenuOpenState] = React.useState<boolean>(false);
  const toggleMenuOpenState = () => setMenuOpenState(!menuOpenState);

  // const user = window.localStorage.getItem('user_invalid_useless_ref');
  // console.log(user);

  return (
    <div className='w-screen h-auto z-[99999]'>
      <div className="hidden h-12 w-screen items-center justify-between bg-white px-8 md:flex">
        <div>Welcome to hotel</div>
        <div className="flex items-center gap-4 justify-center">
          <div>
            <FontAwesomeIcon icon={faPhone} /> 
            <span className='ml-2'>+999 98765-43210</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
            <span className='ml-2'>contact@hotel.com</span>
          </div>
        </div>
      </div>
      <hr className="h-0.5 bg-gray-300" />
      <div className="flex h-16 w-screen items-center justify-between bg-white px-8 z-[999999]">
        <Link href={"/"}>
          <div className="flex cursor-pointer text-2xl">
            <span className="text-indigo-700">Hotel</span>
            <span className="text-indigo-600">.com</span>
          </div>
        </Link>
        <div className="hidden list-none items-center justify-center gap-4 md:flex z-[999]">
          {
            adminRoutes.map((route, idx) => {
              if (!route.paths) return <li key={'route_' + idx}><Link href={route.path}>{route.name}</Link></li>
              return <MenuDropdown key={`menu_dropdown_` + idx} name={route.name ?? ''} prefix={route.path} links={route.paths} />
            }) 
          }
        </div>
        <div className="md:hidden">
          <span>
            <button onClick={toggleMenuOpenState}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </span>
        </div>
      </div>
      <div className={(menuOpenState ? '' : 'hidden') + " w-screen list-none flex-col items-center justify-center bg-gray-50 text-left"}>
        {
          adminRoutes.map((route, idx) => {
            if (!route.paths) return <li key={`mobile_menu_dropdown_` + idx} className="flex w-full cursor-pointer items-center border-b border-t px-5 py-3 text-left hover:bg-gray-200"><Link href={route.path}><button onClick={toggleMenuOpenState}>{route.name}</button></Link></li>
            return <MobileMenuDropdown key={`mobile_menu_dropdown_` + idx} name={route.name ?? ''} prefix={route.path} links={route.paths} onClick={toggleMenuOpenState} />
          }) 
        }
      </div>
    </div>
  )
}

export default Header 