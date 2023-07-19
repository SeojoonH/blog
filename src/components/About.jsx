import React from "react";

import Profile from "../assets/profile.png";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-black text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-500">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p>
              제 강점은 문제 해결과 분석 능력입니다. 서비스 기획과 콘텐츠 운영
              업무에서 사용자의 니즈를 파악하고 목표를 달성하기 위한 전략을
              수립하는 능력을 키웠습니다. 이러한 능력을 개발에도 활용해 사용자
              친화적인 웹 애플리케이션을 제작하고, 사용자의 요구를 반영한
              효과적인 기능을 개발하고 싶습니다. <br />
              <br /> 또한, 협업과 커뮤니케이션 능력 역시 제 강점 중 하나입니다.
              이전 직무에서는 다양한 팀과 협력하여 프로젝트를 성공적으로
              수행하기 위해 소통과 협업에 최선을 다해왔습니다. 팀원들과의 원활한
              소통을 통해 목표를 달성하기 위한 방향을 정하고 문제를 해결해 나갈
              수 있습니다.
            </p>
          </div>
          <di className="text-xl font-bold" v>
            <img className="w-30" src={Profile} alt="profile" />
            <p className="pt-8">
              안녕하세요, 황서준입니다. 제 블로그에 오신 걸 환영해요!
            </p>
          </di>
        </div>
      </div>
    </div>
  );
}

export default About;
