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
      console.log(data);

      if (data.events) {
        let events = data.events;

        events.sort(function(a, b) {
          return a.day - b.day
        });

        events.sort(function(a, b) {
          return a.month - b.month
        });

        this.setState({ events })

      } else {
        alert(`${data.message}`);
      }
      })
    .catch(err => alert(err));
  }


  deleteEvent = async(event_id) => {
    if (!window.confirm('Are you sure you want to delete this event?')) {
      return;
    }

    const URL = `https://event-scheduler-backend.herokuapp.com/api/delete`

    fetch(URL, {
      'method': 'DELETE',
      'headers': {
        'Content-Type' : 'application/json',
        'event_id' : event_id,
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);

      if (data.code === 200) {
        let events = this.state.events;
        let results = events.filter(event => event.event_id !== event_id);
        this.setState({ events : results });
      }
    })
    .catch(err => alert(err));
  }

  render(){
    return (
      <div className="Events">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1>Events</h1>
            <EventsForm getEvent={this.getEvent} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 offset-md-2">
            { this.state.events &&
              <EventsTable deleteEvent={this.deleteEvent} events={this.state.events} />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
