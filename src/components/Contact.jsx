import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-black flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="MAILTO:iamaloneinseoul@gmail.com"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-500 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">코멘트를 남겨 주세요.</p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-cyan-600 hover:border-cyan-600 px-4 py-3 my-8 mx-auto flex items-center">
          전송
        </button>
      </form>
    </div>
  );
};

export default Contact;
