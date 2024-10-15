import { useState, useCallback } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [useNum, setUseNum] = useState(false);
  const [useChar, setUseChar] = useState(false);
  const [password, setPassword] = useState();

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (useNum) str += "0123456789";
    if (useChar) str += "~!@#$%^&*_-+=[]{}`";

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass = str.charAt(char);
    }

    setPassword(pass);
  }, [length, useNum, useChar, setPassword]);

  return (
    <div className="container min-h-screen flex flex-col items-center text-xl bg-neutral-900 px-4 py-12 text-neutral-100">
      <h1 className="font-bold">Complex Password Generator</h1>
      <div className="container max-w-md mx-auto shadow-md rounded-lg p-5 my-8 text-orange-400 bg-zinc-800">
        <div className="flex shadow rounded-xl overflow-hidden my-5">
          <input
            type="text"
            value={password}
            className="outline-none rounded-l-xl w-full p-5"
            placeholder="password"
            readOnly
          />
          <button className="bg-neutral-700 rounded-r-xl p-5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e)=>{setLength(e.target.value)}}
            />
            <label htmlFor="">Length: {length}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
