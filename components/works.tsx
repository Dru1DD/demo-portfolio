import React, { FC } from "react";
import Image from 'next/image'
import { TileBackground, TileContent, TileWrapper, Tile } from "./tile";
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from "./work";

import firstImage from '../assets/work/firstApp.png'
import secondImage from '../assets/work/secondApp.png'
import thirdImage from '../assets/work/thirdApp.png'

const Works: FC = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground>
      <WorkBackground />
    </TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We built</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">First App</div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image 
                src={firstImage}
                width={840}
                height={1620}
                layout="responsive"
                alt="first app"
              />
            </WorkRight>
          </WorkContainer>
        )}
      />
    </TileContent>
    <TileContent>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <span className="text-2xl">We built</span>
              <div>Second App</div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image 
                src={secondImage}
                width={840}
                height={1620}
                layout="responsive"
                alt="second app"
              />
            </WorkRight>
          </WorkContainer>
        )}
      />
    </TileContent>
    <TileContent>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <span className="text-2xl">We built</span>
              <div>Third App</div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image 
                src={thirdImage}
                width={840}
                height={1620}
                layout="responsive"
                alt="third app"
              />
            </WorkRight>
          </WorkContainer>
        )}
      />
    </TileContent>
  </TileWrapper>
);

export default Works;
