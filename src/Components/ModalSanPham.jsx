import React, { Component } from "react";

export default class ModalSanPham extends Component {
  renderModal = () => {
    let {spModal} = this.props;
      return (
        <div className="card" key={spModal.id}>
          <img className="card-img-top" src={spModal.image} height={300} />
          <div className="card-body">
            <h2 className="card-title text-danger">{spModal.name}</h2>
            <p className="card-text text-left text-info">Price: {spModal.price}</p>
            <p className="card-text text-left text-secondary">Description: {spModal.description}</p>            
          </div>
        </div>
      );
    }

  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Product detail</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">{this.renderModal()}</div>
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
