// // import React from 'react'
// // import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from '../ui/table'
// // import { Popover, PopoverTrigger } from '@base-ui/react'
// // import { MoreHorizontal } from 'lucide-react'
// // import { APPLICATION_API_END_POINT } from '@/utils/constant'
// // import { useSelector } from 'react-redux'
// // import { toast } from 'sonner';
// // {APPLICATION_API_END_POINT} from '@/utils/constant';


// // shortlistingStatus=["Accepted","Rejected"];

// // const ApplicantsTable = () => {
// // const {applicants}=useSelector(store.application);
// // const statusHandler=async (status,id)=>{
// //     try{
// //         axios.defaults.withCredentials=true;
// //         const res=await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`,{status});
// //         console.log(res);
// //         if(res.data.success){
// //             toast.success(res.data.message);
// //         }
// //     }catch(error){
// //         toast.error(error.response.data.message);
// //     }
// // }

// //     return (
// //         <div>
// //             <Table>
// //                 <TableCaption>A list of your recent applied user</TableCaption>
// //                 <TableHeader>
// //                     <TableRow>
// //                         <TableHead>FullName</TableHead>
// //                         <TableHead>Email</TableHead>
// //                         <TableHead>Contact</TableHead>
// //                         <TableHead>Resume</TableHead>
// //                         <TableHead>Date</TableHead>
// //                         <TableHead className=" text-right" >Action</TableHead>
// //                     </TableRow>
// //                 </TableHeader>
// //                 <TableBody>
// //                     {
// //                         applicants && applications?.map((item) => (
// //                             <tr key={item._id}>
// //                                 <TableCell>{item?.applicants?.fullname}</TableCell>
// //                                 <TableCell>{item?.applicants?.email}</TableCell>
// //                                 <TableCell>{item?.applicants?.phoneNumber}</TableCell>
                                
                                    
// //                                 <TableCell>
                                    
// //                                     item.applicant?.profile?.resume ? <a   className="text-blue-600 cursor-pointer" href={item?.applicants?.profile?.resume} target="_blank" rel="noopener noreferrer">{item?.applicants.profile?.resumeOriginalName}</a>:<span>NA</span>

                                      
                                    
// //                                   </TableCell>
// //                                 <TableCell className="float-right cursor-pointer">
// //                                     <Popover>
// //                                         <PopoverTrigger>
// //                                             <MoreHorizontal />
// //                                         </PopoverTrigger>
// //                                         <PopoverContent className="w-32">
// //                                             {
// //                                                 shortlistingStatus.map((status, index) => {
// //                                                     return (
// //                                                         <div  onClick={()=>statusHandler (status,item?._id)} key={index} className='flex w-fit items-center my-2 cursor-pointer'>
// //                                                             <span></span>
// //                                                         </div>
// //                                                     )
// //                                                 })
// //                                             }
// //                                         </PopoverContent>
// //                                     </Popover>




// //                                 </TableCell>
// //                             </tr>

// //                         ))
// //                     }

// //                 </TableBody>

// //             </Table>
// //         </div>
// //     )
// // }

// // export default ApplicantsTable








// import React from 'react'
// import {
//     Table,
//     TableBody,
//     TableCaption,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow
// } from '../ui/table'
// import { Popover, PopoverTrigger, PopoverContent } from '@base-ui/react'
// import { MoreHorizontal } from 'lucide-react'
// import { APPLICATION_API_END_POINT } from '@/utils/constant'
// import { useSelector } from 'react-redux'
// import { toast } from 'sonner'
// import axios from 'axios'

// const shortlistingStatus = ["Accepted", "Rejected"]

// const ApplicantsTable = () => {
//     const { applicants } = useSelector(store => store.application)

//     const statusHandler = async (status, id) => {
//         try {
//             axios.defaults.withCredentials = true

//             const res = await axios.post(
//                 `${APPLICATION_API_END_POINT}/status/${id}/update`,
//                 { status }
//             )

//             console.log(res)

//             if (res.data.success) {
//                 toast.success(res.data.message)
//             }
//         } catch (error) {
//             toast.error(error.response?.data?.message || "Something went wrong")
//         }
//     }

//     return (
//         <div>
//             <Table>
//                 <TableCaption>A list of your recent applied users</TableCaption>

