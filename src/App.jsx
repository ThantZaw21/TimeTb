import React from 'react'
import DateTime from './DateTime'
const App = () => {
  return (
    <div className='max-h-screen w-full px-30 py-5 '>
      <div className='bg-cyan-900 text-white p-5 '>

        <div className='flex justify-center items-center'>
                  <div>
          <div className='flex justify-center items-center pt-10'>
            <img src="/src/assets/Meiktila.png" className=' h-30 w-auto' alt="Meikhtila" />
          </div>
        </div>
        <div className='pl-10 '>
          <div className='text-3xl font-bold pt-2'>
            University Of Computer Studies Meikhtila
          </div>
          <div className='font-medium text-lg pt-2 '>2025-26 Fourth Year Senior - Semester VIII</div>
      </div>
        </div>
      <div className='flex justify-between items-center '>
         <div className='mt-2 flex bg-gray-400 backdrop-blur-2xl text-medium text-green-900 w-max p-1 px-2 rounded-2xl'><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
          fill="currentColor" viewBox="0 0 24 24" >
          <path d="M3 13h1v7c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h1c.4 0 .77-.24.92-.62.15-.37.07-.8-.22-1.09l-8.99-9a.996.996 0 0 0-1.41 0l-9.01 9c-.29.29-.37.72-.22 1.09s.52.62.92.62Zm9-8.59 6 6V20H6v-9.59z"></path>
          </svg>Room-E5</div>

 <div className="relative bg-black/40 p-2 w-2xxs rounded-xl">
      <DateTime />
    </div>
          </div>
      </div>
      
      {/* <div className='overflow-auto'> 
        <table className='w-full border border-b-black text-center '>
          <thead className='bg-gray-400'>
            <tr>
              <th>Time</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>8:30 - 9:30</td>
              <td>Math</td>
              <td>Math</td>
              <td>Math</td>
              <td>Math</td>
              <td>Math</td>
            </tr>
          </tbody>
        </table>
      </div> */}
     <div className='flex justify-center items-center mt-9'>
      {/* Head */}
       <div className='grid grid-cols-8 gap-7 p-9 w-full max-w-7xl bg-gray-200  shadow-gray-300 shadow-xl'>
        <div className='bg-gray-400 text-center font-bold p-3 rounded-lg'>Time</div>
        <div className='bg-gray-400 text-center font-bold p-3 rounded-lg'>8:30 - 9:30</div>
        <div className='bg-gray-400 text-center font-bold p-3 rounded-lg'>9:35 - 10:35</div>
        <div className='bg-gray-400 text-center font-bold p-3 rounded-lg'>10:40 - 11:40</div>
        <div className='bg-gray-400 text-center font-bold p-3 rounded-lg'>11:40 -12:40</div>
        <div className='bg-gray-400 text-center font-bold p-3 rounded-lg'>12:40 - 1:40</div>
        <div className='bg-gray-400 text-center font-bold p-3 rounded-lg'>1:45 - 2:45</div>
        <div className='bg-gray-400 text-center font-bold p-3 rounded-lg'>2:50 -3:50</div>
        {/* Row 1*/}
                <div className='bg-gray-400 text-center font-bold p-3 rounded-lg flex justify-center items-center'>Monday</div>
        <div className='bg-gray-400 text-center font-bold p-3 rounded-lg flex justify-center items-center'>Parallel Computing</div>
        <div className='bg-gray-400 text-center font-bold p-3 rounded-lg flex justify-center items-center'>AI</div>
        <div className='bg-gray-400 text-center font-bold p-3 rounded-lg flex justify-center items-center'>Cloud Computing</div>
        <div className='row-span-5 bg-gray-400 text-center font-bold rounded-lg3 flex justify-center items-center h-full'>
          <span className='transform -rotate-90 whitespace-nowrap'>Lunch</span>
        </div>
        <div className='bg-gray-400 text-center font-bold p-3 rounded-lg flex justify-center items-center'>Database</div>
        <div className='col-span-2 bg-gray-400 text-center font-bold p-3 rounded-lg flex justify-center items-center'>Maths</div>
    {/* Row 2 */}
        <div className='bg-gray-400 text-center font-bold p-3 rounded-lg flex justify-center items-center'>Tuesday</div>
        <div className='col-span-2 bg-gray-400 text-center font-bold p-3 rounded-lg flex justify-center items-center'>Maths</div>
        <div className='bg-gray-400 text-center font-bold p-3 rounded-lg flex justify-center items-center'>OODD</div>
        <div className='bg-gray-400 text-center font-bold p-3 rounded-lg flex justify-center items-center'>Parallel Computing</div>
        <div className='bg-gray-400 text-center font-bold p-3 rounded-lg flex justify-center items-center'>E-Commerce</div>
        <div className='bg-gray-400 text-center font-bold p-3 rounded-lg flex justify-center items-center'>AI</div>

        {/* Row 3 */}
                <div className='bg-gray-400 text-center font-bold  p-3 flex justify-center items-center rounded-lg'>Wednesday</div>
        <div className='col-span-2 bg-gray-400 text-center font-bold p-3 flex justify-center items-center rounded-lg'>OODD</div>
        <div className='bg-gray-400 text-center font-bold p-3 flex justify-center items-center rounded-lg'>Parallel Computing</div>
        <div className='bg-gray-400 text-center font-bold p-3 flex justify-center items-center rounded-lg'>Cloud (Lab)</div>
        <div className='bg-gray-400 text-center font-bold p-3 flex justify-center items-center rounded-lg'>Database</div>
        <div className='bg-gray-400 text-center font-bold p-3 flex justify-center items-center rounded-lg'>E-Commerce</div>
        {/* Row 4 */}
                <div className='bg-gray-400 text-center font-bold  p-3 flex justify-center items-center rounded-lg'>Thursday</div>
        <div className='bg-gray-400 text-center font-bold p-3 flex justify-center items-center rounded-lg'>Database</div>
        <div className='bg-gray-400 text-center font-bold p-3 flex justify-center items-center rounded-lg'>Cloud Computing</div>
        <div className='bg-gray-400 text-center font-bold p-3 flex justify-center items-center rounded-lg'>AI(Lab)</div>
        <div className='bg-gray-400 text-center font-bold p-3 flex justify-center items-center rounded-lg'>Self-study</div>
        <div className='bg-gray-400 text-center font-bold p-3 flex justify-center items-center rounded-lg'>E-commerce</div>
        <div className='bg-gray-400 text-center font-bold p-3 flex justify-center items-center rounded-lg'>OODD</div>
        {/* Row 5 */}
                <div className='bg-gray-400 text-center font-bold  p-3 flex justify-center items-center rounded-lg'>Friday</div>
        <div className='bg-gray-400 text-center font-bold p-3 flex justify-center items-center rounded-lg'>AI</div>
        <div className='bg-gray-400 text-center font-bold p-3 flex justify-center items-center rounded-lg'>Cloud Computing</div>
        <div className='bg-gray-400 text-center font-bold p-3 flex justify-center items-center rounded-lg'>Parallel Computing</div>
        <div className='bg-gray-400 text-center font-bold p-3 flex justify-center items-center rounded-lg'>Library</div>
        <div className='bg-gray-400 text-center font-bold p-3 flex justify-center items-center rounded-lg'>E-commerce</div>
        <div className='bg-gray-400 text-center font-bold p-3 flex justify-center items-center rounded-lg'>Database</div>
      </div>

      
      
     </div>

     <div>
      <div className='mt-15 pl-30 grid grid-rows-6 gap-4'>
        <div className='bg-blue-400  p-14 w-2xl'><span>CST-4211 - Distributed and Parallel Computing</span></div>
        <div className='bg-blue-400  p-14 w-2xl'><span>CST-4242 - Modeling and Simulations</span></div>
        <div className='bg-blue-400  p-14 w-2xl'><span>CST-4223 - Object-Oriented Design and Development</span></div>
        <div className='bg-blue-400  p-14 w-2xl'><span>CST-4225 - Advance Database System</span></div>
        <div className='bg-blue-400  p-14 w-2xl'><span>CST-4216 - Strategic for Emerging Technologies(Cloud Computing)</span></div>
        <div className='bg-blue-400  p-14 w-2xl'><span>CST-4257 - Business Information System(Digital Business and E-Commerce)</span></div>
      </div>
     </div>
     <div className="grid grid-rows-6 gap-4 mt-6 pl-8">
  <div className="bg-blue-400 p-4 rounded w-max">
    <div className="font-bold">CST-4211 - Distributed and Parallel Computing</div>
    <div className="text-sm text-gray-100">Dr. John Doe</div>
  </div>

  <div className="bg-blue-400 p-4 rounded w-max">
    <div className="font-bold">CST-4242 - Modeling and Simulations</div>
    <div className="text-sm text-gray-100">Prof. Jane Smith</div>
  </div>

  <div className="bg-blue-400 p-4 rounded w-max">
    <div className="font-bold">CST-4223 - Object-Oriented Design and Development</div>
    <div className="text-sm text-gray-100">Dr. Alan Turing</div>
  </div>
</div>

    </div>
  )
}

export default App