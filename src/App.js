import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [artists, setArtists] = useState([]);
  const getData = async () => {
    // const response = await fetch("http://localhost:8888/artists");
    const response = await fetch(
      "https://my-json-server.typicode.com/NourElDeenKhaled/Music-App/artists"
    );
    const data = await response.json();
    setArtists(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        {artists.length !== 0 ? (
          artists.map((artist) => {
            const { id, name, img } = artist;
            return (
              <React.Fragment key={id}>
                <p>{name}</p>
                <img
                  src={img}
                  alt=""
                  width="100px"
                  height="100px"
                  style={{ objectFit: "cover" }}
                />
              </React.Fragment>
            );
          })
        ) : (
          <div>No Data</div>
        )}
      </div>
    </div>
  );
}

export default App;
