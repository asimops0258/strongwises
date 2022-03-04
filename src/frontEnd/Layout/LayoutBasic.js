import "./LayoutBasic.scss"
import { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import navLogo from "../images/head-logo.png";

//load react-icons
import { AiFillPhone } from "react-icons/ai";
import { FaFax, FaLocationArrow,FaLink} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"
import { GrClose ,GrLanguage} from "react-icons/gr";
import { MdEmail } from "react-icons/md";

//#region Load pages
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import SkillSupport from "../pages/SkillSupport";
import Report from "../pages/Report";
import QandA from "../pages/SkillSupport_page/QandA";
import Test_Report from "../pages/SkillSupport_page/Test_Report";
import Installation_Notes from "../pages/SkillSupport_page/Installation_Notes";


//產品介紹
import ProductHome from "../pages/Products/ProductHome";
import Linoleum from "../pages/Products/Outfloor/Linoleum";
import OutfloorHome from "../pages/Products/Outfloor/OutfloorHome";
import SingleMaterial from "../pages/Products/SingleMaterial/SingleMaterial";
import LinoleumLite from "../pages/Products/Outfloor/LinoleumLite";
import Wpc from "../pages/Products/Outfloor/Wpc";
import Linoleum_Indoor from "../pages/Products/Linoleum/Linoleum_Indoor";

import { ActualCase, ImageLibrary } from "../pages/ActualCase.js";

////#endregion


const LayoutBasic = ({ setLocale }) => {
  const [collapse, setCollapse] = useState();
  const [aboutsShow,setAboutsShow] = useState(true);

  const acceptLanguage = [
    {
      language: "en",
      name: "English"
    },
    {
      language: "zh-CN",
      name: "简体中文"
    },
    {
      language: "zh-TW",
      name: "繁體中文"
    }
  ]

  const screenResize = ()=>{
    if (screen.width < 1048){
    }else  if (screen.width > 1048 && screen.width < 1280){

    }else if (screen.width > 1280){
        setCollapse(false);
        document.getElementsByClassName("menu-collapse")[0].checked = false;
    }
  }


  const changeCollapseStyle = () => {
    if(document.getElementsByClassName("menu-collapse")[0].checked)
    {
      setCollapse(false);
      document.getElementsByClassName("menu-collapse")[0].checked = false;
    }else{
      setCollapse(true);
      document.getElementsByClassName("menu-collapse")[0].checked = true;
    }
  }

  const languageOnChanged = (event) => {
    setLocale(event.target.value);
    localStorage.setItem("language", event.target.value);
  }

  const items = [
    {
      name: <FormattedMessage id="home" />,
      path: "/",
    },
    {
      name: <FormattedMessage id="aboutUs" />,
      path: "/aboutUs",
    },
    {
      name: <FormattedMessage id="productIntor" />,
      path: "/productHome",
    },
    {
      name: <FormattedMessage id="skillSupport" />,
      path: "/skillSupport",
    },
    {
      name: <FormattedMessage id="actualCase" />,
      path: "/actualCase",
    },
    {
      name: <FormattedMessage id="report" />,
      path: "/report",
    },
  ];

  const leftFooter = [
    {
      name: <FormattedMessage id="phone" />,
      icon: <AiFillPhone />,
      content: "+886(2)8751-6466"
    },
    {
      name: <FormattedMessage id="fax" />,
      icon: <FaFax />,
      content: "+886(2)8751-3066"
    },
    {
      name: <FormattedMessage id="address" />,
      icon: <FaLocationArrow />,
      content: <FormattedMessage id="currentAddress" />
    },
    {
      name: <FormattedMessage id="email" />,
      icon: <MdEmail />,
      content: "sales@strongwises.com"
    }
  ];

  useEffect(()=>{
    window.addEventListener('resize', screenResize);
  })

  return (
    <div className="layout-basic-container">
      <div
        className="menu-mask"
        style={{ "display": collapse ? "block" : "none" }}
        onClick={() => {
          changeCollapseStyle()
        }}
      >
      </div>
      <div className="nav-bar-section">
        <Link to="/">
          <img className="nav-log-img" src={navLogo} alt="" />
        </Link>
        <a className="menu-collapse-icon">
          {collapse ? <GrClose></GrClose> : <GiHamburgerMenu></GiHamburgerMenu>}
        </a>
        <input className="menu-collapse"
          type="checkbox"
          onClick={(e) => { setCollapse(e.target.checked) }}
        />
        <ul className="menu">
          {
            items.map((item) => {
              return (
                <li>
                  <Link
                    to={item.path}
                    className="menu-item"
                    onClick={() => {
                      changeCollapseStyle()
                    }}>
                    {item.name}
                  </Link>
                </li>
              )
            })
          }
          <li className="language-section">
            <span className="language-icon"><GrLanguage></GrLanguage></span>
            <select className="language-select" onChange={languageOnChanged}>
              {
                acceptLanguage.map((item) => <option selected={item.language === localStorage.getItem("language")} value={item.language}>{item.name}</option>)
              }
            </select>
          </li>
        </ul>
      </div>
      <div className="nav-bar-margin">
      </div>
      <div className="main-section">
        {/* //#region Set router */}
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutUs" component={()=> <AboutUs aboutsShow={aboutsShow} setAboutsShow={setAboutsShow}/>} />
        <Route exact path="/skillSupport" component={SkillSupport} />
        <Route exact path="/report" component={Report}/>
        <Route exact path="/actualCase" component={ActualCase} />
        <Route exact path="/actualCase/imageLibrary" component={ImageLibrary}/>

        <Route exact path="/productHome" component={ProductHome}/>
        <Route exact path="/outfloor/linoleum" component={Linoleum}/>
        <Route exact path="/outfloor/outfloorhome" component={OutfloorHome}/>
        <Route exact path="/outfloor/linoleumLite" component={LinoleumLite} />
        <Route exact path="/outfloor/wpc" component={Wpc} />
        <Route exact path="/singleMaterial" component={SingleMaterial} />
        <Route exact path="/linoleumIndoor" component={Linoleum_Indoor} />

        
        {/* ////#endregion Set router */}

        <Route exact path="/skillsupport_page/qanda" component={QandA}/>
        <Route exact path="/skillsupport_page/test_report" component={Test_Report}/>
        <Route exact path="/skillsupport_page/installation_notes" component={Installation_Notes}/>

        <Route exact path="/productHome/linoleum_indoor" component={Linoleum_Indoor}/>
      </div>
      <div className="footer-bar-section">
        <div className="left-footer-section">
          {/* <img className="footer-img" src={footerLogo} alt=""/> */}
          <ul>
            {
              leftFooter.map(({ name, icon, content }) => (
                <li>{icon}&nbsp;&nbsp;{name}&nbsp;:&nbsp;{content}</li>
              ))
            }
          </ul>
        </div>
        <div class="right-footer-section">
          <ul>
            {
              items.map((item) => {
                return (
                  <li>
                    <Link
                      to={item.path}
                      onClick={() => {
                        changeCollapseStyle()
                      }}>
                      {item.name}
                      <FaLink class="footer-link"></FaLink>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
      <div className="copyright">
        <FormattedMessage id="copyright" />
      </div>
    </div>
  )
}

export default LayoutBasic;