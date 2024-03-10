import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

import { Space } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined, MoreOutlined, CopyrightCircleOutlined } from '@ant-design/icons';
import Icon from '../images/original_trans.png';

import './style.css';


const Footer = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (


        <section className="contact_lower_div">

            <Space size="large" style={{ color: "white" }}>
                <p>Contact Us</p>
                <p>Want to Volunteer?</p>
            </Space>

            <MoreOutlined style={{ fontSize: '30px', color: "white" }} className="contact_icon" />

            <Space size="large" style={{ color: "white" }}>
                <p>PRIVACY POLICY</p>
            </Space>

            <MoreOutlined style={{ fontSize: '30px', color: "white" }} className="contact_icon" />

            <LinkedinOutlined style={{ fontSize: '10px', color: "white" }} className="contact_icon" />
            <FacebookOutlined style={{ fontSize: '10px', color: "white" }} className="contact_icon" />
            <TwitterOutlined style={{ fontSize: '10px', color: "white" }} className="contact_icon" />
            <InstagramOutlined style={{ fontSize: '10px', color: "white" }} className="contact_icon" />

            <MoreOutlined style={{ fontSize: '30px', color: "white" }} className="contact_icon" />

            <Space size="small" style={{ color: "white" }}>
                <p>Copyright</p><CopyrightCircleOutlined style={{ fontSize: '10px', color: "white" }} />
                <img src={Icon} alt="" style={{ width: "90px", height: "65px" }} id="contact_photo" ></img>

            </Space>

        </section>



    );
}

export default Footer;
