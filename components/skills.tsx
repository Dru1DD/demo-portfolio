import React, { useContext, useRef } from "react";
import s from "../styles/skills.module.css";
import { ScrollContext } from "../utils/scroll-observer";

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};
const Skills: React.FC = () => {
  const { scrollY } = useContext(ScrollContext);
  const refContainter = useRef<HTMLDivElement>(null);

  const numOfPages = 3;
  let progress = 0;
  const { current: elContainer } = refContainter;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    
      progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages))
  }
  return (
    <div ref={refContainter} className="bg-black text-white">
      <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py24 md:py-36 lg:py-36 flex flex-col justify-center items-center md:text-6xl tracking-tight font-semibold">
        <div className="leading-[1.15]">
          <div className={s.skillText} style={{
            opacity: opacityForBlock(progress, 0)
          }}>We know our tools inside out.</div>
          <span className={`${s.skillText} inline-block after:content-['_']`} style={{
            opacity: opacityForBlock(progress, 1)
          }}>
            Our team has contributed 123 commits to React Native core, powering
            thousands of apps worldwide
          </span>
          <span className={`${s.skillText} inline-block`}style={{
            opacity: opacityForBlock(progress, 2)
          }}>
            We&apos;re maintaining some of the most popular open-source
            projects, wich over <strong>1,234</strong>donsloads.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
