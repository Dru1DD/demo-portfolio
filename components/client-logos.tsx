import React, { FC } from "react";
import Image from "next/image";
import SliderContainer from "./slider";

import shopifyLogo from "../assets/trustedby/shopify.png";

const ClientLogos: FC = () => (
  <>
    <SliderContainer className="" initialOffsetX={0} contentWidth={1290}>
      <SliderItem width={150}>
        <Image
          src={shopifyLogo}
          width={150}
          height={50}
          alt="shopify"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={shopifyLogo}
          width={150}
          height={50}
          alt="shopify"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={shopifyLogo}
          width={150}
          height={50}
          alt="shopify"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={shopifyLogo}
          width={150}
          height={50}
          alt="shopify"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={shopifyLogo}
          width={150}
          height={50}
          alt="shopify"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={shopifyLogo}
          width={150}
          height={50}
          alt="shopify"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={shopifyLogo}
          width={150}
          height={50}
          alt="shopify"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={shopifyLogo}
          width={150}
          height={50}
          alt="shopify"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={shopifyLogo}
          width={150}
          height={50}
          alt="shopify"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={shopifyLogo}
          width={150}
          height={50}
          alt="shopify"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={shopifyLogo}
          width={150}
          height={50}
          alt="shopify"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={shopifyLogo}
          width={150}
          height={50}
          alt="shopify"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={shopifyLogo}
          width={150}
          height={50}
          alt="shopify"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={shopifyLogo}
          width={150}
          height={50}
          alt="shopify"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={shopifyLogo}
          width={150}
          height={50}
          alt="shopify"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={shopifyLogo}
          width={150}
          height={50}
          alt="shopify"
          objectFit="contain"
        />
      </SliderItem>
    </SliderContainer>
  </>
);

interface ItemProps {
  width: number;
  children: JSX.Element;
}
export const SliderItem: FC<ItemProps> = ({ children, width }) => (
  <div
    className="inline-flex justify-center items-center mx-4"
    style={{ width }}
  >
    {children}
  </div>
);

export default ClientLogos;
