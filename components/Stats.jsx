"use client"
import { Tooltip } from '@chakra-ui/react'
import React from 'react'

const Stats = () => {
  return (
    <div>
      {/*Will Update this soon*/ }
      <Tooltip label="Coming Soon" placement='top' bg="white" textColor="black" rounded="3">
      <a className='font-semi-bold md:text-1xl text-white hover:text-blue-500 border rounded p-1  disabled cursor-pointer'>Page Analytics - Coming Soon</a>

      </Tooltip>
    </div>
  )
}

export default Stats