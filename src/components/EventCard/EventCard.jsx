import React, { useState } from 'react'
import './EventCard.css'
import heartOutline from "../../assets/heart-outline.png"
import heartFill from "../../assets/heart-fill.png"


const EventCard = (props) => {
const [isLiked, setIsLiked] = useState(false)
props.data.liked = isLiked;

    return (
        <div className="card">
          <div className="card-header">
            <div className="profile">
              <span className="letter">Location: {props.data.venue.display_location} </span>
            </div>
            <div className="card-title-group">
              <h5 className="card-title">{props.data.title}</h5>
              <div className="card-date">{props.data.datetime_local}</div>
            </div>
          </div>
          <img className="card-image" src={props.data.performers[0].image} alt="Logo" />
          <div className="card-text">blablblblablabalbalablabalabla</div>
          <div className="card-like-bar">
            {props.data.liked ? (
              <img className="card-like-icon" src={heartFill} alt="Logo" onClick={() => setIsLiked(prevState => !prevState)} />
            ) : (
              <img className="card-like-icon" src={heartOutline} alt="Logo" onClick={() => setIsLiked(prevState => !prevState)} />
            )}
            <div className="like-text">
              <b>1515</b> kişi bu tarifi beğendi.
            </div>
          </div>
        </div>
      );
}

export default EventCard