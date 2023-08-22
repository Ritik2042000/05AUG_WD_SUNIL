import { Button, HStack, Icon, Stack, Tag, Text } from '@chakra-ui/react';
import { BsInfoCircle } from 'react-icons/bs'
import { BiMoneyWithdraw } from 'react-icons/bi'
import { MdOutlineDraw } from 'react-icons/md'
import React from 'react';

const PortfolioSection = () => {
    return (
        <HStack justify="space-between" align={{ base: "flex-start",md:"center", xl: "center" }} bg="white" borderRadius="xl" p="6" flexDirection={{base: "column",md:"row",xl: "row"}}>
            <HStack spacing={{base:"2",xl:"16"}} align={{ base: "flex-start",md:"center", xl: "center" }} flexDirection={{base: "column",md:"row",xl: "row",}}>
                <Stack>
                    <HStack color="black.80">
                        <Text fontSize={{base:"xs",md:"xs",xl:"sm"}}>Total Portfolio Value</Text>
                        <Icon as={BsInfoCircle} />
                    </HStack>
                    <Text textStyle={{
                        base:"h6",
                        md:"h5",
                        xl:"h2",
                    }} fontWeight="medium">₹112,312.24</Text>
                </Stack>
                <Stack>
                    <HStack color="black.80">
                        <Text fontSize="sm">Wallet Balances</Text>
                    </HStack>
                    <HStack spacing="4">
                        <HStack>
                            <Text  textStyle={{
                        base:"h6",
                        md:"h5",
                        xl:"h2",
                    }}fontWeight="medium">22.39401000</Text> <Tag colorScheme='gray'>BTC</Tag>
                        </HStack>
                        <HStack>
                            <Text  textStyle={{
                        base:"h6",
                        md:"h5",
                        xl:"h2",
                    }} fontWeight="medium">₹1,300.00</Text> <Tag colorScheme='gray'>INR</Tag>
                        </HStack>
                    </HStack>
                </Stack>
            </HStack>
            <HStack>
                <Button leftIcon={
                    <MdOutlineDraw />
                }>Deposit</Button>
                <Button leftIcon={
                    <BiMoneyWithdraw />
                }>WithDraw</Button>
            </HStack>
        </HStack>
    );
};

export default PortfolioSection;