//                 <TableHeader>
//                     <TableRow>
//                         <TableHead>FullName</TableHead>
//                         <TableHead>Email</TableHead>
//                         <TableHead>Contact</TableHead>
//                         <TableHead>Resume</TableHead>
//                         <TableHead>Date</TableHead>
//                         <TableHead className="text-right">Action</TableHead>
//                     </TableRow>
//                 </TableHeader>

//                 <TableBody>
//                     {applicants && applicants.map((item) => (
//                         <TableRow key={item._id}>
//                             <TableCell>
//                                 {item?.applicants?.fullname}
//                             </TableCell>

//                             <TableCell>
//                                 {item?.applicants?.email}
//                             </TableCell>

//                             <TableCell>
//                                 {item?.applicants?.phoneNumber}
//                             </TableCell>

//                             <TableCell>
//                                 {item?.applicants?.profile?.resume ? (
//                                     <a
//                                         className="text-blue-600 cursor-pointer"
//                                         href={item?.applicants?.profile?.resume}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         {item?.applicants?.profile?.resumeOriginalName}
//                                     </a>
//                                 ) : (
//                                     <span>NA</span>
//                                 )}
//                             </TableCell>

//                             <TableCell>
//                                 {item?.createdAt?.split("T")[0]}
//                             </TableCell>

//                             <TableCell className="text-right cursor-pointer">
//                                 <Popover>
//                                     <PopoverTrigger>
//                                         <MoreHorizontal />
//                                     </PopoverTrigger>

//                                     <PopoverContent className="w-32">
//                                         {shortlistingStatus.map((status, index) => (
//                                             <div
//                                                 onClick={() => statusHandler(status, item?._id)}
//                                                 key={index}
//                                                 className="flex w-fit items-center my-2 cursor-pointer"
//                                             >
//                                                 <span>{status}</span>
//                                             </div>
//                                         ))}
//                                     </PopoverContent>
//                                 </Popover>
//                             </TableCell>
//                         </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </div>
//     )
// }

// export default ApplicantsTable



import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '../ui/table'
import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover'
import { MoreHorizontal } from 'lucide-react'
import { APPLICATION_API_END_POINT } from '@/utils/constant'
import { useSelector } from 'react-redux'
import { toast } from 'sonner'
import axios from 'axios'

const shortlistingStatus = ["Accepted", "Rejected"]

const ApplicantsTable = () => {
    const { applicants } = useSelector(store => store.application)

    const statusHandler = async (status, id) => {
        try {
            const res = await axios.post(
                `${APPLICATION_API_END_POINT}/status/${id}/update`,
                { status },
                { withCredentials: true }
            )

            console.log(res)

            if (res.data.success) {
                toast.success(res.data.message)
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong")
        }
    }

    return (
        <div>
            <Table>
                <TableCaption>A list of your recent applied users</TableCaption>

                <TableHeader>
                    <TableRow>
                        <TableHead>FullName</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Resume</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {applicants && applicants.map((item) => (
                        <TableRow key={item._id}>
                            <TableCell>
                                {item?.applicants?.fullname}
                            </TableCell>

                            <TableCell>
                                {item?.applicants?.email}
                            </TableCell>

                            <TableCell>
                                {item?.applicants?.phoneNumber}
                            </TableCell>

                            <TableCell>
                                {item?.applicants?.profile?.resume ? (
                                    <a
                                        className="text-blue-600 cursor-pointer"
                                        href={item?.applicants?.profile?.resume}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {item?.applicants?.profile?.resumeOriginalName}
                                    </a>
                                ) : (
                                    <span>NA</span>
                                )}
                            </TableCell>

                            <TableCell>
                                {item?.createdAt?.split("T")[0]}
                            </TableCell>

                            <TableCell className="text-right cursor-pointer">
                                <Popover>
                                    <PopoverTrigger>
                                        <MoreHorizontal />
                                    </PopoverTrigger>

                                    <PopoverContent className="w-32">
                                        {shortlistingStatus.map((status, index) => (
                                            <div
                                                onClick={() => statusHandler(status, item?._id)}
                                                key={index}
                                                className="flex w-fit items-center my-2 cursor-pointer"
                                            >
                                                <span>{status}</span>
                                            </div>
                                        ))}
                                    </PopoverContent>
                                </Popover>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default ApplicantsTable