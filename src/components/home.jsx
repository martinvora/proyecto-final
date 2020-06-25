import React from 'react';

function Home () {
    return (
        <React.Fragment>
        <main>
        <img id="image-spacehd" src="Images/spacehd.jpg" alt="Space" />
  
        <div className="conteiner-grid-main">
          <img
            id="logo-content-image"
            src="Images/noblack.jpg"
            alt="Novi Orbis Logo"
            />
          <div className="main-content-text">
            <h2>NOVI ORBIS</h2>
            <p>
              Record label owned by 4 guys who live in 2 different <br />
              parts of the world: Italy and Uruguay <br /><br />
              Founded in 2018
            </p>
          </div>
          
          <div id="contact-us">
            <h2 className="contact-text">CONTACT US</h2>
            <br />
            <a href="mailto:noviorbisrecording@gmail.com">
              <h3 id="email">Noviorbisrecording@gmail.com</h3> </a
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

export default Home;