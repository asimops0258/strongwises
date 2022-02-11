import "./Linoleum_Indoor.scss"
import { FormattedMessage, useIntl } from "react-intl";

const Linoleum_Indoor = () => {
    const intl = useIntl()
    return ( 
        <div className="linoleum_indoor-container">
            <div className="linoleum_indoor-item-1">
                <div className="title-content">
                    <h1 className="title-font-black font-dark-green">
                        <FormattedMessage id="productHome.linoleumIndoor.msg0" />
                    </h1>
                    <h2 className="title-2">
                    <FormattedMessage id="productHome.linoleumIndoor.msg1" />
                    </h2>
                </div>
            </div>
            <div className="linoleum_indoor-item-2">
                <div className="title-content-up">
                    <h1 className="title-font-black font-dark-green">
                    <FormattedMessage id="productHome.linoleumIndoor.msg2" />
                    </h1>
                </div>
                <div className="title-content-down">
                    <div className="title-content-right">
                        <img src={intl.formatMessage({ id: 'productHome.linoleumIndoor.img0' })}></img>
                    </div>
                    <div className="title-content-left">
                        <img src={intl.formatMessage({ id: 'productHome.linoleumIndoor.img1' })}></img>
                    </div>
                </div>
            </div>
            <div className="linoleum_indoor-item-3">
                <dic className="title-content">
                    <h1 className="title-font-black font-dark-green">
                    <FormattedMessage id="productHome.linoleumIndoor.msg3" />
                    </h1>
                    <h3 className="linoleum_indoor-title-content-3">
                    <FormattedMessage id="productHome.linoleumIndoor.msg4" />
                    </h3>
                </dic>
            </div>
            <div className="linoleum_indoor-item-4">
                <div className="linoleum_indoor-title-content-up">
                    <img src={"/images/Products/Linoleum/footer.png"}></img>
                </div>
                <dic className="title-content">
                    <h1 className="title-font-black font-dark-green">
                    <FormattedMessage id="productHome.linoleumIndoor.msg5" />
                    </h1>
                </dic>
            </div>
            
        </div>
    )
}
export default Linoleum_Indoor;