import React, { useRef, useState } from "react";
import "./ASMRSection.css";
import forestSound from "../assets/Audios/forest-ambience.mp3";
import rain from "../assets/Audios/rain.mp3";
import ocean from "../assets/Audios/ocean-waves.mp3";

const ASMRSection = () => {
  const [forestVolume, setForestVolume] = useState(0.5);
  const [forestPlaying, setForestPlaying] = useState(false);
  const forestRef = useRef(null);

  const [oceanVolume, setOceanVolume] = useState(0.5);
  const [oceanPlaying, setOceanPlaying] = useState(false);
  const oceanRef = useRef(null);

  const [rainVolume, setRainVolume] = useState(0.5);
  const [rainPlaying, setRainPlaying] = useState(false);
  const rainRef = useRef(null);

  const handleForestPlay = () => {
    if (forestRef.current.paused) {
      forestRef.current.play();
      setForestPlaying(true);
    } else {
      forestRef.current.pause();
      setForestPlaying(false);
    }
  };
  const handleForestVolume = (e) => {
    setForestVolume(e.target.value);
    forestRef.current.volume = e.target.value;
  };

  const handleOceanPlay = () => {
    if (oceanRef.current.paused) {
      oceanRef.current.play();
      setOceanPlaying(true);
    } else {
      oceanRef.current.pause();
      setOceanPlaying(false);
    }
  };
  const handleOceanVolume = (e) => {
    setOceanVolume(e.target.value);
    oceanRef.current.volume = e.target.value;
  };

  const handleRainPlay = () => {
    if (rainRef.current.paused) {
      rainRef.current.play();
      setRainPlaying(true);
    } else {
      rainRef.current.pause();
      setRainPlaying(false);
    }
  };
  const handleRainVolume = (e) => {
    setRainVolume(e.target.value);
    rainRef.current.volume = e.target.value;
  };

  return (
    <section className="fluid-container ASMR" id="asmr-section">
      <div className="asmr-heading h1">ASMR Collection</div>
      <div className="sound-container">
        
        <div className="sound-card">
          <h3 className="sound-title">Forest Whispers</h3>
          <p className="sound-description">
            Nature sounds with gentle wind through trees
          </p>
          <button className="play-btn" onClick={handleForestPlay}>
            {forestPlaying ? "❚❚" : "▶"}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={forestVolume}
            onChange={handleForestVolume}
            className="volume-slider"
          />
          <audio ref={forestRef} src={forestSound} loop></audio>
        </div>

        <div className="sound-card">
          <h3 className="sound-title">Ocean Waves</h3>
          <p className="sound-description">
            Calming waves crashing on a peaceful shore
          </p>
          <button className="play-btn" onClick={handleOceanPlay}>
            {oceanPlaying ? "❚❚" : "▶"}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={oceanVolume}
            onChange={handleOceanVolume}
            className="volume-slider"
          />
          <audio ref={oceanRef} src={ocean} loop></audio>
        </div>

        <div className="sound-card">
          <h3 className="sound-title">Gentle Rain</h3>
          <p className="sound-description">
            Relaxing sounds of gentle rain to soothe your mind.
          </p>
          <button className="play-btn" onClick={handleRainPlay}>
            {rainPlaying ? "❚❚" : "▶"}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={rainVolume}
            onChange={handleRainVolume}
            className="volume-slider"
          />
          <audio ref={rainRef} src={rain} loop></audio>
        </div>
      </div>
    </section>
  );
};

export default ASMRSection;
