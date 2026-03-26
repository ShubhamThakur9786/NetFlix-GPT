import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { addShowGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  function handleSignOut() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        // ...
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when components unmounts
    return () => unsubscribe();
  }, []);

  function handleClick() {
    //toggle gpt search button
    dispatch(addShowGptSearchView());
  }

  function handleLanguageChange(e) {
    dispatch(changeLanguage(e.target.value));
  }

  const ShowGptSearch = useSelector((store) => store.gpt.showGptSearchView);

  return (
    <div>
      <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between">
        <img className="w-44 tex" src={LOGO} alt="logo" />
        {user?.uid && (
          <div className="flex p-2">
            {ShowGptSearch && (
              <select
                className="p-2 m-2 bg-gray-900 text-white"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {" "}
                    {lang.name}{" "}
                  </option>
                ))}
              </select>
            )}
            <button
              className="font-bold bg-emerald-600 py-2 px-3 mx-3 my-2 rounded-lg "
              onClick={handleClick}
            >
              {ShowGptSearch ? "HomePage" : "GPT Search"}
            </button>
            <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
            <button
              onClick={handleSignOut}
              className="font-bold text-white cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
