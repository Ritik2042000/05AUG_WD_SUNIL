import { Box, Button, Container, Flex, HStack, Heading, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import {FaRegUserCircle} from "react-icons/fa"
import React from 'react';

const TopNav = () => {
    return (
        <Box boxShadow="xl">
            <HStack w="80rem" fontSize="28px"  h="16" justify="space-between" px="28" mx="auto" >

                <Heading fontWeight="medium" fontSize="28px">DashBoard</Heading>
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