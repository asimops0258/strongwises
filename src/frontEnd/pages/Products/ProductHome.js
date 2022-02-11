import "./ProductHome.scss";
import {Link} from "react-router-dom";
import Card from "./../../modules/Card";
import { FormattedMessage } from "react-intl";

const ProductsHome = ()=>{
    const item = [
        {
            link:"/outfloor/outfloorhome",
            image:"images/Products/OutdoorFloor/Linoleum/OutdoorFloor.png",
            title:<FormattedMessage id="productHome.msg0" />,

        },
        {
            link:"/linoleumIndoor",
            image:"images/Products/OutdoorFloor/Linoleum/ClothingFiberWoodBoard.png",
            title:<FormattedMessage id="productHome.msg1" />
        },
        {
            link:"/SingleMaterial",
            image:"images/Products/OutdoorFloor/Linoleum/SingleMaterial.png",
            title:<FormattedMessage id="productHome.msg2" />
        }
    ]

    return (
        <div className="product-home-container">
            {item.map((data)=>{
                return(
                    <Link to={data.link}>
                        <Card
                            image={data.image}
                            title={data.title}>
                        </Card>
                    </Link>
                )
            })}
        </div>
    )
}

export default ProductsHome;