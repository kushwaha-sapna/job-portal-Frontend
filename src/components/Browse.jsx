// import React, { useEffect } from 'react'
// import Navbar from './shared/Navbar'
// import { useDispatch, useSelector } from 'react-redux';
// import { setSearchedQuery } from '@/redux/jobSlice';
// import useGetAdminJobs from '@/hooks/useGetAllAdminJobs';

// const randomJobs=[1,2,3]
// const Browse = () => {
//   useGetAllJobs();
//   const {allJobs}=useSelector(store=>store.job);
//   const dispatch=useDispatch();
//   useEffect(()=>{
//     return ()=>{
//       dispatch(setSearchedQuery(""))
//     }
//   },[])
//   return (
//     <div>
//       <Navbar/>
//       <div className='max-w-7xl mx-auto my-10'>  
//         <h1 className='font-bold text-xl my-10'> Search Result ({ allJobs.length})</h1>
//         <div className='grid grid-cols-3 gap-4'>
//         {
// allJobs.map((item,index)=>{
//     return (
//         <Job key={job._id} job={job}/>
//     )
// })
//         }
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Browse




import React, { useEffect } from 'react';
import Navbar from './shared/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import Job from './Job';

const Browse = () => {
  useGetAllJobs();
  const { allJobs } = useSelector(store => store.job);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto my-10'>
        <h1 className='font-bold text-xl my-10'>Search Result ({allJobs.length})</h1>
        <div className='grid grid-cols-3 gap-4'>
          {
            allJobs.map((item) => {
              return (
                <Job key={item?._id} job={item} />
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Browse;