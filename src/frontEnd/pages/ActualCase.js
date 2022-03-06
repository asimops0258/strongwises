import "./ActualCase.scss";
import axios from 'axios';
import queryString from 'query-string';
import { useEffect, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Card from "./../modules/Card";
import ImageModal from '../modules/ImageModal';

// const baseURL = (process.env.REACT_APP_BACK_END || window.location.protocol + '//' + window.location.hostname + ":8080")
// const actualCaseApi = baseURL + "/actualcase/imagelibrary";

const ActualCase = () => {
  const [modal, showModal] = useState(false);
  const [image, setImage] = useState();
  const [currentPage, setCurrentPage] = useState("0");
  const [data, setData] = useState();

  const pages = [
    {
      name: <FormattedMessage id="actualCase.outdoorFloor" />,
      folderName: "戶外地板",
      imagePath: "images/actualcase/Outfloor/",
      sub: ["大檜溪公園改造案", "汐止天臺"],
      length: [9, 15]
    },
    {
      name: <FormattedMessage id="actualCase.creativeIndustries" />,
      folderName: "文創商品",
      imagePath: "images/actualcase/Product/",
      sub: ["衣纖木文創商品"],
      length: []
    },
    {
      name: <FormattedMessage id="actualCase.companyCSR" />,
      folderName: "企業CSR",
      imagePath: "images/actualcase/CSR/",
      sub: ["7-11環保杯袋裝案", "新光草莓園農場地板案", "歐德傢俱林口咖啡廳頂樓地板案"],
      length: [19, 13, 44]
    },
    {
      name: <FormattedMessage id="actualCase.installationArt" />,
      folderName: "裝置藝術",
      imagePath: "images/actualcase/Art/",
      sub: ["海大裝置藝術案"],
      length: [16]
    },
    {
      name: <FormattedMessage id="actualCase.tianjin" />,
      folderName: "天津展",
      imagePath: "images/actualcase/Tianjin/",
      sub: ["天津展"],
      length: [8]
    }
  ]

  const changePage = (event) => {
    setCurrentPage(event.target.dataset.i)
  }
  const showImageModal = (event) => {
    setImage(event.target.src)
    showModal(true);
  }
  const show = (page, data) => {
    let r = [];
    for (let i = 1; i <= 12; i++) {
      r.push(
        <Card
          image={page.imagePath + data + `/${i}.jpg`}
          mode={"img-library"}
          onClick={showImageModal}
          style={{ cursor: 'zoom-in' }}
        >
        </Card>
      )
    }
    return r;
  }
  return (
    <div className="actual-case-container">
      <div className="page-box">
        <ul>
          {
            pages.map((page, index) => (
              <li>
                <a
                  className={currentPage === index.toString() ? "selected" : ""}
                  onClick={changePage}
                  data-i={index}>{page.name}
                </a>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="card-box">
        {
          pages.map((page, index) => {
            if (currentPage === index.toString()) {
              return page.sub.map((d, i) => {
                if (page.folderName !== '文創商品') {
                  return (
                    <Link className="card" to={`/actualCase/imageLibrary?i=${index}&case=${i + 1}&length=${page.length[i]}`}>
                      <Card
                        image={page.imagePath + (i + 1) + ".png"}
                        title={d}
                      >
                      </Card>
                    </Link>
                  )
                } else {
                  return (
                    <div className="image-library-container">
                      <div className="card-box">
                        {show(page, 1)}
                      </div>
                    </div>
                  )
                }
              }
              )
            }
          })
        }
      </div>
      <ImageModal image={image} modal={modal} showModal={showModal} />
    </div>
  )
}

const ImageLibrary = () => {
  const [modal, showModal] = useState(false);
  const [image, setImage] = useState();
  const query = queryString.parse(useLocation().search);

  const pages = [
    {
      name: <FormattedMessage id="actualCase.outdoorFloor" />,
      folderName: "戶外地板",
      imagePath: "images/actualcase/Outfloor/",
      sub: ["大檜溪公園改造案", "汐止天臺"],
      length: [9, 15]
    },
    {
      name: <FormattedMessage id="actualCase.creativeIndustries" />,
      folderName: "文創商品",
      imagePath: "images/actualcase/Product/",
      sub: ["衣纖木文創商品"],
      length: []
    },
    {
      name: <FormattedMessage id="actualCase.companyCSR" />,
      folderName: "企業CSR",
      imagePath: "images/actualcase/CSR/",
      sub: ["7-11環保杯袋裝案", "新光草莓園農場地板案", "歐德傢俱林口咖啡廳頂樓地板案"],
      length: [19, 13, 44]
    },
    {
      name: <FormattedMessage id="actualCase.installationArt" />,
      folderName: "裝置藝術",
      imagePath: "images/actualcase/Art/",
      sub: ["海大裝置藝術案"],
      length: [16]
    },
    {
      name: <FormattedMessage id="actualCase.tianjin" />,
      folderName: "天津展",
      imagePath: "images/actualcase/Tianjin/",
      sub: ["天津展"],
      length: [8]
    }
  ]

  const showImageModal = (event) => {
    setImage(event.target.src)
    showModal(true);
  }

  const show = () => {
    let r = [];
    for (let i = 1; i <= query.length; i++) {
      r.push(
        <Card
          image={pages[query.i].imagePath + `${query.case}/${i}.jpg`}
          mode={"img-library"}
          onClick={showImageModal}
          style={{ cursor: 'zoom-in' }}
        >
        </Card>
      )
    }
    return r;
  }

  return (
    <div className="image-library-container">
      <div className="title-box">
        <Link to="/actualcase"><FaArrowAltCircleLeft />&nbsp;<FormattedMessage id="previousPage" /></Link>
        <h1 className="title">{pages[query.i].name}</h1>
        <div></div>
      </div>
      <div className="card-box">
        {show()}
      </div>
      <ImageModal image={image} modal={modal} showModal={showModal} />
    </div>
  )
}

export { ActualCase, ImageLibrary }