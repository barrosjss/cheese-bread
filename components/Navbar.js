import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import logo from '@/public/un-pan.png'

export default function Navbar() {
  return (
    <Box borderBottom={'1px solid #303030'}>
      <Flex minH={'80px'} align={'center'} justifyContent={'center'}>
        <Flex width={'100px'} justifyContent={'flex-end'}>
          Portafolio
        </Flex>
        <Box width={'100px'} align={'center'}>
          <Image src={logo} width={60} height={60} alt={'logo'} />
        </Box>
        <Flex width={'100px'}>Team</Flex>
      </Flex>
    </Box>
  )
}
