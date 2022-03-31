import "./Home.scss"
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import { useState ,useEffect} from "react";
console.log(localStorage.getItem("language"));

const Home = () => {
    const intl = useIntl()
    const [image1, setImage1] = useState();
    const [image2, setImage2] = useState();
    const [image3, setImage3] = useState();

    const listenWidth = () => {
        if (document.body.clientWidth > 960) {
            setImage1(intl.formatMessage({ id: 'home.carousel-light1' }));
            setImage2(intl.formatMessage({ id: 'home.carousel-light2' }));
            setImage3(intl.formatMessage({ id: 'home.carousel-light3' }));
        } else {
            setImage1(intl.formatMessage({ id: 'home.carousel-light1_RWD' }));
            setImage2(intl.formatMessage({ id: 'home.carousel-light2_RWD' }));
            setImage3(intl.formatMessage({ id: 'home.carousel-light3_RWD' }));
        }
    }

    useEffect(() => {
        listenWidth()
        window.addEventListener("resize", listenWidth);
    }, [intl.locale])

    return (
        <div className="home-container">

            <div className="home-item-upside">
                <div className="home-item-title">
                </div>
                <Carousel autoplay>
                    <Link to="/aboutUs">
                        <div className="home-item-Carousel_1">
                            <img src={image1} alt="Carousel-photo-1"></img >
                        </div>
                    </Link>
                    <Link to="/productHome">
                        <div className="home-item-Carousel_2">
                            <img src={image2} alt="Carousel-photo-2"></img>
                        </div>
                    </Link>
                    <Link to="/actualCase">
                        <div className="home-item-Carousel_3">
                            <img src={image3} alt="Carousel-photo-3"></img>
                        </div>
                    </Link>
                </Carousel>
                <div className="home-item-content">

                </div>
            </div>

            <div className="home-item-down">
                <div className="home-item-left">
                    <div className="home-item-title">

                    </div>
                    <div className="home-item-img">
                        <Link to="/">
                            <img src={intl.formatMessage({ id: 'home.carousel-left' })} alt="To contactUs"></img>
                        </Link>
                    </div>
                    <div className="home-item-content">

                    </div>
                </div>

                <div className="home-item-right">
                    <div className="home-item-title">

                    </div>
                    <div className="home-item-img">
                        <Link to="/Report">
                            <img src={intl.formatMessage({ id: 'home.carousel-right' })} alt="home-right-photo"></img>
                        </Link>
                    </div>
                    <div className="home-item-content">

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home;