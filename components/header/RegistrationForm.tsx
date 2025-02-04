"use client"

import Link from "next/link";

import { useFormState } from "react-dom";
import { useState } from "react";

import { CreateUser } from "@/lib/action";

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const initialState = {
  ok: false,
  message: '',
  data: undefined,
  errors: undefined
};

function RegistrationForm() {
  const [state, formAction] = useFormState(CreateUser, initialState);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState(false);

  return (
    <div className="">
      <form action={formAction}>
        <div className="flex flex-col gap-y-2 mb-2">
          <label htmlFor="name text-sm">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            id="name"
            name="name"
            className="border border-grey rounded-md focus:outline-none bg-black h-9 p-2 outline-none text-sm"
            required
          />
          <p className="text-red-500 text-sm h-2">{state.errors?.name?.[0]}</p>
        </div>
        <div className="flex flex-col gap-y-2 mb-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="yourmail@mail.com"
            id="email"
            name="email"
            className="border border-grey rounded-md focus:outline-none bg-black h-9 p-2 outline-none text-sm"
            required
          />
          <p className="text-red-500 text-sm h-2">{state.errors?.email?.[0]}</p>
        </div>

        <div className="flex flex-col gap-y-2 mb-2">
          <label htmlFor="password">Password</label>
          <div className="relative">
            <input
              type={isPasswordVisible ? "text" : "password"}
              placeholder="********"
              id="password"
              name="password"
              className="w-full border border-grey rounded-md focus:outline-none bg-black h-9 p-2 outline-none text-sm"
              required
              minLength={8}
            />
            <button
              type="button"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
            >
              {isPasswordVisible ? (
                <VisibilityOffIcon fontSize="small" className="text-gray-400" />
              ) : (
                <VisibilityIcon fontSize="small" className="text-gray-400" />
              )}
            </button>
          </div>
          <p className="text-red-500 text-sm h-2">{state.errors?.password?.[0]}</p>
        </div>

        <div className="flex flex-col gap-y-2 mb-2">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="relative">
            <input
              type={isRepeatPasswordVisible ? "text" : "password"}
              placeholder="********"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full border border-grey rounded-md focus:outline-none bg-black h-9 p-2 outline-none text-sm"
              required
              minLength={8}
            />
            <button
              type="button"
              onClick={() => setIsRepeatPasswordVisible(!isRepeatPasswordVisible)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
            >
              {isRepeatPasswordVisible ? (
                <VisibilityOffIcon fontSize="small" className="text-gray-400" />
              ) : (
                <VisibilityIcon fontSize="small" className="text-gray-400" />
              )}
            </button>
          </div>
          <p className="text-red-500 text-sm h-2">{state.errors?.confirmPassword?.[0]}</p>
        </div>

        <div className="flex items-center gap-2 mt-4">
          <input
            type="checkbox"
            id="agreeToPrivacyPolicy"
            name="agreeToPrivacyPolicy"
          />
          <span className="text-sm">I&apos;ve read and accept the <Link href="/privacy-policy" className="text-orange cursor-pointer underline">Privacy Policy</Link></span>
        </div>
        <p className="text-red-500 text-sm h-2">{state.errors?.agreeToPrivacyPolicy?.[0]}</p>
        <button type="submit" className="bg-orange py-2 px-10 rounded-full uppercase mt-4 mx-auto block">
          Create
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;