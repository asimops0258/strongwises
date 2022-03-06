import "./Test_Report.scss"
import Card from  "./Card";
import {Link} from "react-router-dom";
import { FormattedMessage } from "react-intl";

const Test_Report = ()=>{
    const item = [
        {
            link:"/outfloor/linoleum",
            image:"/images/Products/OutdoorFloor/ClothingFiber.jpg",
            title:<FormattedMessage id="Test_Report.content_7" />,
            subTitle:"",
            subTitleClass:"",
        },
        {
            link:"/outfloor/linoleumLite",
            image:"/images/Products/OutdoorFloor/ClothingFiberLite.jpeg",
            title:<FormattedMessage id="Test_Report.content_8" />,
            subTitle:"",
            subTitleClass:"",

        },
        {
            link:"/outfloor/wpc",
            image:"/images/Products/OutdoorFloor/WPCSecondGenerationPlasticWoodImprovedVersion.jpg",
            title:<FormattedMessage id="Test_Report.content_1" />,
            subTitle:"",
            subTitleClass:""
        },
        {
            link:"/outfloor/wpc",
            image:"/images/Products/OutdoorFloor/WPCSecondGenerationPlasticWoodImprovedVersion.jpg",
            title:<FormattedMessage id="Test_Report.content_2" />,
            subTitle:"",
            subTitleClass:""
        }
        ,
        {
            link:"/outfloor/wpc",
            image:"/images/Products/OutdoorFloor/WPCSecondGenerationPlasticWoodImprovedVersion.jpg",
            title:<FormattedMessage id="Test_Report.content_4" />,
            subTitle:"",
            subTitleClass:""
        }
        ,
        {
            link:"/outfloor/wpc",
            image:"/images/Products/OutdoorFloor/WPCSecondGenerationPlasticWoodImprovedVersion.jpg",
            title:<FormattedMessage id="Test_Report.content_5" />,
            subTitle:"",
            subTitleClass:""
        }
        ,
        {
            link:"/outfloor/wpc",
            image:"/images/Products/OutdoorFloor/WPCSecondGenerationPlasticWoodImprovedVersion.jpg",
            title:<FormattedMessage id="Test_Report.content_6" />,
            subTitle:"",
            subTitleClass:""
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