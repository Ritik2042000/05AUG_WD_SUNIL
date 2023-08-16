import React from 'react';
import SideNav from './SideNav';
import TopNav from './TopNav';
import { Box, Container, Flex, useDisclosure } from '@chakra-ui/react';
import Sidedrawer from './Sidedrawer';

const DashboardLayout = ({ title, children }) => {

    const { isOpen, onClose, onOpen } = useDisclosure()


    return (
        <Box>
            <Flex>
                <Box display={{
                    base: "none", lg: "flex"
                }}>
                    <SideNav />

                </Box>
                <Sidedrawer isOpen={isOpen} onClose={onClose} />
                <Box flexGrow={1}>
                    <TopNav title={title} onOpen={onOpen} />
                    <Container maxW="70rem" px="4" mt="6">{children}</Container>
                </Box>
            </Flex >
        </Box >
    );
};

export default DashboardLayout;