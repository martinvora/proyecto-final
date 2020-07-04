import React from 'react';
import Postpodcast from './postpodcast';


function Podcast () {
   
  const [externalResults, changeState] = React.useState([]);
  const pods = externalResults.map(eR =>  <Postpodcast src={eR.scLink} title={eR.podcastName} description={eR.description}/>)
  
  React.useEffect(function () {
    fetch('http://localhost:4000/podcast')
        .then(function(response) {
            return response.json();
        })
        .then(function (responseJSON) {
            changeState(responseJSON);
        })
 }, []);




   
    return (  
        <React.Fragment >
        <main>
        <div className="tittle-pages">podcast</div>
        
        <div className="conteiner-grid-main">
            {pods}       

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