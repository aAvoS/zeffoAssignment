import Header from './Header'
import Footer from './Footer';
import giftCard from './asset/GiftCard.svg';
import FinalWindow from './asset/FinalWindow.svg';
import WatchVideo from './asset/WatchVideo.svg';
import BulletIcon from './asset/bulletIcon.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-header">

        <div className="bodyOne">
        <div className='bodyOneLeft'>
          <p className='introduction'>Introducing India's 1st investment gift card</p>
          <p className='startInvesting'>
            Start the investing journey of your <p className='lovedOnes'>loved ones</p></p>
          <button className="buyButton">Buy gift card</button>
        </div>
        <img src={giftCard} className="App-logo" alt="logo" />
        </div>

        <div className='bodyTwo'>
        <div className='bodyOneLeft'>
          <p className='introduction'>Your recipient has the  </p>
          <p className='startInvesting'>
          ultimate choice
          </p>
          <div className='bulletPointWrapper'>
          <img src={BulletIcon} className="bulletIcon" alt="logo" />
          <p className='choiceDetails'>Your gift will invest by default in <p className='fundNameText'>MOTILAL OSWAL NIFTY 500 INDEX FUND</p></p>
          </div>
          <div className='bulletPointWrapper'>
          <img src={BulletIcon} className="bulletIcon" alt="logo" />
          <p className='choiceDetails'>They can switch to a different fund anytime</p>
          </div>
        </div>
        <img src={FinalWindow} className="App-logo" alt="logo" />
        </div>
        
        <div className='bodyThree'>
        <p className='lovedThanks'>This is why your loved ones will thank you forever</p>
        <p className='watchVideoText'>WATCH THE VIDEO</p>
        <img src={WatchVideo} className="watchVideo App-logo" alt="logo" />
        <button className="buyButton">Buy gift card</button>
        </div>        
      </div>
      <Footer />
    </div>
  );
}

export default App;
