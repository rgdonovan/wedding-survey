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
        <p className="info__top">Its a short turnaround but <br />we'd love to celebrate with you!</p>
        <h2 className="info__date">July 03, 2022</h2>

        <div className="timebox">
          <h2 className="timebox__time">5:30 PM<span> Ceremony </span></h2>
          <h2 className="timebox__time">6:00 PM<span> Reception </span></h2>
        </div>
        <h3 className="info__location">Estancia at Wiregrass<br /><span>4000 Estancia Blvd<br />Wesley Chapel, Florida</span></h3>
        <h2 className="info__deadline">Please RSVP by<br /> <span>April 30th</span></h2>
        <nav>
          <a target="_blank" rel="noreferrer" href="https://forms.gle/K7k3D13DiYFzpGiT6">RSVP</a>
          {showGifts ? (
            <div className="gift-info">
              <p>Our tiny apartment doesn't leave much room for gifts, but we'd appreciate anything on this list: <a target="_blank" href="https://www.giftster.com/gift/public/8bs8s/">here</a></p>
              <p>We'd also happily accept &#128184; as we save towards a new home! <a target="_blank" rel="noreferrer" href="https://venmo.com/code?user_id=2243801024299008025&created=1649459328.441108&printed=1">here</a></p>
            </div>
          ) : (
            <button onClick={() => setShowGifts(!showGifts)}>Gift Registry</button>
          )}
          <a href="https://www.marriott.com/events/start.mi?id=1649796957511&key=GRP" target="_blank" rel="noreferrer">Hotel link</a>
        </nav>
      </div>
    </div >
  );
}

export default App;
