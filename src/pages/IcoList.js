import React from 'react';
import Featured from '../component/Featured';

const IcoList = () => (
  <>
    <div className="header mb-2 dark:bg-[#2D3133] py-4 bg-[#D9D9D9]">
      <h1 className="text-[#D50DA8] text-center my-2 font-extrabold">Launchpad list</h1>
    </div>
    <section className="flex justify-center item-center mx-10">
      <div className="container">
        <div className="ico_list-container mb-3 dark:bg-[#2D3133] rounded-3xl p-6 bg-[#D9D9D9]">
          <div>
            <div className="md:flex justify-around p-4">
              <input type="search" className="bg-[#fffff] border-2 w-100 p-2 rounded-full border-[#D50DA8]" name="search" id="search" placeholder="Search ICO" />
              <div className="sm:mt-4">
                <span htmlFor="ico">Sort by</span>
                <select name="ico" id="ico">
                  <option value="upcoming">upcoming</option>
                  <option value="live">live</option>
                  <option value="ended">ended</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
    </section>
  </>
);

export default IcoList;
