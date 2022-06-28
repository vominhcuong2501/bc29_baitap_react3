import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.sp.image} />
        <div className="card-body">
          <h4 className="card-title">{this.props.sp.name}</h4>
          <p className="card-text">Price: {this.props.sp.price}$</p>
          <button className="btn btn-success" data-toggle="modal" data-target="#modelId" onClick={() => this.props.showDetail(this.props.sp)}>Show detail</button>
          <button className="btn btn-danger">Add to cart</button>
        </div>
      </div>
    )
  }
}
