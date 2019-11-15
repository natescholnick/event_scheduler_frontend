import React from 'react';
import './App.css';

function ScheduleForm(props) {
  return (
    <form className="ScheduleForm" onSubmit={props.saveEvent}>

      <div className="form-group">
        <label>Title</label>
        <input type="text" className="form-control" name="title" required />
      </div>
      <div className="form-group">
        <label>Day</label>
        <input type="number" className="form-control" min='1' max='31' name="day" required />
      </div>
      <div className="form-group">
        <label>Month</label>
        <input type="number" className="form-control" min='1' max='12' name="month" required />
      </div>
      <div className="form-group">
        <label>Year</label>
        <input type="number" className="form-control" min='2019' max='2100' name="year" required />
      </div>
      <div className="form-group">
        <label>Notes</label>
        <textarea type="text" className="form-control" name="notes" />
      </div>

      <button type="submit" className="btn btn-primary">Save Event</button>
    </form>
  );
}

export default ScheduleForm;
