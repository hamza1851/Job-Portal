import React from "react";
import InputField from "../components/InputField";

const JobPostingData = ({ handleChange }) => {
  const now = new Date();

  const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
  const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
  const thirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

  const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0, 10);
  console.log(twentyFourHoursAgoDate);
  const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10);
  console.log(sevenDaysAgoDate);
  const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0, 10);
  console.log(thirtyDaysAgoDate);

  return (
    <div>
      <h4>Date Of Posting</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value={""}
            onChange={handleChange}
          />
          <span className="checkmark"></span>All Time
        </label>
        <InputField
          handleChange={handleChange}
          value={twentyFourHoursAgoDate}
          title="Last 24 hours"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={sevenDaysAgoDate}
          title="Last 7 days"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={thirtyDaysAgoDate}
          title="Last Month"
          name="test"
        />
      </div>
    </div>
  );
};

export default JobPostingData;
