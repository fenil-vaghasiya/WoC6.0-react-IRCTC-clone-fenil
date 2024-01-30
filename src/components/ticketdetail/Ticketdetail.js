import React from 'react'

const ticket = {
    "status": true,
    "message": "Success",
    "timestamp": 1706550777275,
    "data":
      {
        "train_number": "12951",
        "train_name": "Rajdhani Express",
        "run_days": [
          "Tue",
          "Thu",
          "Fri",
          "Sun"
        ],
        "train_src": "MMCT",
        "train_dstn": "NDLS",
        "from_std": "17:24",
        "from_sta": "17:22",
        "local_train_from_sta": 1042,
        "to_sta": "08:32",
        "to_std": "08:32",
        "from_day": 0,
        "to_day": 1,
        "d_day": 0,
        "from": "BVI",
        "to": "NDLS",
        "from_station_name": "BORIVALI",
        "halt_stn": 7,
        "distance": 1354,
        "to_station_name": "NEW DELHI",
        "duration": "15:8",
        "special_train": false,
        "train_type": "RAJ",
        "score": 25,
        "score_train_type": 5,
        "score_booking_requency": 0,
        "frequency_perc": 0,
        "from_distance_text": "",
        "to_distance_text": "",
        "duration_rating": 1,
        "score_duration": 10,
        "score_std": 10,
        "score_user_preferred": 0,
        "train_date": "30-01-2024",
        "class_type": [
          "3A",
          "2A",
          "1A"
        ]
      }
  }

function Ticketdetail() {

    let days = {"Mon":false,"Tue":false,"Wed":false,"Thu":false,"Fri":false,"Sat":false,"Sun":false};

    ticket.data.run_days.forEach((day)=>{
        if(day=="Mon")  days.Mon=true;
        if(day=="Tue")  days.Tue=true;
        if(day=="Wed")  days.Wed=true;
        if(day=="Thu")  days.Thu=true;
        if(day=="Fri")  days.Fri=true;
        if(day=="Sat")  days.Sat=true;
        if(day=="Sun")  days.Sun=true;
    });

    console.log(days);
  return (
    <div>
        <div className='py-4'>
            <div className='h-1/3 bg-blue-100 w-4/5 mx-auto rounded-lg shadow-md p-3'>
                <div className='h-1/4 flex justify-between items-center p-2 '>
                    <div className='font-bold'>{ticket.data.train_name}</div>
                    <div className='text-center text-blue-900'>
                        <p className='font-bold'>Runs on:</p>
                        <span className={`px-3 cursor-pointer font-semibold ${days.Mon?'text-blue-950':'text-gray-400'}`} title='Sun'>M</span>
                        <span className={`px-3 cursor-pointer font-semibold ${days.Tue?'text-blue-950':'text-gray-400'}`} title='Tue'>T</span>
                        <span className={`px-3 cursor-pointer font-semibold ${days.Wed?'text-blue-950':'text-gray-400'}`} title='Wed'>W</span>
                        <span className={`px-3 cursor-pointer font-semibold ${days.Thu?'text-blue-950':'text-gray-400'}`} title='Thu'>T</span>
                        <span className={`px-3 cursor-pointer font-semibold ${days.Fri?'text-blue-950':'text-gray-400'}`} title='Fri'>F</span>
                        <span className={`px-3 cursor-pointer font-semibold ${days.Sat?'text-blue-950':'text-gray-400'}`} title='Sat'>S</span>
                        <span className={`px-3 cursor-pointer font-semibold ${days.Sun?'text-blue-950':'text-gray-400'}`} title='Sun'>S</span>
                    </div>
                    <div><button className='btn border-1 text-blue-900 border-blue-900 hover:bg-blue-950 hover:text-white'>TRAIN SCHEDULE</button></div>
                </div>
                <div className='h-1/4 flex justify-between items-center p-2 text-gray-400 font-semibold'>
                    <div className=''>{ticket.data.to_sta} | {ticket.data.train_src} | {ticket.data.train_date}</div>
                    <div className='text-center'>
                        <p>{ticket.data.duration}</p>
                    </div>
                    <div>{ticket.data.to_std} | {ticket.data.train_dstn} | {ticket.data.train_date}</div>
                </div>
                <div className='h-1/4 flex items-center gap-3 p-2'>
                    <div>Discount On</div>
                    <div className='gap-3 flex'>
                        {ticket.data.class_type.map((item)=>{
                            return(
                                <button className='btn border-1 text-blue-900 border-blue-900 hover:bg-blue-950 hover:text-white'>{item}</button>
                            )
                        })}
                        {/* <button className='btn border-1 text-blue-900 border-blue-900 hover:bg-blue-950 hover:text-white'>ACCC</button> */}
                    </div>
                </div>
                <div className='h-1/4 flex items-center p-2'>
                    <div className='flex gap-3'>
                        <button className='btn border-1 text-blue-900 border-blue-900 hover:bg-blue-950 hover:text-white'>REMOVE FROM BOOKLIST --</button>
                        <button className='btn border-1 text-blue-900 border-blue-900 hover:bg-blue-950 hover:text-white'>BOOK</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ticketdetail