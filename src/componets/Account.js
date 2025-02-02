import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  selectUserName,
  selectUserEmail,
} from "../feautres/userSlice";
import { useEffect } from "react";

const Account = () => {
  const { t } = useTranslation();
  const [icon] = useState();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const email = useSelector(selectUserEmail);

  useEffect(() => {
   
  }, []);

  

  return (
    <div className="p-8 font-['Cairo] ">
      <div className="bg-white rounded overflow-hidden shadow-lg text-center font-['Cairo] ">
        <div className="bg-slate-200 text-gray-500 p-6">
          <div className="w-24 inline-flex">
            <img
              src={icon}
              alt="profile_pic"
              width={80}
              className="rounded-[50%]"
            />
          </div>
          <p className="pt-2 text-lg font-semibold">{userName}</p>
          <p className="text-sm">{email}</p>
        </div>
        <div className="border-b">
          <div className="pl-3">
            <p className="text-sm font-medium text-gray-600 leading-none p-6 text-center tracking-wide">
              {t("welcome")}
            </p>
          </div>
        </div>
        <div className="text-gray-800 p-4 flex justify-between">
          <button
            className="flex items-center justify-center space-x-2 rounded-md border-2 border-blue-500 px-4 py-2 font-medium text-blue-600 transition hover:bg-blue-500 hover:text-white"
            onClick={() => navigate("/")}
          >
            <span> {t("continue")} </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            className="flex items-center justify-center space-x-2 rounded-md  px-4 py-2 font-medium text-blue-600 transition"
          >
            <span>{t("SignOut")} </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Account;
