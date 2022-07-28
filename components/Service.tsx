import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Service = ({ service, icon }: any) => {
  const ref = React.useRef<any>();
  const toggle = () => {
    ref.current.classList.toggle('flex'); 
    ref.current.classList.toggle('hidden')
  }
  
  return (
    <div onMouseEnter={toggle} onMouseLeave={toggle} className='bg-gray-50 border-2 w-8 h-8 flex px-4 py-4 justify-center items-center cursor-help relative z-10'>
      <div ref={ref} className='hidden absolute -top-8 justify-center items-center flex-col'>
        <div className='uppercase -mt-3 bg-gray-200 text-xs flex justify-center items-center p-2 flex-col'>
          <span>{service}</span>
        </div>  
        <FontAwesomeIcon className='-translate-y-1.5' icon={faCaretDown} />
      </div>
      <FontAwesomeIcon icon={icon} />
    </div>
  )
}

export default Service