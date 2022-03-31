import "./Report.scss";
import Card from "../modules/Card";
import ImageModal from "../modules/ImageModal";
import { FormattedMessage } from "react-intl";
import { useEffect, useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const Report = () => {
    //要顯示的圖片
    const [reportItem, setReportItem] = useState();
    //彈出視窗要顯示的照片
    const [modalImage, setModalImage] = useState("");
    //彈出視窗
    const [showModal, setShowModal] = useState(false);
    //目前選中的項目 新聞 獎項 活動
    const [selectedItem, setSelectedItem] = useState("news");

    //目前要呈現的頁面
    const [reportViewRoute, setReportViewRoute] = useState("/home");

    const [economicImages, setEconomicImages] = useState([]);
    const [sdgImages, setsdgImages] = useState([]);

    //被選中的活動
    const [selectedEvent,setSelectedEvent] = useState(
        {
            title:"",
            href:""
        }
    );

    const getAllEventsImage = () => {
        let economic = [], sdg = [];
        for (let i = 0; i < 17; i++) {
            economic.push(
                {
                    href: "",
                    type: "image",
                    image: `/images/Report/Events/2020economic/ec_${i}.jpg`,
                    title: "",
                }
            )
        }
        for (let i = 0; i < 26; i++) {
            sdg.push(
                {
                    href: "",
                    type: "image",
                    image: `/images/Report/Events/sdg/sdg-${i + 1}.jpg`,
                    title: "",
                }
            )
        }
        setEconomicImages(economic)
        setsdgImages(sdg)
    }


    //新聞
    const newsItems = [
        {
            href: "https://youtu.be/MRq-p6NsfmI",
            type: "link",
            image: "/images/Report/News/BigBossLeague.png",
            title: <FormattedMessage id="report.news.msg0" />
        },
/*         {
            href: "https://youtu.be/2TnS8n-W-KI",
            type: "link",
            image: "/images/Report/News/GoldfishBrain.png",
            title: <FormattedMessage id="report.news.msg1" />
        }, */
        {
            href: "https://youtu.be/7_aPPt6uOng",
            type: "link",
            image: "/images/Report/News/DisappearingBorders.png",
            title: <FormattedMessage id="report.news.msg2" />
        },
        {
            href: "https://youtu.be/6FLxI2ATT8Q",
            type: "link",
            image: "/images/Report/News/EntrepreneursPleaseGetInTheCar.png",
            title: <FormattedMessage id="report.news.msg3" />
        }
    ]

    //獎項
    const awardsItems = [
        {
            href: "#",
            type: "image",
            image: "/images/Report/Awards/YouthInnovationandEntrepreneurshipCompetition.png",
            title: <FormattedMessage id="report.awards.msg0" />
        },
        {
            href: "#",
            type: "image",
            image: "/images/Report/Awards/BusinessPlanCompetition.png",
            title: <FormattedMessage id="report.awards.msg1" />
        },
        {
            href: "#",
            type: "image",
            image: "/images/Report/Awards/XiongcaiDazhiMaterialTechnology-Sam.jpg",
            title: <FormattedMessage id="report.awards.msg2" />
        },
        {
            href: "#",
            type: "image",
            image: "/images/Report/Awards/FashionContest.png",
            title: <FormattedMessage id="report.awards.msg3" />
        },
        {
            href: "",
            type: "image",
            image: "/images/Report/Awards/FashionContest2.png",
            title: <FormattedMessage id="report.awards.msg4" />
        }
    ]

    //活動
    const eventItems = [
        {
            href: "/economic",
            type: "eventsLib",
            image: "/images/Report/Events/2020economic.png",
            title: <FormattedMessage id="report.events.msg0" />
        },
        {
            href: "/sdg",
            type: "eventsLib",
            image: "/images/Report/Events/sdg.png",
            title: <FormattedMessage id="report.events.msg1" />
        }
    ]

    //切換導航
    const selectItemBarInfo = [
        {
            itemName: "news",
            title: <FormattedMessage id="report.msg0" />,
            itemData: newsItems
        },
        {
            itemName: "awards",
            title: <FormattedMessage id="report.msg1" />,
            itemData: awardsItems
        },
        {
            itemName: "events",
            title: <FormattedMessage id="report.msg2" />,
            itemData: eventItems
        }
    ]


    //將圖片放大顯示
    const showImageModal = (src) => {
        setModalImage(src);
        setShowModal(true);
    }

    //切換要查看的主題內容
    const dispatchReportItem = (itemData, itemName) => {
        setReportItem(itemData);
        setSelectedItem(itemName);
    }



    //渲染活動的圖片集
    const renderEventsImagesLib = () => {

        let renderLib = [];

        switch (selectedEvent.href){
            case "/economic":
                renderLib = economicImages;
                break;
            case "/sdg":
                renderLib = sdgImages;
                break;
        }

        return (
            <div className="image-library-container">
                <div className="title-box">
                    <a onClick={() => {
                        setReportViewRoute("/home")
                    }}>
                        <FaArrowAltCircleLeft />&nbsp;<FormattedMessage id="previousPage" />
                    </a>
                    <h1 className="title">{selectedEvent.title}</h1>
                    <div></div>
                </div>
                <div className="card-box">
                    {
                        renderLib.map((data) => {
                            console.log(data.image)

                            return (
                                <a>
                                    <Card
                                        image={data.image}
                                        title={data.title}
                                        onClick={(e) => {
                                            if (data.type == "image") {
                                                showImageModal(data.image)
                                            }
                                        }}
                                    >
                                    </Card>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    const renderReportHome = () => {
        return (
            <>
                <div className="report-header">
                    <div className="report-route-bar">
                        {selectItemBarInfo.map((item) => {
                            return (<a
                                className={selectedItem === item.itemName ? "selected" : ""}
                                onClick={() => { dispatchReportItem(item.itemData, item.itemName) }}
                            >
                                {item.title}
                            </a>)
                        })}
                    </div>
                    <div className="report-content">
                        {reportItem ? reportItem.map((data) => {
                            return (

                                <a href={data.href}
                                    onClick={(e) => {
                                        if (data.type == "image") {
                                            e.preventDefault()
                                        }
                                        if (data.type == "eventsLib") {
                                            e.preventDefault()
                                            setSelectedEvent({
                                                title:data.title,
                                                href:data.href
                                            })
                                            setReportViewRoute("/eventsLib")
                                        }
                                    }}
                                >
                                    <Card
                                        image={data.image}
                                        title={data.title}
                                        onClick={(e) => {
                                            if (data.type == "image") {
                                                showImageModal(data.image)
                                            }
                                        }}
                                    >
                                    </Card>
                                </a>
                            )
                        }) : ""}
                    </div>

                </div>
            </>
        );
    }


    const dispatchView = () => {
        switch (reportViewRoute) {
            case "/home":
                return renderReportHome()
                break;
            case "/eventsLib":
                return renderEventsImagesLib()
                break;
        }
    }

    useEffect(() => {
        //預設顯示在新聞
        setReportItem(newsItems);
        getAllEventsImage()
    }, [])



    return (
        <div id="report-container" className="report-container">
            <ImageModal image={modalImage} modal={showModal} showModal={setShowModal} />
            {dispatchView()}
        </div>
    )
}


export default Report;