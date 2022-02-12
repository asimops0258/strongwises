import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useLocation, HashRouter, Switch } from "react-router-dom";
import { IntlProvider } from "react-intl";
import './index.css';
import App from './App';

import en from './i18n/en.js';
import cn from './i18n/zh-CN.js';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Root = () => {
  const [locale, setLocale] = useState('zh-CN');
  let messages;

  useEffect(() => {
    if (localStorage.getItem("language")) {
      setLocale(localStorage.getItem("language"));
    } else {
      localStorage.setItem("language", navigator.language);
    }
  }, []);

  if (locale.includes('en')) {
    messages = en;
  } else {
    messages = cn;
  }

  return (
    <HashRouter>
      <IntlProvider locale={locale} messages={messages} defaultLocale="zh-CN">
        <React.StrictMode>
          <ScrollToTop />
          <Switch>
            <App setLocale={setLocale} />
          </Switch>
        </React.StrictMode>
      </IntlProvider>
    </HashRouter>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
