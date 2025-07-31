import React, { useRef } from 'react';
import './Videoplayer.css';
import video from '../../assets/college-video.mp4';
import { FaHeart, FaShareAlt } from 'react-icons/fa';

const Videoplayer = ({ playState, setPlayState }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      className={`videoplayer ${playState ? '' : 'hide'}`}
      ref={player}
      onClick={closePlayer}
    >
      <div className="video-container">
        {/* ✅ Icons now inside video container */}
        <div className="icon-bar">
          <div className="icon" title="Like">
            <FaHeart />
          </div>
          <div className="icon" title="Share">
            <FaShareAlt />
          </div>
        </div>

        <video src={video} autoPlay muted controls></video>
      </div>
    </div>
  );
};

export default Videoplayer;
