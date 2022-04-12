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
        <p className="info__top">(its a short turnaround, we know)</p>
        <h2 className="info__date">07 / 03 / 22</h2>
        <h3 className="info__location">4000 Estancia Boulevard, Wesley Chapel, Fl</h3>
        <div className="timebox">
          <h2 className="timebox__time"><span>Ceremony </span><br />5:30 PM</h2>
          <h2 className="timebox__time"><span> Reception </span><br />6:00 PM</h2>
        </div>
        <p className="info__text">We'd love to celebrate with you. Please RSVP below!</p>
        <h2 className="info__deadline">Please RSVP by<br /> <span>April 30th</span></h2>
        <nav>
          <a href="https://forms.gle/DzH5CZ1R2ZX4mm2S9">RSVP</a>
          {showGifts ? (
            <div className="gift-info">
              <p>Our tiny apartment doesn't leave much room for gifts, but we'd appreciate anything on this list: <a href="https://www.giftster.com/gift/public/8bs8s/">here</a></p>
              <p>We'd also happily accept &#128184; for our future home! <a href="https://venmo.com/code?user_id=2243801024299008025&created=1649459328.441108&printed=1">here</a></p>
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
