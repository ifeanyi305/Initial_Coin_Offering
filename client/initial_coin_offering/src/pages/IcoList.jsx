import React from 'react';
import Featured from '../component/Featured';

const IcoList = () => {
  return (
    <div className="container">
      <div className="header py-4 bg-[#D9D9D9]">
        <h1 className="text-[#D50DA8] text-center my-2 font-extrabold text-[#D50DA8]">Current ICO's</h1>
      </div>
      <div className="ico_list-container bg-[#D9D9D9]">
        <div>
          <div>
            <input type="search" name="search" id="search" />
            <div>
              <label for="ico">Sort by</label>
              <select name="ico" id="ico">
                <option value="upcoming">upcoming</option>
                <option value="live">live</option>
                <option value="ended">ended</option>
              </select>
            </div>
          </div>
          <div className="grid">
            <Featured />
            <Featured />
            <Featured />
            <Featured />
            <Featured />
            <Featured />
            <Featured />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IcoList;