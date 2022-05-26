import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const { card, handleToggle } = props;
  return (
    <React.Fragment>
      <div className="col-xl-3 col-md-6">
        <div className={`card ${card.style} text-white mb-4`}>
          <div className="card-body">{card.name} Card</div>
          <div className="card-footer d-flex align-items-center justify-content-between">
            <Link to="/" className="small text-white stretched-link" onClick={() => handleToggle(card.name)}>View Details</Link>
            <div className="small text-white"><i className="fas fa-angle-right"></i></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
  }),
  handleToggle: PropTypes.func.isRequired,
};

export default React.memo(Card, function (prevprops, nextprops) {
  return prevprops === nextprops;
});