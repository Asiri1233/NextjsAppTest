"use client"
import { Box, Heading, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import NavBar from '@/components/NavBar';

import Link from 'next/link';


export default function Success() {
  return (
    <>
    <div className="w-[100%] md:h-[100vh]  background">
    <div className="relative">
      <NavBar background="[#021625]" />
    </div>
    <div className='flex items-center justify-center mt-[20rem]'>
    <div>
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} className='bg-green-200 rounded-full' />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Success
      </Heading>
      <Text color={'gray.500'}>
        We will add your adverisement in 30 to 1 hour
      </Text>
    </Box>
    </div>
    </div>
    <div className='mt-[10rem] flex items-center justify-center'>
      <Link href="/" className='w-[9rem] flex items-center justify-center h-[3rem] bg-red text-white border border-white rounded-lg ml-[] hover:bg-blue-100 hover:text-black duration-200'>Go back to Home</Link>
    </div>
    </div>

    </>
  );
}