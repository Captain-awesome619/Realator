import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, Button } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import { useMediaQuery } from '@chakra-ui/react';
import NextLink from 'next/link'


function Navbar () {

return(
  <Flex>
<Flex
pos='fixed'
top='0rem'
right='1rem'
align='center'
>
<Flex
display={['none','none','flex','flex']}
>
<NextLink href= "/" passHref>
  <Button
as='a'
variant='ghost'
aria-label='Home'
my={5}
w='100%'
>
  Home
</Button>
</NextLink>

<NextLink href= '/search' passHref>
  <Button
as='a'
variant='ghost'
aria-label='Search'
my={5}
w='100%'
>
  Search
</Button>
</NextLink>

<NextLink href= '/search?purpose=for-sale' passHref>
  <Button
as='a'
variant='ghost'
aria-label='Buy'
my={5}
w='100%'
>
  Buy
</Button>
</NextLink>

<NextLink href= '/search?purpose=for-rent' passHref>
  <Button
as='a'
variant='ghost'
aria-label='Rent'
my={5}
w='100%'
>
  Rent
</Button>
</NextLink>



</Flex>
</Flex>

<Flex

  p='1' borderBottom='1px' borderColor='gray.100'>

      <Box   fontSize='3xl' color='blue.400' fontWeight='bold'>
        <Link href='/' paddingleft='2' >Realator</Link >
      </Box>
      <Spacer />
      </Flex>

      <Box paddingTop='3'display={['flex','flex','none','none']} paddingLeft='5'>
        <Menu >
          <MenuButton  as={IconButton} icon={<FcMenu/>} variant='outline' color='red.400'  />
          <MenuList >
            <Link href='/' passHref>
              <MenuItem icon={<FcHome />}>Home</MenuItem>
            </Link>
            <Link href='/search' passHref>
              <MenuItem icon={<BsSearch />}>Search</MenuItem>
            </Link>
            <Link href='/search?purpose=for-sale' passHref>
              <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
            </Link>
            <Link href='/search?purpose=for-rent' passHref>
              <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>



  </Flex>
)
};




export default Navbar;