// import React,
// {useEffect} from 'react'
// import { setAllJobs } from '@/redux/jobSlice'
// import { COMPANY_API_END_POINT,JOB_API_END_POINT } from '@/utils/constant'
// import {useDispatch, useSelector} from 'react-redux'

// const useGetAllJobs = () => {
//     const dispatch=useDispatch();
//     const {searchedQuery}=useSelector(store=>store.job);
//     useEffect(()=>{
//         const fetchAllJobs=async ()=>{
//             try{
//                 const res=await axios.gat(`${JOB_API_END_POINT}/get?keyword=${searchedQuery}`,{withCredentials:true});
//                 if(res.data.success){
//                     dispatch(setAllJobs(res.data.jobs));
//              }   }catch(error){
//                     console.log(error);
//                 }
//             }
//             fetchAllJobs();
//         },[])}
   


// export default useGetAllJobs






















import { useEffect } from 'react';
import axios from 'axios';
import { setAllJobs } from '@/redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constant';
import { useDispatch, useSelector } from 'react-redux';

const useGetAllJobs = () => {
    const dispatch = useDispatch();
    const { searchedQuery } = useSelector(store => store.job);

    useEffect(() => {
        const fetchAllJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get?keyword=${searchedQuery}`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setAllJobs(res.data.jobs));
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchAllJobs();
    }, [dispatch, searchedQuery]);
};

export default useGetAllJobs;
