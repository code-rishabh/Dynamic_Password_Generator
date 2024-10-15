import { useState, useCallback, useEffect, useRef } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [useNum, setUseNum] = useState(false);
  const [useChar, setUseChar] = useState(false);
  const [password, setPassword] = useState("");

  // useRef Hook
  const passwordRef = useRef(null);

  // Fn for copying password
  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    console.log(`password copied - ${password}`);
    alert(`password copied - ${password}`);
  }, [password]);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (useNum) str += "0123456789";
    if (useChar) str += "~!@#$%^&*_-+=[]{}`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, useNum, useChar, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, useNum, useChar, PasswordGenerator]);

  return (
    <div className="container min-h-screen flex flex-col justify-center items-center text-xl bg-neutral-900 px-4 py-12 text-neutral-100">
      <h1 className="font-bold">Complex Password Generator</h1>
      <div className="container max-w-md mx-auto shadow-md rounded-lg p-5 my-8 text-orange-500 bg-neutral-800 border border-neutral-700">
        <div className="flex shadow rounded-xl overflow-hidden my-5">
          <input
            type="text"
            value={password}
            className="outline-none font-semibold rounded-l-xl w-full p-5"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPassword}
            className="bg-black/10 hover:bg-amber-700 hover:text-white rounded-r-xl font-bold p-5 shrink-0 border border-neutral-500"
          >
            COPY
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={25}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={useNum}
              id="numberInput"
              onChange={() => {
                setUseNum((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={useChar}
              id="characterInput"
              onChange={() => {
                setUseChar((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
