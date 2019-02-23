import React, { Component } from "react";
import authors from "./data";
import Sidebar from "./Sidebar";
import AuthorList from "./AuthorList";

class App extends Component {
  render() {
    return (
      <div>
        <div id="app" className="container-fluid">
          <div className="row">
            <Sidebar />
            <AuthorList authors={authors} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
