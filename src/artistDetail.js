import React, { Component } from "react";

class ArtistDetail extends Component {
  render() {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={this.props.detail.image}
          alt=""
          width="100%"
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.detail.name}</h5>
          <h6 className="card-title">{this.props.detail.id}</h6>
          <div className="row">
            <div className="col-sm-4">STATUS</div>
            <div className="col-sm-8 text-right">
              {this.props.detail.status}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-4">SPECIES</div>
            <div className="col-sm-8 text-right">
              {this.props.detail.species}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-4">GENDER</div>
            <div className="col-sm-8 text-right">
              {this.props.detail.gender}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-4">ORIGIN</div>
            <div className="col-sm-8 text-right">
              {this.props.detail.origin.name}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-4">LAST LOCATION</div>
            <div className="col-sm-8 text-right">
              {this.props.detail.location.name}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArtistDetail;
