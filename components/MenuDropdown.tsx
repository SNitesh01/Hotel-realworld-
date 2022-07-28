import { faArrowDown, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

type Link = {
  name: string,
  path: string
}

type MenuDropdownProps = {
  name: string,
  prefix: string,
  links: Array<Link>
}

const MenuDropdown = ({ name, links, prefix }: MenuDropdownProps) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const toggleOpenState = () => {
    setOpen(!open);
  }

  return (
    <div className="relative">
      <li className="hi flex items-center justify-center gap-2">
        <span>
          <button onClick={toggleOpenState}>
            {name}
          </button>
        </span>
        <span className="-mt-2.5 h-3 w-3">
          <FontAwesomeIcon icon={faCaretDown} />
        </span>
      </li>
      <div className={(open ? '' : 'hidden') + " absolute mt-4 w-max bg-gray-50"}>
        {links.map(link => <li key={link.name + '_' + link.path} className="cursor-pointer border-b p-2 hover:bg-gray-200"><Link href={prefix + link.path}><button onClick={toggleOpenState}>{link.name}</button></Link></li>)}
      </div>
    </div>
  )
}

export default MenuDropdown