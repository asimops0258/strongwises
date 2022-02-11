import './SingleMaterial.scss';
import { FormattedMessage } from "react-intl";

const SingleMaterial = () => {
  return (

    <div className="single-material-container">
      <div className="first-scrolled-item main-title">
        <h1 className="top"><span style={{ color: '#007c45', fontSize: '1.1em' }}>r</span>PET</h1>
        <h1 className="bottom">
        <FormattedMessage id="productHome.SingleMaterial.msg0" />
        </h1>
      </div>
      <div className="scrolled-item section section-1">
        <h1 className="scrolled-item title">
        <FormattedMessage id="productHome.SingleMaterial.msg1" />
        </h1>
        <div className="scrolled-item card-box">
          <div className="card">
            <img src="/images/singlematerial/Buttons.png" />
            <h2 className="title">
            <FormattedMessage id="productHome.SingleMaterial.msg2" />
            </h2>
          </div>
          <div className="card">
            <img src="/images/singlematerial/zipper.png" />
            <h2 className="title">
            <FormattedMessage id="productHome.SingleMaterial.msg3" />
            </h2>
          </div>
          <div className="card">
            <img src="/images/singlematerial/Buckle.png" />
            <h2 className="title">
            <FormattedMessage id="productHome.SingleMaterial.msg4" />
            </h2>
          </div>
        </div>
      </div>
      <div className="scrolled-item section section-2">
        <div className="scrolled-item item title">
          <h1>
          <FormattedMessage id="productHome.SingleMaterial.msg5" />
          <br />
          <FormattedMessage id="productHome.SingleMaterial.msg6" />
          </h1>
          <h1>
          <FormattedMessage id="productHome.SingleMaterial.msg7" />
          <br />
          <FormattedMessage id="productHome.SingleMaterial.msg8" />
          </h1>
        </div>
        <img className="scrolled-item item" src="/images/singlematerial/FiguresOnTheLeftAndRight.png" />
      </div>
      <div className="scrolled-item section section-3">
        <img className="scrolled-item item" src="/images/singlematerial/FiguresOnTheLeftAndRight.png" />
        <div className="scrolled-item item title">
          <h1 className="top">
          <FormattedMessage id="productHome.SingleMaterial.msg9" />  
          <br />
          <FormattedMessage id="productHome.SingleMaterial.msg10" />
          </h1>
          <h1 className="bottom">
          <FormattedMessage id="productHome.SingleMaterial.msg11" />  
          <br />
          <FormattedMessage id="productHome.SingleMaterial.msg12" />
          <br />
          <FormattedMessage id="productHome.SingleMaterial.msg13" />
          </h1>
        </div>
      </div>
      <div className="scrolled-item font-weight: bold; section section-4">
        <img className="scrolled-item" src="/images/singlematerial/SingleMaterial.png" />
      </div>
      <div className="scrolled-item section section-5">
        <div className="scrolled-item title">
          <h1 className="scrolled-item top">
          <FormattedMessage id="productHome.SingleMaterial.msg14" />
          </h1>
          <h1 className="scrolled-item bottom">
          <FormattedMessage id="productHome.SingleMaterial.msg15" />
          <br />
          <FormattedMessage id="productHome.SingleMaterial.msg16" />
          </h1>
        </div>
        <img className="scrolled-item" src="/images/singlematerial/SustainableDevelopment.png" />
      </div>
    </div>

  )
}

export default SingleMaterial;