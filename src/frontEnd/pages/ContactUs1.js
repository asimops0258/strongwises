import './ContactUs.scss'
import axios from 'axios';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { AiFillPhone } from "react-icons/ai";
import { FaFax, FaLocationArrow } from "react-icons/fa";
import { BiCheckCircle } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { useHistory } from 'react-router';

const mailApi = (process.env.REACT_APP_BACK_END || window.location.protocol + '//' + window.location.hostname + ":8080") + "/mail";

const ContactUs = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const history = useHistory();

  const items = [
    {
      name: <FormattedMessage id="phone" />,
      icon: <AiFillPhone />,
      content: "+886(2)8751-6466"
    },
    {
      name: <FormattedMessage id="fax" />,
      icon: <FaFax />,
      content: "+886(2)8751-3066"
    },
    {
      name: <FormattedMessage id="address" />,
      icon: <FaLocationArrow />,
      content: <FormattedMessage id="currentAddress" />
    },
    {
      name: <FormattedMessage id="email" />,
      icon: <MdEmail />,
      content: "sales@strongwises.com"
    }
  ];

  const sendMail = () => {
    const data = { name, email, message };
    history.push('/sendComplete')
    axios.post(mailApi, data).then(() => {
    }).catch(error => console.log(error))
  }

  return (
    <div className="contactus-container">
      <div className="contactus-box">
        <div className="findus">
          <h1><FormattedMessage id="contact.findUs" /></h1>
          <div className="findus-item">
            <ul>
              {
                items.map(({ name, icon, content }) =>
                  (<li><h4>{icon}&nbsp;&nbsp;{name}&nbsp;:&nbsp;{content}</h4></li>))
              }
            </ul>
          </div>
        </div>
        <div className="contactus">
          <h1><FormattedMessage id="contact.orContactUs" /></h1>
          <div className="contactus-item">
            <form onSubmit={sendMail}>
              <h4><FormattedMessage id="contact.name" /></h4>
              <input required autofocus type="name" value={name} onChange={e => setName(e.target.value)} />
              <h4><FormattedMessage id="contact.email" /></h4>
              <input required type="email" value={email} onChange={e => setEmail(e.target.value)} />
              <h4><FormattedMessage id="contact.yourMessage" /></h4>
              <textarea required autocomplete="off" value={message} onChange={e => setMessage(e.target.value)} />
              <div className="buttonBox"><button type="submit"><FormattedMessage id="submit" /></button></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

const SendComplete = () => {
  return (
    <div className="sendcomplete-container">
      <div className="complete-icon">
        <BiCheckCircle />
      </div>
      <div className="complete-text">
        <FormattedMessage id="contact.send" />
      </div>
    </div>
  )
}

export { ContactUs, SendComplete };