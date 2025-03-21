import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Button from "../components/Button";

export function SignUp() {

  return (
  <div className="mb-40">
    <div className="bg-white100 mb-32 h-40 flex items-center">
      <Breadcrumb children="Sign Up" title={true} />
    </div>

    <div className="flex flex-col mx-auto w-80">
      <div className="flex gap-2 py-2 border border-black200 rounded-sm w-80 cursor-pointer mb-8 justify-center hover:bg-white100">
        <img src="/Google.svg" alt="Google" />
        <p className="text-black500 font-medium text-sm">
          Continue with Google
        </p>
      </div>
      <div className="mb-8.5 mx-auto flex w-80 gap-4 items-center">
        <div className="border-t border-black100 h-[1px] w-full"></div>
        <p className="text-black500 font-medium text-xs">OR</p>
        <div className="border-t border-black100 w-full h-[1px]"></div>
      </div>
      <div className="flex flex-col w-80">
        <label className="text-black600 font-medium text-sm">Name</label>
        <input
          type="text"
          name="name"
          className="border border-black100 rounded-md py-2.5 px-2 mb-4"
        />
        <label className="text-black600 font-medium text-sm">Email</label>
        <input
          type="email"
          name="email"
          className="border border-black100 rounded-md py-2.5 px-2 mb-4"
        />
        <label className="text-black600 font-medium text-sm">Password</label>
        <input
          type="password"
          name="password"
          className="border border-black100 rounded-md py-2.5 px-2"
        />
      </div>
      <div className="mt-4 mb-6 ml-auto">
        <p className="text-black500 font-medium text-xs">
          By creating an account you agree with our Terms of Service, Privacy
          Policy.
        </p>
      </div>
      <div className="w-80">
        <Button
          children="Create account"
          arrow={false}
        />
      </div>
      <div className="mt-6 mx-auto">
        <p className="text-black500 text-sm cursor-pointer hover:underline">
          Already have an account? Log in
        </p>
      </div>
    </div>
  </div>
  );
}

export default SignUp;
