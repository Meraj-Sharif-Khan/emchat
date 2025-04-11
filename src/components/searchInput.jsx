import { useState } from "react";
import useGetUsers from "../hooks/useGetUsers";
import toast from "react-hot-toast";

function SearchInput({ setUsers }) {
  const [search, setSearch] = useState("");
  const [back, setBack] = useState(false);
  const { getUsers } = useGetUsers();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const allUsers = await getUsers();
      if (allUsers && search) {
        const findUser = allUsers.filter(
          (user) =>
            user.name.toLowerCase() === search.toLowerCase() ||
            user.username.toLowerCase() === search.toLowerCase()
        );
        if (findUser.length < 1) {
          throw new Error("No user Found");
        }
        setUsers(findUser);
        setBack(true);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  async function handleBack() {
    try {
      const allUsers = await getUsers();
      setSearch("");
      setUsers(allUsers);
      setBack(false);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className="flex">
      {back && (
        <button className="mr-2 cursor-pointer" onClick={handleBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
      )}

      <form onSubmit={handleSearch} className="flex flex-1 items-center gap-2">
        <input
          type="text"
          placeholder="search.."
          className="input input-bordered w-full rounded-full focus:outline-2 focus:-outline-offset-2 focus:outline-[#46a440] sm:text-sm/6"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-circle bg-[#46a440] text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default SearchInput;
