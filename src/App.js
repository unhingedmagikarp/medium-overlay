import { useState } from "react";

import Overlay from "./components/Overlay";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <button onClick={toggleOverlay}>Open Overlay</button>

      <Overlay isOpen={isOpen} onClose={toggleOverlay}>
        <h1>Content in Overlay</h1>
      </Overlay>
    </div>
  );
}

export default App;
