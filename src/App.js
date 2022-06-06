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
          <h2 className="timebox__time">6:30 PM<span> Ceremony </span></h2>
          <h2 className="timebox__time">7:00 PM<span> Reception </span></h2>
        </div>
        <h3 className="info__location">Estancia at Wiregrass<br /><span>4000 Estancia Blvd<br />Wesley Chapel, Florida</span></h3>
        <p className="info__text">
          Please arrive for the ceremony between <em>6:00 and 6:15pm</em>.
          The ceremony will begin at 6:30pm sharp.
          There will be drinks after the ceremony and the reception will begin at 7pm. There we will party and dance with food and drinks, and celebrate getting to spend this day together!
        </p>
        <nav>
          {showGifts ? (
            <div className="gift-info">
              <p>We just bought a house!! If you'd like to gift us a present we'd appreciate anything on this list: <a target="_blank" href="https://www.giftster.com/gift/public/8bs8s/"> &#127873; gift list</a></p>
              <p>Alternatively, we'd really appreciate contributions towards preparing the house to be lived in:
                <a target="_blank" rel="noreferrer" href="https://venmo.com/code?user_id=2243801024299008025&created=1649459328.441108&printed=1">here</a>
                Most importantly, your presence on our special day is the best gift we could ever receive. Please feel okay to just show up and celebrate with us too &#10084;
                <br />
              </p>
            </div>
          ) : (
            <button onClick={() => setShowGifts(!showGifts)}>Gift Registry</button>
          )}
          <a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1654289747664&key=GRP&app=resvlink" target="_blank" rel="noreferrer">Hotel link</a>
          <div className="faq">
            <h1>FAQ</h1>
            <h4 className="faq__header">Dress Code: Summer Casual</h4>
            <p className="faq__text">The ceremony will be for 15 minutes outside before we go in to party. Please dress for the occasion, but also for the heat!</p>
            <h4 className="faq__header">COVID Precautions</h4>
            <p className="faq__text">We're not requiring masks at the wedding. The ceremony will be partially indoors, partially outside. </p>
          </div>
        </nav>
      </div>
    </div >
  );
}

export default App;
