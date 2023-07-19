import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#000000]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-blue-400">안녕하세요. 제 이름은 </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-100">
          <span className="text-pink-400">황서준</span>입니다.
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-white ">
          저는 <span className="text-orange-300">프론트엔드 개발자</span>입니다.
        </h2>
        <p className="text-lime-600 py-4 max-w-[700px]">
          안녕하세요, 저는 다양한 경험을 갖춘 전직자로서 현재는 신입 프론트엔드
          개발자 직군으로 전환을 희망하고 있는 36세 개발자입니다. 이전에는
          서비스 기획, 콘텐츠 운영 등 다른 직군에서 7년 가까이 근무하며 다양한
          업무를 수행해 왔습니다. 이러한 경험을 바탕으로 프론트엔드 개발자로서
          새로운 도전을 통해 더욱 성장하고자 합니다.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 mt-2 flex items-center hover:bg-cyan-600 hover:border-cyan-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
