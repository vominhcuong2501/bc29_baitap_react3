import React, { Component } from "react";

export default class ModalGioHang extends Component {
  renderGioHang = () => {
    return this.props.cartList.map((item) => {
      return (
        <tr key={item.id}>
          <td>
            <img src={item.image} height={100} width={150}/>
          </td>
          <td>{item.name}</td>
          <td>
          <button className="btn btn-warning" onClick={() => this.props.controlQuantity(item, false)}>-</button>
            {item.quantity}
            <button className="btn btn-warning" onClick={() => this.props.controlQuantity(item, true)}>+</button>
            </td>
          <td>{item.price.toLocaleString()}$</td>
          <td>{(item.quantity * item.price).toLocaleString()}$</td>
          <td>
            <button
              className=" btn btn-danger"
              onClick={() => this.props.delete(item.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="modelId1"
          tabindex="-1"
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div
              className="modal-content"
              style={{ maxWidth: 800, width: 800 }}
            >
              <div className="modal-header">
                <h5 className="modal-title">Cart list</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>IMAGE</th>
                        <th>NAME</th>
                        <th>QUANTITY</th>
                        <th>PRICE</th>
                        <th>MONEY</th>
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody>{this.renderGioHang()}</tbody>
                    <tfoot>
                      <tr>
                        <td colSpan={5} />
                        <td>Total</td>
                        <td>
                            {this.props.cartList.reduce((total, ele) => {
                                return total += ele.price * ele.quantity
                            }, 0).toLocaleString()}$
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
