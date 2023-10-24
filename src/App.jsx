import { useState } from "react";

function App() {
  const [chaiCount, setChaiCount] = useState(1);
  return (
    <>
      <h1 className="text-3xl">Currency App with {chaiCount} !!!</h1>
      <h1 className="text-3xl" onClick={() => setChaiCount(chaiCount + 1)}>
        ☕
      </h1>
    </>
  );
}

export default App;
