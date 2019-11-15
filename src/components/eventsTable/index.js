import React from 'react';
import '../../App.css';
import './index.css'

const EventsTable = (props) =>
  <div className="row EventsTable">
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Date</th>
          <th scope="col" colSpan="2">Notes</th>
          <th scope="col" className="del-column">Delete Event</th>
        </tr>
      </thead>
      <tbody>
        {props.events.map(({
          event_id,
          title,
          day,
          month,
          year,
          notes
        }) =>
          <tr key={event_id}>
            <td>{title}</td>
            <td colSpan="2">{month}/{day}/{year}</td>
            <td>{notes}</td>
            <td className="del-column">
              <button className="btn btn-danger" onClick={() => props.deleteEvent(event_id)}>Delete</button>
            </td>
          </tr>
          )}
      </tbody>
    </table>
  </div>

export default EventsTable;
