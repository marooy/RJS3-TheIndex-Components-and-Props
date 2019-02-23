import React, { Component } from "react";
import AuthorCard from "./AuthorCard";

class AuthorList extends Component {
  render() {
    let Author = this.props.authors.map(author => (
      <AuthorCard author={author} key={author.first_name} />
    ));
    return (
      <div className="content col-10">
        <div className="authors">
          <h3>Authors</h3>
          <div className="row">{Author};</div>
        </div>
      </div>
    );
  }
}

export default AuthorList;
