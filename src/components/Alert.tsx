import {
    ExclamationTriangleIcon,
    XMarkIcon,
  } from "@heroicons/react/24/outline";

import { ReactNode } from "react";


interface Props{
    children: ReactNode
    toggle: () => void
}


const Alert = ({children, toggle}:Props) => {

  return (
    <>
      <div className="border-l-4 border-red-500 p-4 rounded-md bg-red-100">
        <div className="flex items-center space-x-4">
          <div className="">
            <ExclamationTriangleIcon className="h-6 w-6 text-red-600" />
          </div>
          <div className="">
            {children}
          </div>
          <button onClick={() => toggle()}>
            <XMarkIcon className="h-6 w-6 text-red-600 cursor-pointer" />
          </button>
        </div>
      </div>
    </>
  )
}

export default Alert