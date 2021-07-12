import './App.css';
import './css/Animation.css'
import TabsComponent from './Components/Tab/TabsComponent';
import MainComponent from './Components/MainComponent';
import Home from './Components/Home/Home';
import 'antd/dist/antd.css';
import { useEffect } from 'react';
import $ from 'jquery';
import SmallTabsComponent from './Components/Tab/SmallTabComponent';
import styles from './sass/test.sass'

function App() {
  var size = {
    width: window.innerWidth || document.body.clientWidth,
    height: window.innerHeight || document.body.clientHeight 
  }
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
      var pos2 = pos + 50;
      // Link Highlighting
      if (pos2 > $('#home').offset().top) {
        highlightLink('home');
      }
      if (pos2 > $('#about').offset().top) {
        highlightLink('about');
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
    <>
      <Home />
      {
        size.width > 600 ? <TabsComponent /> : <SmallTabsComponent/>
      }
      <MainComponent />
    </>
  );
}

export default App;
