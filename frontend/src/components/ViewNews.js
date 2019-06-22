import React, { Component } from "react";
import Axios from "axios";

const HackNews = props => (
  <tr>
    <td>{props.hacknews.by}</td>
    <td>{props.hacknews.title}</td>
    <td>
      <a href={props.hacknews.url}>Link</a>
    </td>
    <td>{props.hacknews.score}</td>
  </tr>
);

export default class ViewNews extends Component {
  constructor(props) {
    super(props);
    this.state = { news: [] };
  }

  componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    Axios.get("/api/hackernewboards")
      .then(response => {
        this.setState({ news: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  noteList() {
    return this.state.news.map(function(currentNews, i) {
      return <HackNews hacknews={currentNews} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3>Top 20 stories from Hacker News</h3>
        <table className="table  table-hover" style={{ marginTop: 20 }}>
          <thead className="thead-dark">
            <tr>
              <th>Author</th>
              <th>Title</th>
              <th>Link</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>{this.noteList()}</tbody>
        </table>
      </div>
    );
  }
}
