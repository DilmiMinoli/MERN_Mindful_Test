import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";

function Cards() {
  const [event, setEvent] = useState([]);


    useEffect(() => {
        function getEvent() {
            axios.get("/api/event/getevent").then((res) => {
                setEvent(res.data);
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getEvent();
    }, [])
  return (
    <div className='cards'>
      <h1>LATEST EVENTS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

          <>

        <div className="home">
        <div className="card-contain" style={{ marginLeft: 40, marginBottom: 40 }}>
        <div className="card-cont">
        <div className="card-contain" style={{ marginLeft: 40, marginBottom: 40 }}>
        {event.filter((p)=>p.status == "approved").map((event, index) => (


<div className="card-cont">

                <div className="card-tit">
                    <h3>{event.title}</h3>
                </div>
                
                    <div className="card-cont">
                        <div className="card-nam">
                          <label>Date:</label>
                            <h8>{event.date}</h8>
                        </div>
                        <div className="card-cont">
                        <div className="card-nam">
                            <h8>{event.time}</h8>
                        </div>
                        <div className="card-cont">
                        <div className="card-nam">
                            <h8>{event.venue}</h8>
                        </div>
                        <div className="card-cont">
                        <div className="card-nam">
                            <h8>{event.description}</h8>
                        </div>                       
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
        ))}         
</div>
       
        </div>
            
        </div>
        </div>
        </>     
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;