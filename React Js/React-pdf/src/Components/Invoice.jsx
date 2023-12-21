import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import Logo from '../assets/logo.png'

const Invoice = () => {
    const styles = StyleSheet.create({

        container: {
            // padding:'20px 30px'
            width:"90%",
            borderRadius: "10px",
            border: "1px solid black",
            marginLeft: '30px ',
            marginRight: '0px',
            marginTop: '30px',
            paddingVertical:'10px',
            paddingHorizontal:'20px',
        },
        header: {
            width: '850px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '10px',

        },
        hr:{
            display:'inline',
            width:"98%",
            borderBottom: '1px dashed #000',
            marginTop:"5px"
        },

        col6: {
            width: "50%",
            // borderBottom:"1px solid #000"
        },

        img: {
            width: '70',
        },

        p: {
            // display: 'block',
            fontSize: '7px',
        },
        span: {
            fontSize: '6px',
        },
        invoicenospan:{
            fontSize: '9px',
            paddingVertical:"3px"
            
        },
        spanBold: {
            fontSize: '6px',
            fontWeight: "ultrabold",
        },
        tableColHeaderDes: {
            width: '40%',
            backgroundColor: '#f5f5f5',
            fontSize: '7px'
        },
        tablecolsec: {
            width: '60%',
            // borderTop:"1px solid #000",
        },
        col4: {
            width: "10%",
            backgroundColor: '#f5f5f5',
            fontSize: '7px'
        },
        dflex: {
            display: 'flex',
            flexDirection: 'row',
        },
        billitems: {
            backgroundColor: 'white',
            paddingVertical: '5px '
        },
        lastheading: {
            width: "8%",
            fontSize: '7px',
            backgroundColor: '#f5f5f5',

        },
        totalamount: {
            width: "10%",
            
        },
        tableamountHr:{
            width:'27%',
            borderBottom:"1px solid #f5f5f5"
        }


    });
    return (
        <Document>
            <Page size='A4' orientation='portrait' style={styles.body}>
                <View style={styles.container}>

                    <View style={styles.header}>
                        <View style={styles.col6}>
                            <Image src={Logo} style={styles.img} />
                        </View>
                        <View style={styles.col6}>
                            {/* <Text style={styles.p}>Nexcess</Text>
                            <Text style={styles.p}>2703 Ena Dr.</Text>
                            <Text style={styles.p}>Lansing, MI 48917 US</Text>
                            <Text style={styles.p}>TAX ID: 38-3423459</Text>
                            <Text style={styles.p}>EU VAT: 372008531</Text>
                            <Text style={styles.p}>UK VAT: 369138957</Text>
                            <Text style={styles.p}>ZA VAT: 482028321</Text> */}
                        </View>
                    </View>
                        <Text style={styles.hr}></Text>
                    <View style={styles.header}>
                        <View style={styles.col6}>
                            <Text style={styles.span}>Bill To</Text>
                        </View>
                        <View style={styles.col6}>
                            <Text style={styles.span}>Account ID: 140354</Text>
                            <Text style={styles.span}>Invoice #</Text>
                        </View>
                    </View>
                    <View style={styles.header}>
                        <View style={styles.col6}>
                            <Text style={styles.spanBold}>Jigar Joshi</Text>
                            <Text style={styles.spanBold}>Wan Buffer Services</Text>
                            <Text style={styles.spanBold}>Sarthak Complex, 208, Swastik Society Cross Rd, Swastik Society, Navrangpura</Text>
                            <Text style={styles.spanBold}>Ahmedabad, Gu 380009 IN</Text>
                        </View>
                        <View style={styles.col6}>
                            <Text style={styles.invoicenospan}>2125087</Text>
                            <Text style={styles.span}>Date :6/12/2023</Text>
                            {/* <Text style={styles.span}>Payment Due: December 6 2023</Text>
                            <Text style={styles.span}>Total: 0.00 USD</Text> */}
                        </View>
                    </View>
                   
                    <View style={styles.header}>
                        <View style={styles.tableColHeaderDes}>
                            <Text>Description</Text>
                            <Text style={styles.billitems}>nc.xsmall </Text>
                        </View>
                        <View style={styles.tablecolsec}>
                            <View style={styles.dflex}>
                                <View style={styles.col4}>
                                    <Text>Quantity</Text>
                                    <Text style={styles.billitems}>1</Text>
                                </View>
                                <View style={styles.col4}>
                                    <Text>Price</Text>
                                    <Text style={styles.billitems}>32.00</Text>
                                </View>
                                <View style={styles.lastheading}>
                                    <Text >Amount</Text>
                                    <Text style={styles.billitems}>32.00</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.header}>
                        <View style={styles.tableColHeaderDes}>
                            {/* <Text>Total</Text> */}
                            <Text></Text>
                        </View>
                        <View style={styles.tablecolsec}>
                        <Text style={styles.tableamountHr}></Text>
                            <View style={styles.dflex}>
                                <View style={styles.col4}>
                                    <Text style={styles.billitems}>Total</Text>
                                    <Text></Text>
                                </View>
                                <View style={styles.totalamount}>
                                    <Text></Text>
                                    <Text style={styles.billitems}></Text>
                                </View>
                                <View style={styles.col4}>
                                    <Text style={styles.billitems}>Kd32.00</Text>
                                    {/* <Text >Amount</Text> */}
                                </View>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.hr}></Text>



                </View>
            </Page>
        </Document>
    );
};

export default Invoice;


