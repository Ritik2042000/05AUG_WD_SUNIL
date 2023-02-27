import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
/* eslint-disable jsx-a11y/anchor-is-valid */

class CustomCard extends Component {
    render() {
        return (
            <>
                <MDBCard>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={window.location.origin+'/image/'+this.props.url} fluid alt='...' />
                        <a>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>{this.props.title}</MDBCardTitle>
                        <MDBCardText>
                            {this.props.children}
                        </MDBCardText>
                        <MDBBtn >{this.props.button}</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </>
        )
    }
}

export default CustomCard;