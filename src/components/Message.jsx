import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FacebookOutlined, Twitter, Instagram, MailOutline } from '@mui/icons-material';
import axios from 'axios';


const Message = ({data, name}) => {
    return(   
        <div>
        {data?.map((order)=>{
            return(
                <Link style={{textDecoration: "none"}} to={`/${name}/${order.orderId}`}>
                    <div class="order">
                        <span>OrderID: {order.orderId}</span>
                    </div>
                </Link>
            )
        })}
        </div>    
    )
}

export default Message;