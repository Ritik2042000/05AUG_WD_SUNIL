import { Button, Input } from '@chakra-ui/react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import React from 'react';
import SideNav from './SideNav';

const Sidedrawer = ({ isOpen, onClose }) => {

    return (
        <>

            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}

            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />

                    <DrawerBody>
                        <SideNav/>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
};

export default Sidedrawer;