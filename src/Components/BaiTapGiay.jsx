import React, { Component } from "react";
import DanhSachSanPham from "./DanhSachSanPham";
import dataGiay from "./DataGiay.json";
import ModalGioHang from "./ModalGioHang";
import ModalSanPham from "./ModalSanPham";

export default class BaiTapGiay extends Component {
  state = {
    mangGiay: dataGiay,
    spModal: {},
    cartList: []
  };

  showDetail = (sp) => {
    this.setState(
      {
        spModal: sp,
      }
    );
  };

  delete = (id) => {
    const cartUpdate = [...this.state.cartList];
    let index = cartUpdate.findIndex(ele => ele.id === id);
    cartUpdate.splice(index,1);
    this.setState({
        cartList: cartUpdate
    })
  }

  add = (sp) => {
    const cartUpdate = [...this.state.cartList];
    let index = cartUpdate.findIndex(ele => ele.id === sp.id);
    if(index !== -1) {
        cartUpdate[index].quantity += 1;
    } else {
        cartUpdate.push({...sp, quantity: 1});
    }
    this.setState({
        cartList: cartUpdate
    })
  }

  controlQuantity = (sp, control) => {
    const cartUpdate = [...this.state.cartList];
    const index = cartUpdate.findIndex((ele) => ele.id === sp.id);

    if (control) {
      cartUpdate[index].quantity += 1;
    } else if (cartUpdate[index].quantity > 1) {
      cartUpdate[index].quantity -= 1;
    } else if (window.confirm("Bạn có muốn xóa không?")) {
      cartUpdate.splice(index, 1);
    }

    this.setState({
      cartList: cartUpdate,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center text-primary">SHOES SHOP</h1>
        <div className="text-right">
            <button className="btn btn-warning" data-toggle="modal" data-target="#modelId1" >Cart({this.state.cartList.length})</button>
        </div>
        <DanhSachSanPham
          mangGiay={this.state.mangGiay}
          showDetail={this.showDetail}
          add={this.add}
        />
        <ModalSanPham spModal={this.state.spModal} />
        <ModalGioHang cartList={this.state.cartList} delete={this.delete} controlQuantity={this.controlQuantity}/>
      </div>
    );
  }
}
