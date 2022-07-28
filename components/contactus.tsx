import React, { FC, useState, useCallback } from "react";
import Image from "next/image";
import axios from "axios";

interface InputsState {
  companyName: string;
  email: string;
  message: string;
}
interface StatusState {
  submitted: boolean;
  submitting: boolean;
  info: {
    error: boolean;
    msg: string | null;
  };
}
const ContactUs: FC = () => {
  const [status, setStatus] = useState<StatusState>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState<InputsState>({
    companyName: "",
    email: "",
    message: "",
  });

  const handleOnChange = useCallback((e: any) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  }, []);

  const handleServerResponse = useCallback((ok: any, msg: string) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: {
          error: false,
          msg,
        },
      });
      setInputs({
        companyName: "",
        email: "",
        message: "",
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: {
          error: true,
          msg,
        },
      });
    }
  }, []);

  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
      axios({
        method: "POST",
        url: "https://formspree.io/f/xoqbaalo",
        data: inputs,
      }).then((_response) => {
        handleServerResponse(true, "Tank you, your message has been submitted");
      });
    },
    [inputs, handleServerResponse]
  );

  return (
    <div className="bg-black text-white flex flex-col justify-center pt-10 min-h-screen">
      <div className="flex1 flex flex-col justify-center items-center pt-10 lg:pt-6">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]"
        >
          {status.info.error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Error</strong>:{" "}
              <span className="block sm:inline">{status.info.msg}</span>
            </div>
          )}
          {status.submitted ? (
            <div
              className="text-white text-xl font-bold px-4 py-3 rounded relative"
              role="alert"
            >
              Your message has been successfully sent. We will contact you very
              soon
            </div>
          ) : (
            <>
              <input
                id="companyName"
                name="companyName"
                required
                maxLength={128}
                type="text"
                placeholder="Company name"
                onChange={handleOnChange}
                value={inputs.companyName}
                className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
              />
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={128}
                placeholder="Your E-mail"
                onChange={handleOnChange}
                value={inputs.email}
                className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
              />
              <textarea
                id="message"
                name="message"
                required
                maxLength={1048576}
                placeholder="Additional information"
                onChange={handleOnChange}
                value={inputs.message}
                className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2 min-h-[16rem]"
              />
              <div className="text-center mt-10">
                <button
                  type="submit"
                  className="bg-white text-black rounded-3xl px-8 py-2"
                >
                  {!status.submitting
                    ? !status.submitted
                      ? "Submit"
                      : "Submitted"
                    : "Submitting..."}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
