// 'use client';

import NextLink from 'next/link';
import { Flex, Link, useMediaQuery } from '@chakra-ui/react';
import DropdownMenu from '@/components/DropdownMenu';
import MenuIcon from '@/components/MenuIcon';
import HeaderNavigationItems from '@/hooks/useHeaderTranslation';
import { INavLink } from '@/types';

const HeaderMenu: React.FC = () => {
  // Responsive hook to detect mobile screen
  // const [isMobileScreen] = useMediaQuery('(max-width: 600px)');

  const navLinks: INavLink[] = HeaderNavigationItems();

  if (true) {
    return (
      <DropdownMenu items={navLinks}>
        <MenuIcon />
      </DropdownMenu>
    );
  }

  return (
    <Flex as='nav' align='center'>
      {navLinks.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          passHref
          as={NextLink}
          px={2}
          py={1}
          rounded={'md'}
          _hover={{ textDecoration: 'none', bg: 'cyan.700' }}
        >
          {link.label}
        </Link>
      ))}
    </Flex>
  );
};

export default HeaderMenu;
