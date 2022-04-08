import { useState } from "react";

function App() {
  const [showGifts, setShowGifts] = useState(false);
  return (
    <div className="app">

      <div className="top-image">
        <div className="title">
          <h1 className="title__names"><span>Regina</span> <br />& <span>Jimmy</span></h1>
          <p className="title__text">are getting married!</p>
        </div>
      </div >
      <div className="info">
        <h2 className="info__datetime">July 03 2022 <span>at</span> 6 PM</h2>
        <h3 className="info__location">4000 Estancia Boulevard, Wesley Chapel, Florida</h3>
        <p className="info__text">We'd love to celebrate with you. Please RSVP below!</p>
        <nav>
          <a href="https://forms.gle/DzH5CZ1R2ZX4mm2S9">RSVP</a>
          {showGifts ? (
            <div className="gift-info">
              <p>To be honest, we don't have a ton of material needs at the moment. If you'd like to give a gift, please click <a href="">here</a></p>
              <p>We'd also happily accept gifts for our honeymoon! <a href="https://venmo.com/code?user_id=2243801024299008025&created=1649459328.441108&printed=1">here</a></p>
            </div>
          ) : (
            <button onClick={() => setShowGifts(!showGifts)}>Gift Registry</button>
          )}
          <a className="disabled">Hotel link <span>(coming soon!)</span></a>
        </nav>
      </div>
    </div >
  );
}

export default App;
