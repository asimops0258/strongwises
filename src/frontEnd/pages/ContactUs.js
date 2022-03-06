import "./ContactUs.scss"
import { FormattedMessage, useIntl } from "react-intl";

const ContactUs = () => {
    const intl = useIntl()
    return ( 
        <div className="ContactUs-container">
            <div className="ContactUs-item-1">
                <div className="title-content-down">
                    <div className="title-content-right">
                        <img src={intl.formatMessage({ id: 'productHome.linoleumIndoor.img0' })}></img>
                    </div>
                    <div className="title-content-left">
                        <img src={intl.formatMessage({ id: 'productHome.linoleumIndoor.img1' })}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactUs;