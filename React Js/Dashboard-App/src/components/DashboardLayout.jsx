import React from 'react';
import SideNav from './SideNav';
import TopNav from './TopNav';
import { Box, Flex } from '@chakra-ui/react';

const DashboardLayout = ({title,children}) => {
    return (
        <Box>
            <Flex>
                <SideNav />
                <Box flexGrow={1}>
                    <TopNav title={title} />
                    <Box px="4">{children}</Box>
                </Box>
            </Flex>
        </Box>
    );
};

export default DashboardLayout;