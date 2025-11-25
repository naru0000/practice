import { useState } from "react";

const Bulb = () => {
  const [light, setLight] = useState("off");

  console.log(light);
  return (
    <div>
      {light === "on" ? (
        <h1 style={{ backgroundColor: "orange" }}>on</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>off</h1>
      )}

      <div>
        <h1>{light}</h1>
        <button onClick={() => setLight(light === "on" ? "off" : "on")}>{light === "on" ? "끄기" : "켜기"}</button>
      </div>
    </div>
  );
};

export default Bulb;
