import { Box, HStack, Heading, Icon, Stack, Text } from '@chakra-ui/react';
import { RxDashboard } from 'react-icons/rx';
import { BsArrowDownUp } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';
import React from 'react';

const SideNav = () => {

    const navLinks = [
        {
            icon: RxDashboard,
            text: "DashBoard",
            links: "/"

        },
        {
            icon: BsArrowDownUp,
            text: "Transctions",
            links: "/transctions"

        }]

    return (
        <>
            <Stack justify="space-between" boxShadow="lg" maxWidth="16rem" height="100vh" >
                <Box>
                    <Heading textAlign="center" fontSize="20px" as='h1' pt="56px">@Admin DashBoard</Heading>
                    <Box mt="6" mx="12px">
                        {
                            navLinks.map((nav) => (
                                <HStack borderRadius="10px" key={nav.text} py="3" px="4" color="#797E82" _hover={{
                                    bg: "#F3F3F7",
                                    color: "#171717",
                                }}>
                                    <Icon as={nav.icon} />
                                    <Text fontSize="14px" fontWeight="medium" >{nav.text}</Text>
                                </HStack>
                            ))
                        }
                    </Box>
                </Box>
                <Box mt="6" mx="12px" mb="6">
                    <HStack borderRadius="10px" py="3" px="4" color="#797E82" _hover={{
                        bg: "#F3F3F7",
                        color: "#171717",
                    }}>
                        <Icon as={BiSupport} />
                        <Text fontSize="14px" fontWeight="medium" >Support</Text>
                    </HStack>
                </Box>
            </Stack>
        </>
    );
};

export default SideNav;