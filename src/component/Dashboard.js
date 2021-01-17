import React, {useState,useEffect } from 'react'
import axios from 'axios'




export default function Dashboard() {

const [records, setRecord] = useState([])

useEffect( () => {
    axios.get("https://demo5636362.mockable.io/stats")
    .then(res =>{
        console.log(res.data.data)
        setRecord(res.data.data);
    } )
    .catch(err => {
        console.log(err)

    })
})



    return (
        <div>
        <section className="bg-dark">
            <div className="row pl-5 pt-5 pb-5 pr-5 d-flex justify-content-center align-items-center h-100">
             <div className="col-12 bg-white overflow-scroll">
              <dl>
                <dt>
                   Bar Chart 
                 </dt>
                  {records ? 
                   records.map((value,index) =>   (
                   <dd className={`percentage percentage-${value.stat}`} key={index}>
                       <span className="text">Month: {value.month}, <br/> Stats: {value.stat}</span></dd>)  
                   ):null}
                </dl>
            </div>
        </div>
        </section>
        </div>
    )
}
