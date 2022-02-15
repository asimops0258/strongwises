import "./Test_Report.scss"
import Card from  "./Card";
import {Link} from "react-router-dom";
import { FormattedMessage } from "react-intl";

const Test_Report = ()=>{
    const item = [
        {
            link:"skillsupport_page/test_report/linoleum",
            image:"/images/Products/OutdoorFloor/ClothingFiber.jpg",
            title:<FormattedMessage id="productHome.outfloorHome.msg0" />,
            subTitle:"",
            subTitleClass:"",
        },
        {
            link:"skillsupport_page/test_report/linoleumLite",
            image:"/images/Products/OutdoorFloor/ClothingFiberLite.jpeg",
            title:<FormattedMessage id="productHome.outfloorHome.msg1" />,
            subTitle:<FormattedMessage id="productHome.outfloorHome.msg2" />,
            subTitleClass:"rainbow-title",

        },
        {
            link:"skillsupport_page/test_report/wpc",
            image:"/images/Products/OutdoorFloor/WPCSecondGenerationPlasticWoodImprovedVersion.jpg",
            title:<FormattedMessage id="productHome.outfloorHome.msg3" />,
            subTitle:<FormattedMessage id="productHome.outfloorHome.msg4" />,
            subTitleClass:"green-title"
        }
    ]

    return (
        <div className="out-floor-home-container">
            {item.map((data)=>{
                return(
                    <Link to={data.link}>
                        <Card
                            image={data.image}
                            title={data.title}
                            subTitle={data.subTitle}
                            subTitleClass={data.subTitleClass}
                        >
                        </Card>
                    </Link>
                )
            })}
        </div>
    )
}

export default Test_Report;