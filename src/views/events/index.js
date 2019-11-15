import React from 'react';
import '../../App.css';
import './index.css'
import EventsForm from '../../components/eventsForm';
import EventsTable from '../../components/eventsTable';

class Event extends React.Component {
  constructor() {
    super();

    this.state = {
      events: undefined,
    }
  }


  getEvent = async(e) => {
    e.preventDefault();

    let day = e.target.elements.day.value;
    let month = e.target.elements.month.value;
    let year = e.target.elements.year.value;

    const URL = `https://event-scheduler-backend.herokuapp.com/api/retrieve`

    fetch(URL, {
      'method': 'GET',
      'headers': {
        'Content-Type' : 'application/json',
        'day' : day,
        'month' : month,
        'year' : year,
      }
    })
    .then(res => res.json())
    .then(data => {
      this.setState({ events: data.events })
      console.log(this.state.events);
      })
    .catch(err => alert(err));
  }


  deleteEvent = event_id => {

    const URL = `https://event-scheduler-backend.herokuapp.com/api/delete`

    fetch(URL, {
      'method': 'DELETE',
      'headers': {
        'Content-Type' : 'application/json',
        'event_id' : event_id,
      }
    })
    .then(res => res.json())
    .then(data => alert(`${data.message}`))
    .catch(err => alert(err));
  }

  render(){
    return (
      <div className="row Event">
        <div className="col-md-8 offset-md-2">
          <h1>Events</h1>
          <EventsForm getEvent={this.getEvent} />
          { this.state.events &&
            <EventsTable deleteEvent={this.deleteEvent} events={this.state.events} />
          }
        </div>
      </div>
    );
  }
}

export default Event;
