import React from 'react'

function Expertise() {
  return (
    <div>
        <div className='w-3/5 mx-auto flex flex-col gap-5 my-8'>
            <div className='font-semibold text-2xl text-center underline'>Our Expertise</div>
            <div className='flex'>
                <div className='col-5 flex flex-col justify-center items-center'><img src="/assets/home1.png" className="w-2/3" alt="" /></div>
                <div className='col-7 bg-cyan-100 rounded-2xl p-5'>
                    <h1 className='font-bold text-3xl text-center'>User-Friendly Interface</h1>
                    <div className='my-3'>
                        <p>Our app boasts an incredibly intuitive and user-friendly interface, ensuring that the process of searching, selecting, and booking train tickets is a breeze. With a clean and organized design, users can navigate effortlessly, making their booking experience enjoyable and efficient.</p>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className='col-7 bg-cyan-100 rounded-2xl p-5'>
                <h1 className='font-bold text-3xl text-center'>Extensive Train Options</h1>
                    <div className='my-3'>
                        <p>Gain access to an extensive database of train schedules and routes, providing users with a comprehensive list of options. Our app's advanced filtering and sorting features empower users to quickly find the most suitable trains based on their preferences, ensuring a tailored and convenient booking experience.</p>
                    </div>
                </div>
                <div className='col-5 flex flex-col justify-center items-center'><img src="/assets/home2.png" className="w-2/3" alt="" />
                </div>
            </div>
            <div className='flex'>
                <div className='col-5 flex flex-col justify-center items-center'><img src="/assets/home3.png" className="w-2/3" alt="" /></div>
                <div className='col-7 bg-cyan-100 rounded-2xl p-5'>
                <h1 className='font-bold text-3xl text-center'>Real Time Availability</h1>
                    <div className='my-3'>
                        <p>Stay informed with real-time updates on seat availability and ticket status. Receive instant confirmation for booked tickets, eliminating any uncertainty and allowing users to plan their journeys with confidence.</p>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className='col-7 bg-cyan-100 rounded-2xl p-5'>
                <h1 className='font-bold text-3xl text-center'>Personalized User Accounts</h1>
                    <div className='my-3'>
                        <p>Enjoy the benefits of a personalized user account, allowing for quick and efficient bookings. Save preferences, access booking history, and tailor the app to individual needs, providing a seamless and personalized experience for every user.</p>
                    </div>
                </div>
                <div className='col-5 flex flex-col justify-center items-center'><img src="/assets/home4.png" className="w-2/3" alt="" /></div>
            </div>
        </div>
    </div>
  )
}

export default Expertise