import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import VoucherFrom from '../voucher/VoucherForm';

const PopModal = (props) => {
  const { toggle, title } = props;
  return (
    <React.Fragment>
      <div className="modal d-block submit-video-modal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content border-">
            <div className="modal-header bg-graylight2 border-bottom-">
              <h6 className="modal-title text-black fw-600">{title.toUpperCase()} VOUCHER </h6>
              <FontAwesomeIcon onClick={() => toggle()} className="close fs-28" icon={faXmark} />
            </div>
            <div className="modal-body">
              <VoucherFrom />
            </div>
            <div className="modal-footer border-top- flex-wrap justify-content-start justify-content-sm-end">
              <button
                className="btn btn-primary px-4 mr-2 "
                name='Save'
                onClick={() => toggle()}
              >SAVE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop show"></div>
    </React.Fragment>
  );
}

PopModal.propTypes = {
  toggle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default React.memo(PopModal, function (prevprops, nextprops) {
  return prevprops === nextprops;
});
