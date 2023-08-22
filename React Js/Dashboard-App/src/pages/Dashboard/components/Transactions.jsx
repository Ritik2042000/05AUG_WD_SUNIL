import React, { Fragment } from 'react';
import { Box, Button, Card, Divider, Flex, Grid, Icon, Stack, Text } from '@chakra-ui/react';
import { CustomCard } from '../../../chakra/CustomCard';
import { TbCoinRupee } from 'react-icons/tb';
import { PiCurrencyBtcFill } from 'react-icons/pi';

const Transactions = () => {

    const transactions = [
        {
            id: "1",
            icon: TbCoinRupee,
            text: 'INR Deposite',
            amount: '₹81,250',
            timestamp: "2023-8-20 7:15 PM"
        },
        {
            id: "2",
            icon: PiCurrencyBtcFill,
            text: 'BTC Sell',
            amount: '-12.485632 BTC',
            timestamp: "2023-8-20 7:15 PM"
        },
        {
            id: "3",
            icon: TbCoinRupee,
            text: 'INR Deposite',
            amount: '₹81,250',
            timestamp: "2023-8-20 7:15 PM"
        },
    ]

    return (
        <CustomCard>
            <Text mb='6' fontSize='sm' color="black.80">Recent Transactions</Text>
            <Stack gap={4}>
                {
                    transactions.map((trans,i) => {
                        return <Fragment key={trans.id} >
                         {i !== 0 && <Divider/> }
                            <Flex  gap='4'>
                                <Grid placeItems='center' bg='black.5' boxSize={10} borderRadius='full'>
                                    <Icon as={trans.icon} />
                                </Grid>
                                <Flex justify='space-between' w='full' >
                                    <Stack>
                                        <Text textStyle='h6'>
                                            {trans.text}
                                        </Text>
                                        <Text fontSize='sm' color="black.80">
                                            {trans.timestamp}
                                        </Text>
                                    </Stack>
                                    <Text fontSize='sm' color="black.80">
                                        {trans.amount}
                                    </Text>

                                </Flex>
                            </Flex>
                        </Fragment>
                    })
                }
                <Button w='full' colorScheme='gray' mt={2}>View All</Button>
            </Stack>
        </CustomCard>
    );
};

export default Transactions;