import "./Card1.scss";

// 顯示圖片的模組
// mode == img-library 圖片周圍會加上border
// title 會放置在圖片下方,title沒有值則不顯示
function Card({ image, title, subTitle, subTitleClass, mode, onClick, style }) {

    const dispatchMode = () => {
        let imageStye = {};
        switch (mode) {
            //單純的圖片顯示 不包含標題
            case "img-library":
                imageStye = {
                    padding: "5px",
                    border: "1px solid gray"
                };
                break;
            //包含圖片標題的圖片顯示
            default:
                imageStye = {};
                break;
        }
        return imageStye;
    };

    return (
        <div className="card-container" onClick={onClick} style={style}>
            <div>
                <img style={dispatchMode()} src={image} alt="" />
            </div>
            <div className="card-content" style={{ "display": title ? "flex" : "none" }}>
                <h2>{title}</h2>
                <h3 className={subTitleClass ? subTitleClass : ""} style={{ "display": subTitle ? "block" : "none" }}>{subTitle}</h3>
            </div>
        </div>
    );
}

export default Card;