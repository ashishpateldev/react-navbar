import { useColorMode, IconButton, Flex, Button, Link, Image } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import logo from './logo192.png'

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <Flex>
      <Flex 
      position="fixed"
      top={4}
      right={4}> 
      </Flex>
    
    <Flex gap={20}>
      <Image
      src={logo}></Image>
      <Link href='/' passHref>
            <Button
            as="a"
            variant="ghost"
            aria-label='Home'
            my={5}
            ml={20}
            w="100%"
            >Home</Button>
      </Link>

      <Link href='/' passHref>
            <Button
            as="a"
            variant="ghost"
            aria-label='Home'
            my={5}
            ml={20}
            w="100%"
            >About</Button>
      </Link>

      <Link href='/' passHref>
            <Button
            as="a"
            variant="ghost"
            aria-label='Home'
            my={5}
            ml={20}
            w="100%"
            >Education</Button>
      </Link>

      <Link href='/' passHref>
            <Button
            as="a"
            variant="ghost"
            aria-label='Home'
            my={5}
            ml={20}
            w="100%"
            >Skills</Button>
      </Link>
    </Flex>

    <IconButton
      my={5}
      ml={80}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      aria-label="Toggle Theme"
      colorScheme="green"
      onClick={toggleColorMode}
    />
    </Flex>
  )
}
