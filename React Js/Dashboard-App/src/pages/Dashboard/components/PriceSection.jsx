import React from 'react';
import { CustomCard } from '../../../chakra/CustomCard';
import { BsArrowUpRight } from 'react-icons/bs';
import { Button, Flex, HStack, Icon, Image, Stack, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';


const PriceSection = () => {

    const timestamps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM",]
    return (
        <CustomCard>
            <Flex justify="space-between" align="start">
                <Stack>
                    <HStack color="black.80">
                        <Text fontSize="sm">Current Prices</Text>
                    </HStack>
                    <HStack spacing="4">
                        <HStack>
                            <Text textStyle={{
                                base: "h6",
                                md: "h5",
                                xl: "h2",
                            }} fontWeight="medium">22.39401000</Text>
                        </HStack>
                        <HStack fontWeight="medium" color="green.500">
                            <Icon as={BsArrowUpRight} />
                            <Text fontWeight="medium" fontSize="sm">22%</Text>
                        </HStack>
                    </HStack>
                </Stack>
                <HStack>
                    <Button leftIcon={<AiFillPlusCircle />}>Buy</Button>
                    <Button leftIcon={<AiFillMinusCircle />}>Sell</Button>
                </HStack>
            </Flex>
            <Tabs variant='soft-rounded' colorScheme='green'>

                <Flex justify={'end'} >
                    <TabList bg="black.5" p='3px' >
                         {

                        ["1H","1D","1W","1M"].map((tab)=>{
                            return <Tab _selected={{bg:'white'}} key={tab} fontSize='sm' p='6px' borderRadius='4'>{tab}</Tab>
                        }) 
                        }
                        
                    </TabList >
                </Flex>
                <TabPanels>
                    <TabPanel>
                        <Image w="100%" src="\graph.svg" mt={'3rem'} />
                        <HStack justify={'space-between'}>
                            {
                                timestamps.map((timestamps) => {
                                    return <Text key={timestamps} fontSize="sm" color="black.80" >{timestamps}</Text>
                                })
                            }
                        </HStack>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>

        </CustomCard>
    );
};

export default PriceSection;