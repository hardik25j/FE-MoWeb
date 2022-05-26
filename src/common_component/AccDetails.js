import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import AutoCompleteInput from './AutoCompleteInput';
import Input from './Input';

const AccDetails = (props) => {
  const { accDetail, handleChange, onClickDelete } = props;
  const { id: accID, credit, debit, narration } = accDetail[0];
  return (
    <div className="detailContainer">
      <div className="row my-4">
        <div className="col-lg-4">
          <div className="form-group">

            <AutoCompleteInput
              className="form-control"
              labelClassName="text-black fw-700 mb-1 fs-14"
              accDetail={accDetail}
              label="Account Name"
              onChange={handleChange}
            />

          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <Input
              className="form-control"
              labelClassName="text-black fw-700 mb-1 fs-14"
              label="Debit"
              name="debit"
              type="number"
              onChange={e => handleChange("debit", e.target.value, accID)}
              placeholder="1000"
              value={debit}
            />
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row">
            <div className="col-lg-10">
              <div className="form-group">
                <Input
                  className="form-control"
                  labelClassName="text-black fw-700 mb-1 fs-14"
                  label="Credit"
                  name="credit"
                  type="number"
                  onChange={e => handleChange('credit', e.target.value, accID)}
                  placeholder="0"
                  value={credit}
                />
              </div>

            </div>
            <div className="col-lg-2 d-flex align-items-center" style={{ cursor: 'pointer' }} onClick={() => onClickDelete(accID)}>
              <FontAwesomeIcon icon={faXmark} onClick={props.onClick} />
            </div>
          </div>
        </div>

      </div>
      <div className="row my-4">
        <div className="col-lg-12">
          <div className="form-group">
            <Input
              className="form-control"
              labelClassName="text-black fw-700 mb-1 fs-14"
              label="Narration"
              name="narration"
              onChange={e => handleChange('narration', e.target.value, accID)}
              placeholder="Type here"
              value={narration}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

AccDetails.defaultProps = {
  handleChange: () => { },
  onClickDelete: () => { },
};

AccDetails.propTypes = {
  accDetail: PropTypes.arrayOf(
    PropTypes.shape({
      credit: PropTypes.string,
      debit: PropTypes.string,
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      narration: PropTypes.string,
    })
  ),
  handleChange: PropTypes.func,
  onClickDelete: PropTypes.func,
};

export default React.memo(AccDetails, function (prevprops, nextprops) {
  return prevprops === nextprops;
});