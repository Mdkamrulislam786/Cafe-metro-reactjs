import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Modal, Image, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { openModal, closeModal } from "../../../actions/addAction";

class ModalButton extends Component {
  render() {
    const { modalOpen, open } = this.props.testReducer;
    const { id, img, name, price, info } = this.props.testReducer.modalProduct;
    const modal = () => {
      if (!modalOpen) {
        return null;
      } else {
        return (
          <Modal show={open} size="sm" centered>
            <Modal.Header>
              <Modal.Title>
                <h6>{name} Info</h6>
              </Modal.Title>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => this.props.closeModal(id)}
              >
                <i className="fas fa-times-circle"></i>
              </div>
            </Modal.Header>
            <Modal.Body>
              <Image src={img} fluid className="mx-auto align-center" />
              <h5 className="text-center">{name}</h5>
              <h5 className="text-muted text-center">Price: {price}$</h5>
              <div className="d-flex flex-column justify-content-center align-center">
                <div
                  onClick={() => this.props.closeModal(id)}
                  className="text-center align-center"
                ></div>
                <div style={{ textAlign: "center" }}>
                  <p>{info}</p>
                </div>
                <div
                  onClick={() => this.props.closeModal(id)}
                  className="text-center align-center"
                >
                  <Button variant="dark" as={Link} to="/MainMenu-Order-Online">
                    Continue Shopping
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        );
      }
    };
    return modal();
  }
}
const mapStateToProps = (state) => ({
  testReducer: state.testReducer,
});

export default connect(mapStateToProps, { openModal, closeModal })(ModalButton);
