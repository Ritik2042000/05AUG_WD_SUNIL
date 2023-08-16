import { Box, Button, Container, Flex, HStack, Heading, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import {FaRegUserCircle} from "react-icons/fa"
import {FaBars} from "react-icons/fa"
import React from 'react';

const TopNav = ({title, onOpen}) => {
    return (
        <Box px="4" bg="white">
            <HStack maxW="70rem" fontSize="28px"  h="16" justify="space-between"  mx="auto" >
                    <Icon as={FaBars} onClick={onOpen} display={{base:"block",lg:"none"}}/>
                <Heading fontWeight="medium" fontSize="28px">{title}</Heading>
                <Menu>
                    <MenuButton as={Button} >
                        <Icon as={FaRegUserCircle} fontSize="24px"/>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Logout</MenuItem>
                        <MenuItem>Support</MenuItem>
                    </MenuList>
                </Menu>

            </HStack>
        </Box>
    );
};

export default TopNav;