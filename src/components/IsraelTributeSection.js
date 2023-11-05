import React, { useState, useEffect } from 'react';
import './IsraelTributeSection.css';
import starImage from '../images/star-of-david.png';
import wallImage from '../images/western-wall.png';
import kaddishAudio from '../audio/kaddish.mp3';
import NoteForm from './NoteForm';
import Note from './Note';

const IsraelTributeSection = () => {
  const [playKaddish, setPlayKaddish] = useState(false);

  useEffect(() => {
    setPlayKaddish(true);
  }, []);

  return (
    <div className="tributeSection">
      <h1 className="tributeHeader">In Memoriam</h1>
      <p className="tributeText">This section is dedicated to the memory of those who have lost their lives. In their honor, we continue to hope and pray for peace.</p>
      <img src={starImage} alt='Star of David' className="starImage" />
      <div className="candleContainer">
        <img src={candleImage} alt='Candle' className="candleImage" />
        <img src={candleImage} alt='Candle' className="candleImage" />
        <img src={candleImage} alt='Candle' className="candleImage" />
      </div>
      <img src={wallImage} alt='Memorial Wall' className="wallImage" />
      <h2 className="prayerText">יתגדל ויתקדש שמה רבא</h2>
      {playKaddish && (
        <audio controls autoPlay loop>
          <source src={kaddishAudio} type='audio/mpeg' />
          Your browser does not support the audio element.
        </audio>
      )}
      <h2 className="leaveNoteHeader">Leave a Note</h2>
      <NoteForm />
      <div className="noteContainer">
        <Note text='Sample Note 1' />
        <Note text='Sample Note 2' />
        <Note text='Sample Note 3' />
      </div>
      <p className="universalPeaceText">While our hearts are with Israel, we extend our prayers to all innocent lives affected by conflicts, in hope of a peaceful tomorrow.</p>
    </div>
  );
};

export default IsraelTributeSection;