import { Link } from "react-router-dom";
import { FormattedMessage , useIntl} from "react-intl";
import "./QandA.scss";
console.log(localStorage.getItem("language"));
const QandA = () => {
    const intl = useIntl()
    const image=intl.formatMessage({ id: 'QandA.image' });
    return ( 
        <div className="QamdA-container">

            <div className="QamdA-item-img"
             style={{"backgroundImage":`url(${image})`}}
            >
                    
            </div>
            <div className="QamdA-item-dwon">
                <div className="QamdA-item-title">
                    <h3><FormattedMessage id="QandA.title_1" /></h3>
                </div>
                <div className="QamdA-item-content">
                    <h4>
                    <FormattedMessage id="QandA.content_1" /><br></br>
                    <FormattedMessage id="QandA.content_2" />
                        <Link to='/skillsupport_page/test_report'><FormattedMessage id="QandA.Link" /></Link>
                    </h4>
                </div>
                <div className="QamdA-item-title">
                    <h3><FormattedMessage id="QandA.title_2" /></h3>
                </div>
                <div className="QamdA-item-content">
                    <h4>
                    <FormattedMessage id="QandA.content_3" /><br></br>
                    <FormattedMessage id="QandA.content_4" /><br></br>
                    <FormattedMessage id="QandA.content_5" />
                    </h4>
                </div>
                <div className="QamdA-item-title">
                    <h3><FormattedMessage id="QandA.title_3" /></h3>
                </div>
                <div className="QamdA-item-content">
                    <h4>
                    <FormattedMessage id="QandA.content_6" /><br></br>
                    <FormattedMessage id="QandA.content_7" />

                    </h4>
                </div>
                <div className="QamdA-item-title">
                    <h3><FormattedMessage id="QandA.title_4" /></h3>
                </div>
                <div className="QamdA-item-content">
                    <h4>
                    <FormattedMessage id="QandA.content_8" /><br></br>
                    <FormattedMessage id="QandA.content_9" />
                    </h4>
                </div>
                <div className="QamdA-item-title">
                    <h3><FormattedMessage id="QandA.title_5" /></h3>
                </div>
                <div className="QamdA-item-content">
                    <h4>
                    <FormattedMessage id="QandA.content_10" />
                    </h4>
                </div>
                
                <div className="QamdA-item-title">
                    <h3><FormattedMessage id="QandA.title_6" /></h3>
                </div>
                <div className="QamdA-item-content">
                    <h4>
                    <FormattedMessage id="QandA.content_11" />
                    </h4>
                </div>

                <div className="QamdA-item-title">
                    <h3><FormattedMessage id="QandA.title_7" /></h3>
                </div>
                <div className="QamdA-item-content">
                    <h4>
                    <FormattedMessage id="QandA.content_12" />
                    </h4>
                </div>

                <div className="QamdA-item-title">
                    <h3><FormattedMessage id="QandA.title_8" /></h3>
                </div>
                <div className="QamdA-item-content">
                    <h4>
                    <FormattedMessage id="QandA.content_13" /><br></br>
                    <FormattedMessage id="QandA.content_14" /><br></br>
                    <FormattedMessage id="QandA.content_15" /><br></br>
                    </h4>
                </div>

                <div className="QamdA-item-title">
                    <h3><FormattedMessage id="QandA.title_9" /></h3>
                </div>
                <div className="QamdA-item-content">
                    <h4>
                    <FormattedMessage id="QandA.content_16" /><br></br>
                    <FormattedMessage id="QandA.content_17" /><br></br>
                    <FormattedMessage id="QandA.content_18" /><br></br>
                    </h4>
                </div>

                <div className="QamdA-item-title">
                    <h3><FormattedMessage id="QandA.title_10" /></h3>
                </div>
                <div className="QamdA-item-content">
                    <h4>
                    <FormattedMessage id="QandA.content_19" />
                    </h4>
                </div>

                </div>
                
        </div>
        )
}

export default QandA;