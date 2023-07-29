import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import aiChatbot from "../public/assets/projects/aiChatbot.png";
import Link from "next/link";

const github = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/90 z-10" />
        <Image
          className="absolute z-1 object-cover"
          fill
          src={aiChatbot}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-0 translate-y-[-50%] text-white z-10 p-4 ml-4">
          <h2 className="py-2 ">AI Chatbot</h2>
          <h3>TypeScript | Tailwind | NextJS</h3>
        </div>
      </div>
      <div className="w-screen mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 ml-4">
        <div className="col-span-4 ">
          <p className="text-xl tracking-widest uppercase text-[#5651e5] my-2">
            Project
          </p>
          <h2 className="my-3 tracking-wider ">Overview</h2>
          <p className="text-justify">
            The AI Chatbot is a web application that enables users to talk with
            the AI focused on Food and Cooking. Even if you enter prompt rather
            than food and cooking, it won't give you any answer. This app is
            developed with NextJS, TypeScript, Tailwind CSS, Vercel AI, Hero
            Icons, React Anchor Link Smooth Scroll and Github API.
          </p>
          <Link target="_blank" href="https://github.com/aberkayk/AI-Chatbot">
            <button className="px-8 py-2 mt-4 mr-4">CODE</button>
          </Link>
          <Link href="/#home">
            <button className="px-8 py-2 mt-4 mr-4">HOME</button>
          </Link>
          <Link href="/#projects">
            <button className="px-8 py-2 mt-4">BACK</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <br />
            <hr />
            <br />
            <div className="grid grid-cols-1 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ChatGPT API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NextJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TypeScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Vercel AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default github;
