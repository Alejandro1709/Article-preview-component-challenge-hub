import React, { useState } from 'react';
import Image from '../images/drawers.jpg';
import ProfileImage from '../images/avatar-michelle.jpg';
import Share from '../images/icon-share.svg';
import Pin from '../images/icon-pinterest.svg';
import FB from '../images/icon-facebook.svg';
import TW from '../images/icon-twitter.svg';
import './Card.css';

function Card() {
  let [isActive, setIsActive] = useState(false);

  return (
    <div className='Card'>
      <div
        className='Card__Top'
        style={{ backgroundImage: `url(${Image})` }}
      ></div>
      <div className='Card__Bottom'>
        <div className='Card__Bottom_Inner'>
          <div className='Card__T'>
            <h3>
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h3>
          </div>
          <div className='Card__M'>
            <p>
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </p>
          </div>
          <div className='Card__B'>
            <div className='B__Card'>
              <img id='prof' src={ProfileImage} alt='prof' />
              <div className='Card__Details'>
                <h3>Michelle Appleton</h3>
                <p>28 Jun 2020</p>
              </div>
              <button onClick={() => setIsActive(!isActive)}>
                <img id='share' src={Share} alt='' />
              </button>
            </div>
            {isActive && (
              <div className='toolTip'>
                <div className='quick'>
                  <p>SHARE</p>
                  <div className='actions'>
                    <img className='act' src={Pin} alt='' />
                    <img className='act' src={FB} alt='' />
                    <img className='act' src={TW} alt='' />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
