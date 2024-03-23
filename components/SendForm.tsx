"use client";
import axios from "axios";
import React, { FormEventHandler, useState } from "react";

export const SendForm = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleFormSend: FormEventHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/mail", { subject, message });
      setSubject("");
      setMessage("");
    } catch (error) {
      console.log("Something Went Wrong");
    }
  };
  return (
    <form
      className="max-w-[600px] w-full flex flex-col items-center justify-center gap-4 bg-gray-600/10 border-2 border-black p-10 rounded-xl"
      onSubmit={handleFormSend}
    >
      <div className="w-full">
        <label>Subject</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full p-2"
        />
      </div>
      <div className="w-full">
        <label>Message</label>
        <textarea
          rows={10}
          className="w-full p-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button className="bg-white p-4 rounded-lg shadow-lg border-2 border-transparent hover:border-gray-300 transition">
        Submit
      </button>
    </form>
  );
};
