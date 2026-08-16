import { useEffect, useRef, useState } from 'react';
import logo from '../assets/images/logo.png';

const TIPS = [
  '24hr Armed Response · Malamulele',
  'Guarding · Armed Response · CCTV',
  'Electric Fencing · Alarms · Motor Gates',
  '922A Malamulele',
  'Call 015 280 0343 for Assistance',
  'Cell 074 097 1465',
];

interface LoadingScreenProps {
  onFinish: () => void;
}

export default function LoadingScreen({ onFinish }: LoadingScreenProps) {
  const [pct, setPct] = useState(0);
  const [tipIndex, setTipIndex] = useState(0);
  const [tipVisible, setTipVisible] = useState(true);
  const [hidden, setHidden] = useState(false);
  const finishedRef = useRef(false);

  const finish = () => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setHidden(true);
    setTimeout(onFinish, 800);
  };

  useEffect(() => {
    const tipTimer = setInterval(() => {
      setTipVisible(false);
      setTimeout(() => {
        setTipIndex((i) => (i + 1) % TIPS.length);
        setTipVisible(true);
      }, 220);
    }, 1300);

    const progressTimer = setInterval(() => {
      setPct((prev) => {
        const next = Math.min(100, prev + (Math.random() * 9 + 3));
        if (next >= 100) {
          clearInterval(progressTimer);
          setTimeout(finish, 350);
        }
        return next;
      });
    }, 160);

    const safety = setTimeout(finish, 6000);

    return () => {
      clearInterval(tipTimer);
      clearInterval(progressTimer);
      clearTimeout(safety);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="loading-screen" className={hidden ? 'hide' : ''} onClick={finish}>
      <div className="siren-flash">
        <div className="beam-red"></div>
        <div className="beam-blue"></div>
      </div>
      <div className="load-vignette"></div>
      <div className="load-grain"></div>
      <div className="load-content">
        <img className="load-badge" src={logo} alt="Fredrose Security Services" />
        <div className="load-word">
          FREDROSE <span>SECURITY</span>
        </div>
        <div className="load-sub">Guarding Without Fear or Favour</div>
        <div className="load-tip" style={{ opacity: tipVisible ? 1 : 0 }}>
          {TIPS[tipIndex]}
        </div>
        <div className="load-bar-track">
          <div className="load-bar-fill" style={{ width: `${pct}%` }}></div>
        </div>
      </div>
      <div className="load-pct">{Math.floor(pct)}%</div>
      <div className="load-skip">Click to skip</div>
    </div>
  );
}
