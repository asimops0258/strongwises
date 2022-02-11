import { Link } from "react-router-dom";
import "./Installation_Notes.scss"
import { FormattedMessage , useIntl} from "react-intl";
const Installation_Notes = () => {
    const intl = useIntl()
    const image=intl.formatMessage({ id: 'Installation_Notes.image' });
    return (
        <div className="installation_notes-container">
            <div className="installation_notes-item-img"
            style={{"backgroundImage":`url(${image})`}}
            >
        
            </div>
            <div className="installation_notes-item-title">
                <h1><Link to='/skillSupport'> <FormattedMessage id="Installation_Notes.title" /> </Link></h1>
            </div>
        </div>
    )
}
export default Installation_Notes;