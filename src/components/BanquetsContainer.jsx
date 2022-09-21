import React from 'react'
import BanquetsFilter from './BanquetsFilter';
import BanquetsList from './BanquetsList';
import {withBanquetConsumer} from '../context';
import Loading from './Loading';

function BanquetsContainer({context}){
     const{loading,sortedRooms,rooms}=context;
     if(loading){
      return <Loading/>
     }
     return(
      <div>
      <BanquetsFilter rooms={rooms}/>
      <BanquetsList rooms={sortedRooms}/>
  </div>
     );
}

export default withBanquetConsumer(BanquetsContainer)



{/*import React from 'react'
import BanquetsFilter from './BanquetsFilter';
import BanquetsList from './BanquetsList';
import {BanquetConsumer} from '../context';
import Loading from './Loading';

export default function BanquetsContainer() {
  return (
    <>
    <BanquetConsumer>
         
          {value=>{
            const{loading,sortedRooms,rooms}=value;
          if(loading){
            return <Loading/>;
          }

            return(
              <div>
              <BanquetsFilter rooms={rooms}/>
              <BanquetsList rooms={sortedRooms}/>
          </div>
            );
          }}
    </BanquetConsumer>
   
    </>
  )
}*/}
