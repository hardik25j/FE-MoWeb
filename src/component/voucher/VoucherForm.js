import React, { useState } from 'react';
import AccDetails from '../../common_component/AccDetails';
import DropDown from '../../common_component/DropDown';
import Input from '../../common_component/Input';
import { voucherType } from './staticData';
import DatePickerComp from '../../common_component/DatePickerComp';
import { getDates } from '../../globals/utils';

const VoucherFrom = () => {
  const initialAcc = {
    id: Math.random().toString(16).slice(2),
    name: '',
    debit: '',
    credit: '',
    narration: '',
  }
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [number, setNumber] = useState('');
  const [accDetails, addAccDetails] = useState([]);


  const handleAddAcc = () => addAccDetails([...accDetails, initialAcc]);

  const handleDeleteAcc = (id) => addAccDetails(accDetails.filter((i) => i.id !== id));

  const handleChange = (name, val, accID) =>
    addAccDetails(accDetails.map(item => item.id === accID
      ? { ...item, [name]: val }
      : item));

  return (<React.Fragment>
    <form>
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-4">
              <div className="form-group">
                <DropDown
                  label="Voucher Type"
                  labelClassName="text-black fw-700 mb-1 fs-14"
                  name="type"
                  onChange={values => setType(values)}
                  options={voucherType}
                  isSortedOption={true}
                  value={type}
                />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="form-group">
                <DatePickerComp
                  className="form-control"
                  name="date"
                  label="Voucher Date"
                  dateFormat="dd-MM-yyyy"
                  placeholder="DD-MM-YYYY"
                  labelClassName="text-black fw-700 mb-1 fs-14"
                  selected={date}
                  onChange={(date) => setDate(date)}
                  disableDates={getDates()}
                />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="form-group">
                <Input
                  className="form-control"
                  labelClassName="text-black fw-700 mb-1 fs-14"
                  label="Voucher Number"
                  name="number"
                  onChange={e => setNumber(e.target.value)}
                  placeholder="Type here"
                  value={number}
                />
              </div>
            </div>
          </div>





          {/*---------------------Account Details---------------------*/}
          <div className="accountContainer row">
            {accDetails && accDetails.map((item) => <AccDetails
              accDetail={accDetails.filter((accItems) => accItems.id === item.id)}
              handleChange={handleChange}
              key={item.id}
              onClickDelete={handleDeleteAcc}
            />)}
          </div>

        </div>
      </div>
    </form>

    <button className="btn btn-outline-primary my-2" onClick={handleAddAcc}>
      + Add More
    </button>
  </React.Fragment >);
}

export default VoucherFrom;