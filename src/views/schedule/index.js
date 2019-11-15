import React from 'react';
import './App.css';
import ScheduleForm from '../../componenets/scheduleForm';

class Schedule extends React.Component {
  saveEvent = async(e) => {
    e.preventDefault(0);

    let title = e.target.elements.title.value;
    let day = e.target.elements.day.value;
    let month = e.target.elements.month.value;
    let year = e.target.elements.year.value;
    let notes = e.target.elements.notes.value;

    const URL = `https://event-scheduler-backend.herokuapp.com/api/save`

    fetch(URL, {
      'method': 'POST',
      'headers': {
        'Content-Type' : 'application/json',
        'title' : title,
        'day' : day,
        'month' : month,
        'year' : year,
        'notes' : notes
      }
    })
    .then(res => res.json())
    .then(data => alert(`${data.message}`))
    .catch(err => alert(err));
  }

  render(){
    return (
      <div classname="row Schedule">
        <div className="col-md-6 offset-md-3">
          <h1>Schedule an Event</h1>
          <ScheduleForm saveEvent={this.saveEvent} />
        </div>
      </div>
    );
  }
}

export default Schedule;
