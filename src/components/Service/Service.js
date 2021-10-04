import React from "react";
import { Card, Col } from "react-bootstrap";
import Rating from "react-rating";
import "./Service.css";
const Service = (props) => {
  const {
    name,
    img,
    category,
    price,
    vote,
    rating,
    c_img,
    quantity,
    pepole,
    view,
  } = props.service;
  return (
    <Col xs={12} sm={12} md={6} lg={4}>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="text-danger">{category}</h6>
            <h4 className="text-primary">${price}</h4>
          </div>
          <Card.Title>{name}</Card.Title>
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="text-danger">{vote} Vote</h6>
            <h4 className="text-warning">
              <Rating
                readonly
                emptySymbol="far rating fa-star"
                fullSymbol="fas rating fa-star"
                initialRating={rating}
              />
            </h4>
          </div>
          <div className="d-flex justify-content-between align-items-center card_footer">
            <li>
              <i className="fas fa-file"></i>
              <span> {quantity}</span>
            </li>
            <li>
              <i className="fas fa-user"></i>
              <span> {pepole}</span>
            </li>
            <li>
              <i className="fas fa-eye"></i>
              <span> {view}</span>
            </li>
            <li>
              <img src={c_img} alt="" />
            </li>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
