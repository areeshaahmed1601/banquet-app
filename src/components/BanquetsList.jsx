import React from 'react'
import Banquet from './Banquet'

export default function BanquetsList({rooms}) {
if(rooms.length===0){
    return (
        <div className="empty-search">
            <h3>unfortunately no banquets matched your search</h3>
        </div>
    )
}
return (
    <section className="roomslist">
        <div className="roomslist-center">
           {rooms.map(item=>{
            return <Banquet key={item.id} room={item}/>;
           })} 
        </div>
    </section>
  )
}
