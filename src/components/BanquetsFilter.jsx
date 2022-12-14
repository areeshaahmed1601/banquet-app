import React from 'react'
import {useContext} from 'react';
import {BanquetContext} from '../context';
import Title from '../components/Title';
//get all unique value

const getUnique=(items,value)=>{
  return[...new Set(items.map(items=>items[value]))];
}
export default function BanquetsFilter({rooms}) {
  const context=useContext(BanquetContext);
  const{
    handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets
  }=context;
//get unique types

  let types=getUnique(rooms,'type');

  //add all
types=['all',...types];
//map to jsx
types=types.map((item,index)=>{
  return <option value={item} key={index}>{item}</option>
})
  return (
   <section className="filter-container">
    <Title title="search rooms"/>
    <form className="filter-form">
       {/*select type*/}

       <div className="form-group">
        <label htmlFor="type">room type</label>
        <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
            {types}
        </select>
       </div>
      {/*end select type*/} 
    </form>
   </section>
  )
}
{/*4:20:34*/}