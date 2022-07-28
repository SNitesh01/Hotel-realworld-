import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import moment from "moment";
import CheckInAndOut from "../components/CheckInAndOut";
import ImageSlider from "../components/CustomImageSlider";
import SplitBox from "../components/SplitBox";

type Props = {
  images: Array<object>
}

export default function Home({ images }: Props) {
  
  return (
    <div className="w-screen h-auto overflow-x-hidden">
      <ImageSlider images={images} />
      <CheckInAndOut />
      <div className="w-10/12 m-auto bg-white rounded-md md:py-28 md:px-8 p-4 px-4 md:-mt-16 md:pt-24 h-auto">
        <SplitBox>
          <div className="md:w-1/2 w-full flex flex-col justify-start items-start h-full mt-4 gap-[1.75rem]">
            <span>
              <h2 className="md:text-[3.5rem] text-4xl font-bold">Hotel since 1982</h2>
            </span>
            <p className="text-[16px]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit</p>
            <button className="border-[3px] p-2 border-teal-600 text-teal-800  mt-2 flex w-max gap-2 items-center justify-center transition-all hover:bg-teal-600 hover:cursor-pointer hover:text-white">
              <span className="font-semibold">More Details</span>
              <span>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </button>
          </div>
          <div className="w-1/2 h-full relative hidden md:block -shadow-3xl">
            <div className="absolute -top-48 left-0 z-10">
              <img src="https://demo.zantetheme.com/wp-content/uploads/2018/07/about2.jpg" alt="" />
            </div>
            <div className="absolute -top-24 left-24 z-0 shadow-xl">
              <img src="https://demo.zantetheme.com/wp-content/uploads/2018/07/about1.jpg" alt="" />
            </div>
          </div>
        </SplitBox>
      </div>
      <div className="p-6"></div>
    </div>
  );
}

export async function getStaticProps() {
  const request = await fetch('http://localhost:8001/api/decorations/images');
  const images = await (await request).json();

  return {
    props: {
      images
    }
  }
}