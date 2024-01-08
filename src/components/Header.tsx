import { Box, Flex } from '@chakra-ui/react';
import Logo from '@/components/Logo';
import HeaderMenu from '@/components/HeaderMenu';

const Header = () => {
  return (
    <header>
      <Flex
        bg='cyan.900'
        color='white'
        px={[4, 8]}
        py={2}
        pb={1}
        justifyContent='space-between'
        alignItems='center'
        w='100%'
      >
        <Logo variant='color' />
        <Box>
          <HeaderMenu />
        </Box>
      </Flex>
    </header>
  );
};

export default Header;
