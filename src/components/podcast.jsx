import React from 'react';


function Podcast () {

    return  (  
        <React.Fragment>
        <main>
        <div className="tittle-pages">podcast</div>
  
        <div className="conteiner-grid-main">
          <iframe
            className="podcast-1"
            width="100%"
            height="96%"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/600319371&color=%237c3c6c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
  
          <div className="main-content-text">
            <h2>
              Podcast #01<br />
              Two Opposites
            </h2>
            <br />
            <p>
              Hello space travellers...<br />
              The first Podcast has been cooked up for us by Two Opposites <br />
              This project incorporating a blend of deep, micro minimal and
              electronic sounds<br />
              Luigi and Andrea form the duo and currently reside in Benevento in
              the South of Italy<br />
              Tune in and enjoy the first number...
            </p>
          </div>
          <div id="contact-us">
            <h2 className="contact-text">CONTACT US</h2>
            <br />
            <a href="mailto:noviorbisrecording@gmail.com"
              ><h3 id="email">Noviorbisrecording@gmail.com</h3></a
            ><br />
            <a href="https://www.facebook.com/noviorbisrec/">
              <img src="Images/social-icons/fb.png" alt="Link to facebook" />
            </a>
            <a href="https://www.instagram.com/novi.orbis/">
              <img src="Images/social-icons/ig.png" alt="Link to instagram" />
            </a>
            <a href="https://soundcloud.com/novi_orbis">
              <img src="Images/social-icons/sc.png" alt="Link to soundcloud" />
            </a>
            <a href="https://www.youtube.com/channel/UCQo0r3pl1yaFZ6rMfaP12Qw">
              <img src="Images/social-icons/youtube.png" alt="Link to youtube" />
            </a>
          </div>
        </div>
      </main>
      </React.Fragment>
      );
}

export default Podcast;