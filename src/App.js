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
      <body className="info">
        <h2 className="info__datetime">July 03 2022 <span>at</span> 6 PM</h2>
        <h3 className="info__location">4000 Estancia Boulevard, Wesley Chapel, Florida</h3>
        <p className="info__text">We'd love to celebrate with you. Please RSVP below!</p>
        <nav>
          <a href="https://forms.gle/DzH5CZ1R2ZX4mm2S9">RSVP</a>
          <button onClick={() => setShowGifts(!showGifts)}>Gift Registry</button>
          <a href="https://forms.gle/DzH5CZ1R2ZX4mm2S9">Hotel link <span>(coming soon!)</span></a>
          {showGifts && (
            <div>
              <p>To be honest we don't have a ton of material needs at the moment, but if you'd like to give a gift, please click the button below!</p>
              <p>We'd also happily accept support of our honeymoon!</p>
            </div>
          )}
        </nav>
      </body>
    </div >
  );
}

export default App;
