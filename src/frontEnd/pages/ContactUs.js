import "./ContactUs.scss"
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import React,{ useState ,useEffect} from "react";

const Contact = () => {
    const intl = useIntl()
    const [image1, setImage1] = useState();
    const [image2, setImage2] = useState();

    const listenWidth = () => {
            setImage1(intl.formatMessage({ id: 'contact.carousel-light1' }));
            setImage2(intl.formatMessage({ id: 'contact.carousel-light2' }));
    }

    useEffect(() => {
        listenWidth()
        window.addEventListener("resize", listenWidth);
    }, [intl.locale])

    return (
        <div className="home-container">


            <div className="home-item-down">
                <div className="home-item-left">
                    <div className="home-item-title">

                    </div>
                    <div className="home-item-img">
                        <img src={intl.formatMessage({ id: 'contact.carousel-left' })} alt="Found Us"></img>
                    </div>
                    <div className="home-item-content">

                    </div>
                </div>

                <div className="home-item-right">
                    <div className="home-item-title">

                    </div>
                    <div className="home-item-img">
                        <img src={intl.formatMessage({ id: 'contact.carousel-right' })} alt="Contact Us"></img>
                    </div>
                    <div className="home-item-content">

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact;