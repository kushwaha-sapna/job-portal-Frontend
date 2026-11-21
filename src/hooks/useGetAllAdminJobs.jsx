// import React,
// {useEffect} from 'react'
// import { setAllJobs } from '@/redux/jobSlice'
// import { COMPANY_API_END_POINT,JOB_API_END_POINT } from '@/utils/constant'
// import {useDispatch} from 'react-redux'

// const useGetAdminJobs = () => {
//     const dispatch=useDispatch();
//     useEffect(()=>{
//         const fetchAllAdminJobs=async ()=>{
//             try{
//                 const res=await axios.gat(`${JOB_API_END_POINT}/getadminjobs`,{withCredentials:true});
//                 if(res.data.success){
//                     dispatch(setAllAdmminJobs(res.data.jobs));
//              }   }catch(error){
//                     console.log(error);
//                 }
//             }
//             fetchAllJobs();
//         },[])}
   


// export default useGetAdminJobs







import { useEffect } from 'react';
import axios from 'axios';
import { setAllAdminJobs } from '@/redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constant';
import { useDispatch } from 'react-redux';

const useGetAllAdminJobs = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAllAdminJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/getadminjobs`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setAllAdminJobs(res.data.jobs));
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchAllAdminJobs();
    }, [dispatch]);
};

export default useGetAllAdminJobs;








