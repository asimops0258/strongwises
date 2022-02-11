import './ImageModal.scss';

const ImageModal = ({ image, modal, showModal }) => {
    const close = () => {
        showModal(false);
    }
    const imageStyle = {
        padding: '10px',
        backgroundColor: 'white',
        border: '1px solid #888',
        boxShadow: '0px 0px 1em 0px gray',
        borderRadius: '5px',
        maxHeight: '80vh'
    }

    return (
        <div className="image-modal-container" style={{ display: modal && window.innerWidth > 499 ? "block" : "none" }} onClick={close}>
            <div className="main-panel">
                <img src={image} style={imageStyle} />
            </div>
        </div>
    )
}

export default ImageModal;