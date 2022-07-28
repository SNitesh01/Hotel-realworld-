import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

type Link = {
  name: string,
  path: string
}

type MobileMenuDropdownProps = {
  name: string,
  prefix: string,
  links: Array<Link>,
  onClick: any
}

const MobileMenuDropdown = ({ name, prefix, links, onClick }: MobileMenuDropdownProps) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <div className="relative w-full cursor-pointer justify-start border-b border-t px-5 py-3 text-left hover:bg-gray-200">
      <li className="flex w-max items-center justify-center gap-2">
        <button onClick={toggleOpen}>
          <span>{name}</span>
          <span className="mt-1 h-3 w-3 ml-2">
            <FontAwesomeIcon icon={faCaretDown} />
          </span>
        </button>
      </li>
      <div className={(open ? '' : 'hidden') + " mt-4 flex w-screen flex-col bg-gray-50 md:absolute md:w-max"}>
        {
          links.map(link => <li key={`mobile_menu_dropdown_` + prefix + link.name + link.path} className="cursor-pointer w-screen border-b p-2 hover:bg-gray-200"><Link className='w-screen' href={prefix + link.path}><button onClick={onClick}>{link.name}</button></Link></li>)
        }
      </div>
    </div>
  )
}

export default MobileMenuDropdown