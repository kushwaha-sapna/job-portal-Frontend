// import React, { useEffect } from 'react'
// import Navbar from '../shared/Navbar'
// import ApplicantsTable from './ApplicantsTable'
// import { useParams } from 'react-router-dom'
// import { APPLICATION_API_END_POINT } from '@/utils/constant'
// import { setAllApplicants } from '@/redux/applicationSlice'
// import { useSelector } from 'react-redux'
// const Applicants = () => {
//     const params=useParams();
//     const dispatch=useDispatch();
//     const {applicants}=useSelector(store=>store.application)
//     useEffect(()=>{
//         const fetchAllApplications=async()=>{
//             try{
//                 const res=await axios.get(`${APPLICATION_API_END_POINT}/${params.id}/applicants`,{withCredentials:true});
           
// dispatch(setAllApplicants(res.data.job));
//                 }
//             }catch(error){
//                 console.log(error);
//             }
//         }
//         fetchAllApplications()
//     },[]);
//   return (
//     <div>
//       <Navbar/>
//       <div className='max-w-7 xl mx-auto'>
//         <h1 className='font-bold text-xl my-5'>Applicants {applicants.application.length}</h1>
    
//         <ApplicantsTable/>
//       </div>
//     </div>
//   )
// }

// export default Applicants






import React, { useEffect } from 'react'
import Navbar from '../shared/Navbar'
import ApplicantsTable from './ApplicantsTable'
import { useParams } from 'react-router-dom'
import { APPLICATION_API_END_POINT } from '@/utils/constant'
import { setAllApplicants } from '@/redux/applicationSlice'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

const Applicants = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const { applicants } = useSelector(store => store.application);

    useEffect(() => {
        const fetchAllApplications = async () => {
            try {
                const res = await axios.get(
                    `${APPLICATION_API_END_POINT}/${params.id}/applicants`,
                    { withCredentials: true }
                );

                dispatch(setAllApplicants(res.data.job));
            } catch (error) {
                console.log(error);
            }
        };

        fetchAllApplications();
    }, [params.id, dispatch]);

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto'>
                <h1 className='font-bold text-xl my-5'>
                    Applicants {applicants?.application?.length ?? 0}
                </h1>

                <ApplicantsTable />
            </div>
        </div>
    );
};

export default Applicants;

