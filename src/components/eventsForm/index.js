import React from 'react';
import '../../App.css';
import './index.css'

function EventsForm(props) {
  return (
    <form className="ScheduleForm" onSubmit={props.getEvent}>

      <div className="form-group">
        <label>Day</label>
        <input type="number" className="form-control" min='1' max='31' name="day" />
      </div>
      <div className="form-group">
        <label>Month</label>
        <input type="number" className="form-control" min='1' max='12' name="month" />
      </div>
      <div className="form-group">
        <label>Year</label>
        <input type="number" className="form-control" min='2019' max='2100' name="year" required />
      </div>

      <button type="submit" className="btn btn-primary">Show Events</button>
    </form>
  );
}

export default EventsForm;
