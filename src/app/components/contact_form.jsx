import React from 'react';

function Contact() {
  return (
    <div className="Header h-screen flex flex-col">
      <div className="Form w-[50vw] h-[80vh] flex flex-col rounded-md text-black bg-white absolute bottom-[5vh] right-[5%] p-8">
        <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Fill the Information Down Below</div>
        <label className="block mb-2 text-sm font-medium text-gray-900">Name:</label>
        <input type="text" className="mb-2 input-field border-solid border-2 border-[#1e0e4b] rounded-md p-2" placeholder="John Doe" />
        <label className="block mb-2 text-sm font-medium text-gray-900">Work Email:</label>
        <input type="email" className="mb-2 input-field border-solid border-2 border-[#1e0e4b] rounded-md p-2" placeholder="JohnDoe@Gmail.com" />
        <label className="block mb-2 text-sm font-medium text-gray-900">Work Phone Number:</label>
        <input type="tel" className="mb-2 input-field border-solid border-2 border-[#1e0e4b] rounded-md p-2" placeholder="123-456-7891" />
        <label className="block mb-2 text-sm font-medium text-gray-900">Company Size:</label>
        <select className="input-field mb-2 border-solid border-2 border-[#1e0e4b] rounded-md p-2">
          <option defaultValue disabled>Choose Company Size</option>
          <option value="1-15">1-15</option>
          <option value="16-100">16-100</option>
          <option value="101-200">101-200</option>
          <option value="201-300">201-300</option>
          <option value="300+">300+</option>
        </select>
        <label className="block mb-2 text-sm font-medium text-gray-900">Information Request:</label>
        <textarea className="input-field h-32 border-solid border-2 border-[#1e0e4b] rounded-md p-2" placeholder="Enter further information here."></textarea>
        <button className="bg-[#1e0e4b] text-white font-bold py-2 px-4 rounded mt-4">Submit</button>
      </div>
    </div>
  );
}

export default Contact;