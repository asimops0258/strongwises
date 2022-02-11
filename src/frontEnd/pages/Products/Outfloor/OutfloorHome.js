import "./OutfloorHome.scss"
import Card from  "./../../../modules/Card";
import {Link} from "react-router-dom";
import { FormattedMessage } from "react-intl";

const OutfloorHome = ()=>{
    const item = [
        {
            link:"/outfloor/linoleum",
            image:"/images/Products/OutdoorFloor/WPCSecondGenerationPlasticWoodImprovedVersion.jpg",
            title:<FormattedMessage id="productHome.outfloorHome.msg0" />,
            subTitle:"",
            subTitleClass:"",
        },
        {
            link:"/outfloor/linoleumLite",
            image:"/images/Products/OutdoorFloor/ClothingFiberLite.jpeg",
            title:<FormattedMessage id="productHome.outfloorHome.msg1" />,
            subTitle:<FormattedMessage id="productHome.outfloorHome.msg2" />,
            subTitleClass:"rainbow-title",

        },
        {
            link:"/outfloor/wpc",
            image:"/images/Products/OutdoorFloor/ClothingFiber.jpg",
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

export default OutfloorHome;