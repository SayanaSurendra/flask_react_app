import React,{ useState } from 'react'

function Display() {
  const [latestRec, setLatestRec] = useState("");
 
  const getLatestRec = async () => {
    const response = await fetch("http://127.0.0.1:5000/getData");
    const data = await response.json();
    setLatestRec(data.latestRec);
  };

  return (
      <div> 
          <h2>Get latest record</h2>
          <button type="submit" onClick={getLatestRec}>Get Data</button>
          {latestRec !== null && (
              <div>
              <h3>Latest Record:</h3>
              <p>{latestRec}</p>
              </div>
          )}
      </div>
  );
}

export default Display
