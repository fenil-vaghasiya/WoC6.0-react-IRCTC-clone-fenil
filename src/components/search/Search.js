import React, { useEffect, useState } from 'react'
import { data } from './stations';
import Ticketdetail from '../ticketdetail/Ticketdetail';
import { Station } from './Station';
import { CgArrowsExchangeAltV } from "react-icons/cg";
import ResultTickets from '../ticketdetail/ResultTickets';

const url = 'https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations?fromStationCode=BVI&toStationCode=NDLS&dateOfJourney=2024-01-30';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '230dc6f9camsh95860a01ea9c2c1p1c2042jsn513a2e6d2eba',
		'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
	}
};

function Search() {
  let [responseData,setResponseData] = useState('');

  
    const [from,setFrom] = useState("");
    const [dest,setDest] = useState("");
    const [fcode,setFcode] = useState("");
    const [dcode,setDcode] = useState("");

    const setFromVal = (val)=>{
        setFrom(val.station);
        setFcode(val.code);
    }
    const setDestVal = (val)=>{
        setDest(val.station);
        setDcode(val.code);
    }
    const change = ()=>{
        const to = dest;
        setDest(from);
        setFrom(to);
    }

    const [date,setDate] = useState("");
    const [allclass,setAllclass] = useState("");
    const [category,setCategory] = useState("");
    // const [formdata,setFormdata] = useState("");
    const [trains,setTrains] = useState([]);

    // const fetchData = async()=>{ 
    //     try {
    //       const response = await fetch(url, options);
    //       const result = await response.text();
    //       console.log(result);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }
    
    
    
    const handleSearch = async()=>{
        const res = await fetch(`https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations?fromStationCode=${fcode}&toStationCode=${dcode}&dateOfJourney=${date}`,options);
        const finaldata = await res.json();
        console.log("fdata",finaldata);
        setTrains(finaldata);
    }
    console.log("station",Station.data[0]);
    // useEffect(()=>{
    //     handleSearch();
    //   },[handleSearch]);
  return (
    <div>
        <div className='h-full w-full'>
        <form>
            <div className='flex flex-col items-center p-5'>
                <h1 className='font-semibold text-4xl'>Start Your Journy</h1>
                <div className='flex flex-col item-start w-1/3'>
                    <label htmlFor="" className='text-xl pb-2'>From :</label>
                    <input type="text" name="" value={from} onChange={(e)=>setFrom(e.target.value)} placeholder="Source Location" className='border-1 border-gray-500 p-3 rounded-md outline-none w-full'/>
                    <div className='rounded-md w-full'>
                        {
                            data
                            .filter((item)=>{
                                return from.toLowerCase() === "" ? "" : item.station.toLowerCase().includes(from)
                            })
                            .map((item)=>{
                                return(
                                    <div className=' bg-gray-200 my-1 rounded-md outline-none w-full'>
                                        <button  onClick={()=>setFromVal(item)} className='flex w-full p-3 rounded-md'>
                                            {item.station} - {item.code}  {item.state}
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='flex justify-center items-center w-full h-full py-3'>
                    <button className='btn bg-blue-900 text-white hover:bg-blue-950 text-3xl' onClick={change}><CgArrowsExchangeAltV /></button>
                </div>
                <div className='flex flex-col item-start w-1/3'>
                    <label htmlFor="" className='text-xl pb-2'>To :</label>
                    <input type="text" name="" value={dest} onChange={(e)=>setDest(e.target.value)} placeholder="Destination" className='border-1 border-gray-500 p-3 rounded-md outline-none w-full'/>
                    <div className='rounded-md w-full'>
                        {
                            data
                            .filter((item)=>{
                                return dest.toLowerCase() === "" ? "" : item.station.toLowerCase().includes(dest)
                            })
                            .map((item)=>{
                                return(
                                    <div className=' bg-gray-200 my-1 rounded-md outline-none w-full'>
                                        <button  onClick={()=>setDestVal(item)} className='flex w-full p-3 rounded-md'>
                                            {item.station} - {item.code}  {item.state}
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            
            <div className=''>
                <div className='flex justify-center w-full p-3 gap-3'>
                    <div className='w-1/3 flex flex-col border-2 border-blue-900 rounded-md p-2'>
                        <label htmlFor="date" className='font-bold text-xl'>Date</label>
                        <input type="date" className="p-2 rounded-md w-2/3 border-1 border-gray-500" value={date} onChange={(e)=>setDate(e.target.value)}/>
                    </div>
                    <div className='w-1/3 flex flex-col border-2 border-blue-900 rounded-md p-2 shadow-2xl'>
                        <label htmlFor="state" className='font-bold text-xl'>All Classes</label>
                        <select name="allclass" value={allclass} onChange={(e)=>setAllclass(e.target.value)} className='border-1 border-gray-500 p-3 rounded-md outline-none'>
                            <option value="All Classes" selected>All Classes</option>
                            <option value="2S">Second Sitting (2S)</option>
                            <option value="CC">AC Chair Car (CC)</option>
                            <option value="EC">Exec. Chair Car (EC)</option>
                        </select>
                    </div>
                    <div className='w-1/3 flex flex-col border-2 border-blue-900 rounded-md p-2'>
                        <label htmlFor="category" className='font-bold text-xl'>Categories</label>
                        <select name="category" value={category} onChange={(e)=>setCategory(e.target.value)} className='border-1 border-gray-500 p-3 rounded-md outline-none'>
                            <option value="GENERAL">GENERAL</option>
                            <option value="LADIES">LADIES</option>
                            <option value="LOWER">LOWER BIRTH/SR.CITIZEN</option>
                            <option value="PERSON">PERSON WITH DISABILITY</option>
                            <option value="DUTY">DUTY PASS</option>
                            <option value="TATKAL">TATKAL</option>
                        </select>
                    </div>
                </div>
                <div className='flex justify-center p-3'>
                    <button onClick={handleSearch} className='btn bg-blue-900 text-white hover:bg-blue-950 px-4'>SEARCH</button>
                </div>
            </div>
        </form>
        </div>
        <div>
            {/* {
                
                Object.keys(Station.data).forEach((train)=>{
                    return(
                        <div>
                            <Ticketdetail ticket={train}/>
                        </div>
                    )
                })

            } */}
            <ResultTickets/>
        </div>
    </div>
  )
}

export default Search