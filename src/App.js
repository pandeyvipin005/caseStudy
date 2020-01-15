import React, { Component } from "react";
import ArtistList from "./ArtistList";

class App extends Component {
  render() {
    return (
      <div className="container" style={{ backgroundColor: "#000" }}>
        <ArtistList />
      </div>
    );
  }
}
export default App;
