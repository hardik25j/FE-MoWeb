import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Autocomplete from 'react-autocomplete';
import { makePublicRequest } from '../interceptor.js/interceptor';

const AutoCompleteInput = (props) => {
  const { accDetail, label, labelClassName, onChange } = props;
  const { id, name } = accDetail[0];
  const [items, setItems] = useState([]);

  useEffect(() => {
    // makePublicRequest('get', '/user/list') // also we can use custom API to get the list string moweb-node server
    makePublicRequest('get', '/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole') // using randomuser.me API to get the list 
      .then(response => {
        setItems(response.data.map((item) => ({ label: item.first })))
      })
      .catch(err => Promise.reject(err));
  }, []);


  return (
    <React.Fragment>
      <label
        className={labelClassName}
        htmlFor={name}
      >
        {label}{' '}
      </label>
      <Autocomplete
        // Items is displayed while the user type
        items={items}
        shouldItemRender={(item, value) =>
          item.label.toLowerCase().indexOf(value.toLowerCase()) === 0
        }
        getItemValue={(item) => item.label}
        renderItem={(item, isHighlighted) => (
          // Styling to highlight selected item
          <div className='form-control border-0'
            style={{
              position: 'relative',
              background: isHighlighted ? "rgba(2,117,216,0.2)" : "white",
            }}
            key={item.id}
          >
            {item.label}
          </div>
        )}
        // Added style in Autocomplete component
        inputProps={{
          className: 'form-control',
          placeholder: "Search language"
        }}
        name='name'
        value={name}
        onChange={(e) => onChange('name', e.target.value, id)}
        onSelect={(value) => onChange('name', value, id)}
      />
    </React.Fragment>
  );
}

AutoCompleteInput.defaultProps = {
  label: '',
  labelClassName: '',
  onChange: () => { },

};

AutoCompleteInput.propTypes = {
  accDetail: PropTypes.arrayOf(
    PropTypes.shape({
      credit: PropTypes.string,
      debit: PropTypes.string,
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      narration: PropTypes.string,
    })
  ),
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  onChange: PropTypes.func,
};

export default React.memo(AutoCompleteInput, function (prevprops, nextprops) {
  return prevprops === nextprops;
});