
import "./Test_Report.scss";
// import PDF_1 from "../../pdf/衣纖木資料/清大科技中心(HB-20-04466)放射性核分析報告_2020S122.pdf";
// import PDF_2 from "../../pdf/衣纖木資料/雄材(HB-20-04466)廢棄物樣品檢驗報告_2020S122.pdf";
// import PDF_3 from "../../pdf/衣纖木資料/儀鴻檢測 衣纖木 耐候-11020107.pdf";
// import PDF_4 from "../../pdf/衣纖木資料/CY 2020 60217建築材料試驗報告-20200629.pdf";
// import PDF_5 from "../../pdf/衣纖木資料/HV-20-00441檢測報告-20200303.pdf";
// import PDF_6 from "../../pdf/衣纖木資料/SGS UO-2020-30088檢測報告.pdf";
// import PDF_7 from "../../pdf/衣纖木 Lite 資料/20210503170824-0001.pdf";
// import PDF_8 from "../../pdf/WPC二代改良木資料/200120009SHF-002.pdf";

import PDF_1 from "../../pdf/衣纖木資料/a1.pdf";
import PDF_2 from "../../pdf/衣纖木資料/a2.pdf";
import PDF_3 from "../../pdf/衣纖木資料/a3.pdf";
import PDF_4 from "../../pdf/衣纖木資料/a4.pdf";
import PDF_5 from "../../pdf/衣纖木資料/a5.pdf";
import PDF_6 from "../../pdf/衣纖木資料/a6.pdf";
import PDF_7 from "../../pdf/衣纖木 Lite 資料/20210503170824-0001.pdf";
import PDF_8 from "../../pdf/WPC二代改良木資料/200120009SHF-002.pdf";
import { useState ,useEffect} from "react";
import { FormattedMessage, useIntl } from "react-intl";

const Test_Report = () => {
    const intl = useIntl()
    const [image1, setImage1] = useState();

    const listenWidth = ()=>{
        if(document.body.clientWidth > 450)
        {
            setImage1(intl.formatMessage({ id: 'Test_Report.image' }));
            console.log(image1)
        }else{
            setImage1(intl.formatMessage({ id: 'Test_Report.image_RWD' }));
            console.log(image1)
        }
    }

    useEffect(()=>{
        listenWidth()
        window.addEventListener("resize", listenWidth);
        console.log(image1)
    },[intl.locale])
    

    return ( 
        <div className="Test_Report-container">

            <div className="Test_Report-item-img" style={{"backgroundImage":`url(${image1})`}}>
            </div>
            
            <div className="Test_Report-item-dwon">
                
                <div className="Test_Report-item-title">
                    <h2><FormattedMessage id="Test_Report.title_2" /></h2>
                    <a href={PDF_7} target="_blank"><FormattedMessage id="Test_Report.content_7" /></a><br></br>
                </div>

                
                <div className="Test_Report-item-title">
                    <h2><FormattedMessage id="Test_Report.title_3" /></h2>
                    <a href={PDF_8} target="_blank"><FormattedMessage id="Test_Report.content_8" /></a><br></br>
                </div>

                <div className="Test_Report-item-title">
                    <h2><FormattedMessage id="Test_Report.title_1" /></h2>
                        <a href={PDF_1} target="_blank"><FormattedMessage id="Test_Report.content_1" /></a><br></br>
                        <a href={PDF_2} target="_blank"><FormattedMessage id="Test_Report.content_2" /></a><br></br>
                        <a href={PDF_4} target="_blank"><FormattedMessage id="Test_Report.content_4" /></a><br></br>
                        <a href={PDF_5} target="_blank"><FormattedMessage id="Test_Report.content_5" /></a><br></br>
                        <a href={PDF_6} target="_blank"><FormattedMessage id="Test_Report.content_6" /></a>
                </div>

            </div>
                
        </div>
    )
}

export default Test_Report;