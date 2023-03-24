import React from 'react'

interface Props{
  children: string
  onClick: ()=>void
  color?: 'red' | 'blue' | "yellow"
}

const Button = ({children, onClick, color="blue"}:Props) => {
  console.log(color, children)
  return (
    <>
    <button className={`py-2 px-4 rounded-lg text-white bg-${color}-500`} onClick={onClick}>{children}</button>
    </>
  )
}

export default Button