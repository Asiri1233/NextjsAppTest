import React from 'react'

const Stepper = ({li , border}) => {
  return (
    <div>
      
<ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
    <li className="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5">
        <span className="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500 ">
            1
        </span>
        <span>
            <h3 className="font-medium leading-tight">Buy key</h3>
            <p className="text-sm">Buy from sellix or via Telegram</p>
        </span>
    </li>
    <li className={`flex items-center space-x-2.5}${li} gap-1`}>
        <span className={`flex items-center justify-center w-8 h-8 border  rounded-full shrink-0 ${border} `}>
            2
        </span>
        <span>
            <h3 className="font-medium leading-tight">Fill the form</h3>
            <p className="text-sm">Redeem your key in the form</p>
        </span>
    </li>
    <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
        <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            3
        </span>
        <span>
            <h3 className="font-medium leading-tight">Wait for the confirmation</h3>
            <p className="text-sm">This will take 15min to 30min</p>
        </span>
    </li>
</ol>

    </div>
  )
}

export default Stepper