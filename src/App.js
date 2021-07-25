import './App.css';
import './css/Fonts.css';
import './css/Animation.css'
import TabsComponent from './Components/Tab/TabsComponent';
import MainComponent from './Components/MainComponent';
import Home from './Components/Home/Home';
import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';
import $ from 'jquery';

import { IntlProvider } from 'react-intl';
import en from "./locale/en";
import ko from "./locale/ko";

function App() {
  const [lang, setLang] = useState(localStorage.getItem('lang'));

  useEffect(() => {
    if(!localStorage.getItem('lang')) {
      localStorage.setItem('lang', 'ko');
    }
  },[])

  function highlightLink(anchor) {
    document.getElementsByClassName('')
    $('nav .active').removeClass('active');
    $('nav')
      .find('[dest="' + anchor + '"]')
      .addClass('active');
  }

  useEffect(() => {
    $(window).on('scroll', () => {
      var pos = $(window).scrollTop();
      var pos2 = pos + 100;
      // Link Highlighting
      if (pos2 > $('#home').offset().top) {
        highlightLink('home');
      }
      if (pos2 > $('#about').offset().top) {
        highlightLink('about');
      }
      if (pos2 > $('#career').offset().top) {
        highlightLink('career');
      }
      if (pos2 > $('#works').offset().top) {
        highlightLink('works');
      }
      if (pos2 > $('#blog').offset().top) {
        highlightLink('blog');
      }
      if (
        pos2 > $('#contact').offset().top ||
        pos + $(window).height() === $(document).height()
      ) {
        highlightLink('contact');
      }
    })
  }, [])
  return (
    <IntlProvider locale={lang ? lang : 'ko'} messages={lang === 'ko' ? ko : en}>
      <Home />
      <TabsComponent lang={lang} setLang={setLang}/>
      <MainComponent />
    </IntlProvider>
  );
}

export default App;
