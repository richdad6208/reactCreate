import axios from "axios";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    axios
      .get("/api")
      .then((res) => console.log(res.data.jaesung))
      .catch((err) => console.log(err));
  }, []);
  return <div className="App">안녕하세요</div>;
}

export default App;
