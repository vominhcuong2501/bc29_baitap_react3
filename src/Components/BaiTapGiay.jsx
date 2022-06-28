import React, { Component } from "react";
import DanhSachSanPham from "./DanhSachSanPham";
import dataGiay from "./DataGiay.json";
import ModalSanPham from "./ModalSanPham";

export default class BaiTapGiay extends Component {
  state = {
    mangGiay: dataGiay,
    mangModal: {}
  };

  showDetail = (sp) => {
    this.setState(
      {
        mangModal: sp,
      }
    );
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center text-primary">SHOES SHOP</h1>
        <DanhSachSanPham
          mangGiay={this.state.mangGiay}
          showDetail={this.showDetail}
        />
        <ModalSanPham mangModal={this.state.mangModal} />
      </div>
    );
  }
}
