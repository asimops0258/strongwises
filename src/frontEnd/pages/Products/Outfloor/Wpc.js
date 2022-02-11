import "./Wpc.scss"
import {Link} from "react-router-dom";
import { FormattedMessage } from "react-intl";

const Wpc = ()=>{
    return (
            <div className="wpc-container">
                <div className="wpc-section wpc-section-0">
                    <div>
                        <div className="title-section">
                            <h1 className="middle-title font-black">
                            <FormattedMessage id="productHome.outfloorHome.wpc.msg0" />
                            </h1>
                            <h1 className="large-title font-dark-green">
                            <FormattedMessage id="productHome.outfloorHome.wpc.msg1" />
                            </h1>
                        </div>
                        <div className="content-section">
                            <img src={"/images/Products/OutdoorFloor/Wpc/BigPictureOfTheSecondGenerationWood.png"} alt="" />
                        </div>
                    </div>
                </div>
                <div className="wpc-section wpc-section-1">
                    <div>
                        <div className="title-section">
                                <h1 className="large-title font-dark-green">
                                <FormattedMessage id="productHome.outfloorHome.wpc.msg2" />
                                </h1>
                                <h2 className="middle-content">
                                <FormattedMessage id="productHome.outfloorHome.wpc.msg3" />
                                </h2>
                                <h2 className="middle-content"> 
                                <FormattedMessage id="productHome.outfloorHome.wpc.msg4" />
                                </h2>
                                <h2 className="middle-content">
                                <FormattedMessage id="productHome.outfloorHome.wpc.msg5" />
                                </h2>
                                <img src={"/images/Products/OutdoorFloor/Wpc/SecondGenerationWoodPatentCortexMap.png"} alt="" />
                        </div>
                        <div className="content-section">
                                <h1 className="middle-title">
                                <FormattedMessage id="productHome.outfloorHome.wpc.msg6" />
                                </h1>
                                <h2 className="middle-content">
                                <FormattedMessage id="productHome.outfloorHome.wpc.msg7" />
                                </h2>
                                <h2 className="middle-content">
                                <FormattedMessage id="productHome.outfloorHome.wpc.msg8" />
                                </h2>
                                <h2 className="middle-content">
                                <FormattedMessage id="productHome.outfloorHome.wpc.msg9" />
                                </h2>
                        </div>
                    </div>
                </div>

                <div className="wpc-section wpc-section-2">
                    <div>
                        <div className="title-section">
                            <h1 className="large-title font-dark-green">
                            <FormattedMessage id="productHome.outfloorHome.wpc.msg10" />
                            </h1>
                        </div>
                        <div className="content-section">
                            <img src={"/images/Products/OutdoorFloor/Linoleum/Cut.png"} alt="" />
                            <img src={"/images/Products/OutdoorFloor/Linoleum/Nailing.png"} alt="" />
                            <img src={"/images/Products/OutdoorFloor/Linoleum/Drilling.png"} alt="" />
                            <img src={"/images/Products/OutdoorFloor/Linoleum/TightenTheScrews.png"} alt="" />
                            <h1 className="large-title font-dark-green">
                            <FormattedMessage id="productHome.outfloorHome.wpc.msg11" />!
                            </h1>
                        </div>

                    </div>
                </div>
                
                <div className="wpc-section wpc-section-3">
                    <div>
                        <div className="title-section">
                            <h1 className="large-title font-black">
                            <FormattedMessage id="productHome.outfloorHome.wpc.msg12" />
                            </h1>
                        </div>
                        <div className="content-section">
                            <div className="spec-icon">
                                <h3 className="font-black ">
                                <FormattedMessage id="productHome.outfloorHome.wpc.msg13" />
                                </h3>
                                <h3 className="font-black ">
                                <FormattedMessage id="productHome.outfloorHome.wpc.msg14" />
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wpc-section wpc-section-4">
                    <div>
                        <div className="title-section">
                            <h1 className="large-title font-dark-green">
                            <FormattedMessage id="productHome.outfloorHome.wpc.msg15" />
                            </h1>
                        </div>
                        <div className="content-section">
                            <Link to="/outfloor/linoleum">
                                <img src={"/images/Products/OutdoorFloor/Wpc/Linoleum.png"} alt="" />
                                <h2 className="middle-title font-dark-green">
                                <FormattedMessage id="productHome.outfloorHome.wpc.msg16" />
                                </h2>
                            </Link>
                            <Link to="/outfloor/linoleumLite">
                                <img src={"/images/Products/OutdoorFloor/Wpc/LinoleumLite.png"} alt="" />
                                <h2 className="middle-title font-dark-green">
                                <FormattedMessage id="productHome.outfloorHome.wpc.msg17" />
                                </h2>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Wpc;