import React from 'react';

function Postpodcast(props) {
  return (
    <React.Fragment>

      <iframe
        title="Podcast 1"
        width="100%"
        height="96%"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={props.src}
      ></iframe>

      <div className="main-content-text">
        <h2> {props.title} </h2>
        <br />
        <p> {props.description}
        </p>
      </div>
    </React.Fragment>
  );
}

export default Postpodcast;     