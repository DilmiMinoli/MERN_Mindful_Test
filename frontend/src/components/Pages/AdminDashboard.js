import React, { useState } from 'react'
import Layout from '../Layout'
import Topbar from '../topbar/TopBar';
import axios from 'axios';

export default function AdminDashboard() {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [venue, setVenue] = useState("");
    const [time, setTime] = useState("");
    const [description, setDescription] = useState("");

    function sendData(e) {
        e.preventDefault();

        let data={
            'title':title,
            'date':date,
            'venue':venue,
            'description':description,
            'time':time
        }
        
        axios.post( 
          '/api/event/addevent',
          data,
         
        ).then(
            alert("Successfully Added"),
            console.log).catch(
                alert("There are some Error"),
                console.log)

    }

   
    return (
        <Layout>
        <div>
        <Topbar />
        <div className="header">
  <div className="headerTitles">
    <span className="headerTitleLg">Add Events</span>
  </div>
  <img
    className="headerImg"
    src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    alt=""
  />
</div>
<div className="addConference">
        <div className="container" >
            <form className="conferenceForm"  onSubmit={sendData}>
                <div className="form-group">
                    <label for="title">Events</label>
                    <input type="text" className="form-control" id="title" placeholder="Enter Event" onChange={(e) => {
                        setTitle(e.target.value)
                    }} />

                </div>
                <div class="mb-3">
                    <label htmlFor="description" class="form-label">Description</label>
                    <textarea class="form-control"
                        id="description"
                        rows="3"
                        name="description"
                        placeholder="Enter Description"
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }}
                        
                        >
                    </textarea>
                </div>
                


                <div className="form-group">
                    <label for="date">Date</label>
                    <input type="text" className="form-control" id="date" placeholder="Enter date" onChange={(e) => {
                        setDate(e.target.value);
                    }}
                     />
                </div>
        
                <div className="form-group">
                    <label for="venue">Venue</label>
                    <input type="text" className="form-control" id="venue" placeholder="Enter Conductor name" onChange={(e) => {
                        setVenue(e.target.value);
                    }} />

                </div>
                <div className="form-group">
                    <label for="time">Time</label>
                    <input type="text" className="form-control" id="time" placeholder="Enter Conductor name" onChange={(e) => {
                        setTime(e.target.value);
                    }} />

                </div>
        
                <button type="submit" className="regbtn">Submit</button>
            </form>
        </div>
        </div>
        </div>
        </Layout>
    )
}
