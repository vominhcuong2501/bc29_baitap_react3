import React, { Component } from "react";
import SanPham from "./SanPham";

export default class DanhSachSanPham extends Component {
  renderList = () => {
    return this.props.mangGiay.map(sp => {
      return (
        <div className="col-4 my-3" key={sp.id}>
            <SanPham sp={sp} showDetail={this.props.showDetail} add={this.props.add}/>          
        </div>
      )
    })
  };

  render() {
    return <div className="row">
        {this.renderList()}
    </div>
  }
}
