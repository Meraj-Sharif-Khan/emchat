import { Link } from "react-router-dom";
import GenderCheckbox from "./genderCheckbox";
import { useState } from "react";
import useSignup from "../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleChexkbox = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 lg:px-8 bdf">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl/9 font-bold tracking-tight text-white-900">
          Signup to
          <span className="ml-2 text-[#72c66c]">emconnect</span>
        </h2>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm/6 font-medium text-white-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#46a440] sm:text-sm/6"
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={inputs.name}
                onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="username"
              className="block text-sm/6 font-medium text-white-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#46a440] sm:text-sm/6"
                id="username"
                name="username"
                type="text"
                required
                autoComplete="username"
                value={inputs.username}
                onChange={(e) =>
                  setInputs({ ...inputs, username: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm/6 font-medium text-white-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#46a440] sm:text-sm/6"
                id="password"
                name="password"
                type="password"
                required
                autoComplete="new-password"
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm/6 font-medium text-white-900"
            >
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#46a440] sm:text-sm/6"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                autoComplete="new-password"
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
              />
            </div>
          </div>

          <GenderCheckbox
            onCheckboxChange={handleChexkbox}
            selectedGender={inputs.gender}
          />
          <div>
            <button
              disabled={loading}
              type="submit"
              className="flex cursor-pointer w-full justify-center rounded-md bg-[#46a440] hover:bg-[#4fb847] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Signup"
              )}
            </button>
          </div>
        </form>

        <p className="mt-5 text-center text-sm/6 text-gray-500">
          Already have an account?{" "}
          <Link
            className="font-semibold text-[#46a440] hover:text-[#4fb847]"
            to={"/Login"}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
