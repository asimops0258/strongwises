import "./SkillSupport.scss";
import dwon_icon_1 from "../images/skillsupport/icon_1.png";
import dwon_icon_2 from "../images/skillsupport/icon_2.png";
import dwon_icon_3 from "../images/skillsupport/icon_3.png";
import { FormattedMessage , useIntl} from "react-intl";
import {Link} from "react-router-dom";
const SkillSupport = () => {
    const intl = useIntl()
    const image=intl.formatMessage({ id: 'SkillSupport.image' });
    return ( 
        <div className="skillsupport-container">
            <div className="skillsupport-item-upside" 
            style={{"backgroundImage":`url(${image})`}}>
                <div className="skillsupport-item-title">

                </div>
                <div className="skillsupport-item-img">
        
                </div>
                <div className="skillsupport-item-content">
                
                </div>
            </div>
            <div className="skillsupport-item-dwon">
                <div className="skillsupport-item-title">

                </div>
                <div className="skillsupport-item-dwon-img">
                    <div>
                        <Link to="/skillsupport_page/qanda"><img className="skillsupport-item-icon" src={dwon_icon_1} alt="ask-icon"></img></Link>
                        <div className="skillsupport-item-title"><FormattedMessage id="SkillSupport.qanda" /></div>
                    </div>
                    <div>
                        <Link to="/skillsupport_page/installation_notes"><img className="skillsupport-item-icon" src={dwon_icon_2} alt="installation-icon"></img></Link>
                        <div className="skillsupport-item-title"><FormattedMessage id="SkillSupport.installation_notes" /></div>
                    </div>
                    <div>
                        <Link to="/skillsupport_page/test_report"><img className="skillsupport-item-icon" src={dwon_icon_3} alt="product-icon"></img></Link>
                        <div className="skillsupport-item-title"><FormattedMessage id="SkillSupport.test_report" /></div>
                    </div>
                </div>
                <div className="skillsupport-item-content">
                
                </div>
            </div>
        </div>
    )
}

export default SkillSupport;