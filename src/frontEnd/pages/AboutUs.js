import "./AboutUs.scss"
import aboutUs_0 from "../images/AboutUs/aboutUs_0.png";
import aboutUs_1 from "../images/AboutUs/aboutUs_1.png";
import aboutUs_2 from "../images/AboutUs/aboutUs_2.png";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

const AboutUs = ({aboutsShow,setAboutsShow}) => {


    const detectorScroll = () => {
        const titles = document.getElementsByClassName("aboutus-item-title");
        const contents = document.getElementsByClassName("abouts-item-content");
        for (let i = 0; i < titles.length; i++) {
            if ((window.outerHeight - window.scrollY) > titles[i].offsetTop) {
                titles[i].classList.add("fade-in")
                console.log("over")
            }
        }
    }

    const firstLoad = () => {
        return (
            <div className="abouts-show fade-in-out">
                <h1 className="title">
                    <FormattedMessage id="aboutUs.msg0" />
                </h1>
                <br/>
                <h3 className="content">
                    <FormattedMessage id="aboutUs.msg1" />
                </h3>
            </div>
        )
    }

    const pageContent = () => {
        return (
            <div className="fade-in">
                <div id="aboutus-item-0" className="aboutus-item odd-item">
                    <h1 className="aboutus-item-title">
                    <FormattedMessage id="aboutUs.msg2" />
                    &nbsp;
                    <FormattedMessage id="aboutUs.msg3" />
                    </h1>
                    <hr />
                    <img className="abouts-item-img" src={aboutUs_0} alt="" />
                    <div className="abouts-item-content">
                        <h3>
                        <FormattedMessage id="aboutUs.msg4" />
                        </h3>
                        <h2>
                        <FormattedMessage id="aboutUs.msg5" />
                        </h2>
                        <h3>
                        <FormattedMessage id="aboutUs.msg6" />
                        </h3>
                    </div>


                </div>
                <div id="aboutus-item-1" className="aboutus-item even-item">
                    <h1 className="aboutus-item-title">
                    <FormattedMessage id="aboutUs.msg7" />
                    </h1>
                    <hr />
                    <img className="abouts-item-img" src={aboutUs_1} alt="" />
                    <div className="abouts-item-content">
                        <h3>
                        <FormattedMessage id="aboutUs.msg8" />
                        <FormattedMessage id="aboutUs.msg9" />
                        </h3>
                        <h2>
                        <FormattedMessage id="aboutUs.msg10" />
                        </h2>
                        <h3>
                        <FormattedMessage id="aboutUs.msg11" />
                        <FormattedMessage id="aboutUs.msg12" />
                        </h3>
                    </div>

                </div>
                <div id="aboutus-item-2" className="aboutus-item odd-item">
                    <h1 className="aboutus-item-title">
                    <FormattedMessage id="aboutUs.msg13" />
                    </h1>
                    <hr />
                    <img className="abouts-item-img" src={aboutUs_2} alt="" />
                    <div className="abouts-item-content">
                        <h2>
                        <FormattedMessage id="aboutUs.msg14" />
                        </h2>
                        <h3>
                        <FormattedMessage id="aboutUs.msg15" />

                    </h3>
                    </div>

                </div>
            </div>
        )
    }


    useEffect(() => {
        detectorScroll();
        setTimeout(()=>{
            setAboutsShow(false);
        },2500)
    })
    return (
        <div className="aboutus-container">
            {aboutsShow ? firstLoad() : pageContent()}
        </div>
    )
}

export default AboutUs;