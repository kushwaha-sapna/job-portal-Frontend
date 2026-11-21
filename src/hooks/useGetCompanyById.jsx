// import React,
// {useEffect} from 'react'
// import { setAllJobs } from '@/redux/jobSlice'
// import { COMPANY_API_END_POINT } from '@/utils/constant'
// import {useDispatch} from 'react-redux'
// import { setSingleCompany } from '@/redux/companySlice'

// const useGetCompanyById = () => {
//     const dispatch=useDispatch();
//     useEffect(()=>{
//         const fetchSingleCompany=async ()=>{
//             try{
//                 const res=await axios.gat(`${COMPANY_API_END_POINT}/get/${companyId}`,{withCredentials:true});
//                 console.log(res.data.company);
//                 if(res.data.success){
//                     dispatch(setSingleCompany(res.data.company));
//              }   }catch(error){
//                     console.log(error);
//                 }
//             }
//             fetchSingleCompany();
//         },[companyId,dispatch])}
   


// export default useGetCompanyById;



























import { useEffect } from 'react';
import axios from 'axios';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import { useDispatch } from 'react-redux';
import { setSingleCompany } from '@/redux/companySlice';

const useGetCompanyById = (companyId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchSingleCompany = async () => {
            try {
                const res = await axios.get(`${COMPANY_API_END_POINT}/get/${companyId}`, { withCredentials: true });
                console.log(res.data.company);
                if (res.data.success) {
                    dispatch(setSingleCompany(res.data.company));
                }
            } catch (error) {
                console.log(error);
            }
        };
        if (companyId) {
            fetchSingleCompany();
        }
    }, [companyId, dispatch]);
};

export default useGetCompanyById;
