import "./LinoleumLite.scss";
import { BsCaretDownFill } from "react-icons/bs";
import { FormattedMessage } from "react-intl";

const LinoleumLite = () => {
    return (
        <div className="linoleum-lite-container">
            <div className="linoleum-section-0">
                <div>
                    <h1 className="middle-title font-black">
                    <FormattedMessage id="productHome.outfloorHome.linoleumLite.msg0" />
                    </h1>
                    <h1 className="large-title font-light-green">
                    <FormattedMessage id="productHome.outfloorHome.linoleumLite.msg1" />
                    </h1>
                    <div className="content">
                        <img src={"/images/Products/OutdoorFloor/LinoleumLite/Lightweight.png"} alt="" />
                    </div>
                </div>
            </div>
            <div className=" linoleum-section-1">
                <div className="content">
                    <div className="left">
                        <div className="title">
                            <h1 className="large-title font-black">
                                <BsCaretDownFill></BsCaretDownFill>
                                <FormattedMessage id="productHome.outfloorHome.linoleumLite.msg2" />
                                </h1>
                            <h2 className="middle-content">
                            <FormattedMessage id="productHome.outfloorHome.linoleumLite.msg3" />
                            </h2>
                        </div>
                        <img src={"/images/Products/OutdoorFloor/LinoleumLite/Color.png"} alt="" />
                    </div>
                    <div className="right">
                        <h1 className="large-title font-black">
                        <FormattedMessage id="productHome.outfloorHome.linoleumLite.msg4" />
                        </h1>
                        <div className="descript">

                            <h4 className="middle-content">
                            <FormattedMessage id="productHome.outfloorHome.linoleumLite.msg5" />
                            </h4>
                            <h4 className="middle-content">
                            <FormattedMessage id="productHome.outfloorHome.linoleumLite.msg6" />
                            </h4>
                            <h4 className="middle-content">
                            <FormattedMessage id="productHome.outfloorHome.linoleumLite.msg7" />
                            </h4>
                            <img src={"/images/Products/OutdoorFloor/LinoleumLite/Color.png"} alt="" />

                        </div>
                    </div>
                </div>
            </div>

            <div className="linoleum-section-2">
                <div >
                    <h1 className="large-title font-gray">
                    <FormattedMessage id="productHome.outfloorHome.linoleumLite.msg8" />
                    </h1>
                    <h3 className="middle-title font-black">
                    <FormattedMessage id="productHome.outfloorHome.linoleumLite.msg9" />
                    </h3>
                    <h3 className="middle-title font-black">
                    <FormattedMessage id="productHome.outfloorHome.linoleumLite.msg10" />
                    </h3>
                    <h3 className="middle-title font-black">
                    <FormattedMessage id="productHome.outfloorHome.linoleumLite.msg11" />
                    </h3>
                </div>
            </div>

            <div className="linoleum-section-3">
                <div>
                    <div className="left">
                        <h1 className="large-title font-dark-green">
                        <FormattedMessage id="productHome.outfloorHome.linoleumLite.msg12" />
                        </h1>
                    </div>
                    <div className="right">
                    <img src={"/images/Products/OutdoorFloor/Linoleum/Cut.png"} alt="" />
                            <img src={"/images/Products/OutdoorFloor/Linoleum/Nailing.png"} alt="" />
                            <img src={"/images/Products/OutdoorFloor/Linoleum/Drilling.png"} alt="" />
                            <img src={"/images/Products/OutdoorFloor/Linoleum/TightenTheScrews.png"} alt="" />
                        <h1 className="large-title font-dark-green">
                        <FormattedMessage id="productHome.outfloorHome.linoleumLite.msg13" />
                        </h1>
                    </div>
                </div>

            </div>

            <div className="linoleum-section-4">
                <div>
                    <h1 className="large-title font-black">
                    <FormattedMessage id="productHome.outfloorHome.linoleumLite.msg14" />
                    </h1>
                    <div className="content">

                        <div className="right">
                            <h3 className="middle-content font-gray">
                            <FormattedMessage id="productHome.outfloorHome.linoleumLite.msg15" />
                            </h3>
                        </div>
                        <div className="left">
                            <img src={"/images/Products/OutdoorFloor/LinoleumLite/TenYearsLater.png"} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LinoleumLite;