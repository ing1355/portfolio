import './App.css';
import './css/Animation.css'
import TabsComponent from './Components/TabsComponent';
import MainComponent from './Components/MainComponent';
import Home from './Components/Home/Home';
import 'antd/dist/antd.css';

const test = new Array(100);
test.fill(1);

function App() {
  return (
    <>
      <Home/>
      <TabsComponent/>
      <MainComponent/>
      {/* {test.map(e => {
        return <div>test</div>
      })} */}
    </>
  );
}

export default App;
