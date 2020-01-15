import React, { Component } from "react";
import ArtistDetail from "./artistDetail";

class ArtistList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      sortBy: "",
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character/")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.results
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  handleValueChange = event => {
    this.setState({ sortBy: event.target.value });
  };

  render() {
    let content = [];
    let data;
    const { filter, sortBy, error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      const lowercasedFilter = filter.toLowerCase();
      data = items.filter(item => {
        return item.name.toLowerCase().includes(lowercasedFilter);
      });

      if (sortBy === "ASC") {
        data.sort((a, b) => Number(a.id) - Number(b.id));
      }
      if (sortBy === "DESC") {
        data.sort((a, b) => Number(b.id) - Number(a.id));
      }

      data.forEach((item, index) => {
        content.push(
          <div key={item.id} className="col-sm-3" style={{ padding: "10px" }}>
            <ArtistDetail detail={item}></ArtistDetail>
          </div>
        );
        if ((index + 1) % 4 === 0) {
          content.push(<div className="clearfix"></div>);
        }
      });
      return (
        <div>
          <div class="row">
            <div class="col-sm-6">
              <input
                type="text"
                value={filter}
                onChange={this.handleChange}
                placeholder="Search here..."
              />
            </div>
            <div class="col-sm-6">
              <select
                id="sort"
                onChange={this.handleValueChange}
                value={this.state.value}
              >
                <option value="">Sort by ID</option>
                <option value="ASC">Ascending</option>
                <option value="DESC">Descending</option>
              </select>
            </div>
          </div>
          <div>{content}</div>
        </div>
      );
    }
  }
}
export default ArtistList;
