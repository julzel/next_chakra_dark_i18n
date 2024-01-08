'use client';
import NextLink from 'next/link';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
} from '@chakra-ui/react';
import { INavLink, IMenuItem } from '@/types';

// Update the type of items to more accurately reflect the expected types
type DropdownMenuProps = {
  items: INavLink[] | IMenuItem[];
  children?: React.ReactNode;
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  items,
  children,
}) => {
  const itemColor = useColorModeValue('black', 'white');
  const menuBgColor = useColorModeValue('white', 'cyan.900');

  const renderItem = (item: INavLink | IMenuItem, index: number) => {
    // Check if item is of INavLink type
    if ('path' in item) {
      return (
        <MenuItem
          color={itemColor}
          bg={menuBgColor}
          as={NextLink}
          href={item.path}
          key={index}
          passHref
        >
          {item.label}
        </MenuItem>
      );
    }
    // Else, handle as IMenuItem type
    return (
      <MenuItem key={index} onClick={item.onClick} color={itemColor}>
        {item.label}
      </MenuItem>
    );
  };

  return (
    <Menu>
      <MenuButton as='button'>{children ? children : 'Menu'}</MenuButton>
      <MenuList bg={menuBgColor}>{items.map((item, index) => renderItem(item, index))}</MenuList>
    </Menu>
  );
};

export default DropdownMenu;
