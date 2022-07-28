import React from 'react'

type Props = {
  children: any,
  reverse?: boolean
}

const SplitBox = ({ children, reverse }: Props) => {
  return (
    <div className={"w-full h-full flex gap-12 justify-evenly items-center" + (reverse ? ' flex-col-reverse' : ' ')}>
      {
        children
      }
    </div>
  )
}

export default SplitBox