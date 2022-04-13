import React from 'react';
import { Colors } from '../../theme/Colors/Colors';
import '../../theme/Typography/Typography.css';
import logo from '../../logo.svg';
//import Image from '../../Image.svg';


const cardStyle = {
    backgroundColor: Colors.white,
    color: Colors.primary,
    width:"15%",
    textAlign:"left",
    lineHeight:"50px",
};
const textStyle = {
    fontSize:"16px",
    lineHeight:"20px",
    margin:"10px"

};
const HeadStyle = {
    fontSize:"24px",
    margin:"10px"
};



function CardNoMUI(props) {
    return (
        <>
            <div style={cardStyle}>
                <img style={{width:"100%"}} alt="" src={logo} />
                <h5 style={HeadStyle}> {props.Title} </h5>
                <p style={textStyle} >  {props.paragraph} </p>
                <a href="#!">See more!</a>
            </div>
        </>
    );
}
export default CardNoMUI;