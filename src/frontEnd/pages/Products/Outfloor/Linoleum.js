
import "./Linoleum.scss";
import Scrolled from "./../../../modules/Scrolled";
import { FormattedMessage } from "react-intl";

const Linoleum = () => {
    return (
        <Scrolled>
            <div className="linoleum-container">
                <div className="linoleum-section-0">
                    <div>
                        <h1 className="middle-title font-black">
                            <FormattedMessage id="productHome.outfloorHome.linoleum.msg0" />
                        </h1>
                        <h1 className="large-title font-light-green">
                            <FormattedMessage id="productHome.outfloorHome.linoleum.msg1" />
                        </h1>
                        <div className="content">
                            <img src={"/images/Products/OutdoorFloor/Linoleum/GrandIntroduction.png"} alt="" />
                        </div>
                    </div>
                </div>
                <div className="linoleum-section-1">
                    <div className="content">
                        <h1 className="large-title font-light-green">
                            <FormattedMessage id="productHome.outfloorHome.linoleum.msg2" />
                        </h1>
                        <div className="left">
                            <img src={"/images/Products/OutdoorFloor/Linoleum/EnvironmentallyVisible.png"} alt="" />
                        </div>
                        <div className="right">
                            <div className="descript">
                                <h4 className="middle-content">
                                <FormattedMessage id="productHome.outfloorHome.linoleum.msg3" />
                                </h4>
                                <h4 className="middle-content">
                                <FormattedMessage id="productHome.outfloorHome.linoleum.msg4" />
                                </h4>
                                <h4 className="middle-content">
                                <FormattedMessage id="productHome.outfloorHome.linoleum.msg5" />
                                </h4>
                                <h4 className="middle-content">
                                <FormattedMessage id="productHome.outfloorHome.linoleum.msg6" />
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="linoleum-section-2">
                    <div>
                        <h1 className="large-title font-black">
                        <FormattedMessage id="productHome.outfloorHome.linoleum.msg7" />
                        </h1>
                        <h3 className="middle-title font-black">
                        <FormattedMessage id="productHome.outfloorHome.linoleum.msg8" />
                        </h3>

                        <h1 className="large-title font-black">
                        <FormattedMessage id="productHome.outfloorHome.linoleum.msg9" />
                        </h1>
                        <h3 className="middle-title font-black">
                        <FormattedMessage id="productHome.outfloorHome.linoleum.msg10" />
                        </h3>

                        <h1 className="large-title font-black">
                        <FormattedMessage id="productHome.outfloorHome.linoleum.msg11" />
                        </h1>
                        <h3 className="middle-title font-black">
                        <FormattedMessage id="productHome.outfloorHome.linoleum.msg12" />
                        </h3>
                    </div>
                </div>

                <div className="linoleum-section-3">
                    <div>
                        <div className="left">
                            <h1 className="large-title font-light-green">
                            <FormattedMessage id="productHome.outfloorHome.linoleum.msg13" />
                            </h1>
                            <h1 className="large-title font-light-green">
                            <FormattedMessage id="productHome.outfloorHome.linoleum.msg14" />
                            </h1>
                            <h1 className="large-title font-light-green">
                            <FormattedMessage id="productHome.outfloorHome.linoleum.msg15" />
                            </h1>
                        </div>
                        <div className="right">
                            <img src={"/images/Products/OutdoorFloor/Linoleum/Cut.png"} alt="" />
                            <img src={"/images/Products/OutdoorFloor/Linoleum/Nailing.png"} alt="" />
                            <img src={"/images/Products/OutdoorFloor/Linoleum/Drilling.png"} alt="" />
                            <img src={"/images/Products/OutdoorFloor/Linoleum/TightenTheScrews.png"} alt="" />
                        </div>
                    </div>

                </div>

                <div className="linoleum-section-4">
                    <div>
                        <h1 className="large-title font-light-green">
                        <FormattedMessage id="productHome.outfloorHome.linoleum.msg16" />
                        </h1>
                        <h1 className="large-title font-light-green">
                        <FormattedMessage id="productHome.outfloorHome.linoleum.msg17" />
                        </h1>

                        <div className="content">
                            <div className="left">
                                <img src={"/images/Products/OutdoorFloor/Linoleum/TenYearsLater.png"} alt="" />
                                <img src={"/images/Products/OutdoorFloor/Linoleum/TenYearsLater2.png"} alt="" />
                            </div>
                            <div className="right">
                                <div>
                                    <h3 className="middle-title font-light-green">
                                    <FormattedMessage id="productHome.outfloorHome.linoleum.msg18" />
                                    </h3>
                                    <h3 className="middle-title font-light-green">
                                    <FormattedMessage id="productHome.outfloorHome.linoleum.msg19" />
                                    </h3>
                                    <h3 className="middle-title font-light-green">
                                    <FormattedMessage id="productHome.outfloorHome.linoleum.msg20" />
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="linoleum-section-5">
                    <div>
                        <div className="left">
                            <h1 className="large-title font-black ">
                            <FormattedMessage id="productHome.outfloorHome.linoleum.msg21" />
                            </h1>
                        </div>
                        <div className="right">
                            <div>
                                <h3 className="font-black ">
                                <FormattedMessage id="productHome.outfloorHome.linoleum.msg22" />
                                </h3>
                                <h3 className="font-black ">
                                <FormattedMessage id="productHome.outfloorHome.linoleum.msg23" />
                                </h3>
                            </div>
                            <div>
                                <h3 className="font-black">
                                <FormattedMessage id="productHome.outfloorHome.linoleum.msg24" />
                                </h3>
                                <h3 className="font-black">
                                <FormattedMessage id="productHome.outfloorHome.linoleum.msg25" />
                                </h3>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </Scrolled>
    )
}

export default Linoleum;