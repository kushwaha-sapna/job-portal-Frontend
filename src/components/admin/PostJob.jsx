// // // // // import React, { useState } from 'react'
// // // // // import Navbar from '../shared/Navbar'
// // // // // import { Label } from '../ui/label'
// // // // // import { input } from '../ui/input'
// // // // // const PostJob = () => {
// // // // //     const [input, setInput] = useState({
// // // // //         title: "",
// // // // //         description: "",
// // // // //         requirements: " ",
// // // // //         salary: " ",
// // // // //         location: "",
// // // // //         jobType: " ",
// // // // //         experience: " ",
// // // // //         position: 0,
// // // // //         companyId: " "
// // // // //     });
// // // // //     const changeEventHandler = (e) => {
// // // // //         setInput({ ...input, [e.target.name]: e.target.value });
// // // // //     }
// // // // //     return (
// // // // //         <div>
// // // // //             <Navbar />
// // // // //             <div className='flex items-center justify-center w-screen my-5'>
// // // // //                 <form action=" " className='p-8 max-w-4xl border-gray-200 shadow-lg rounded-md'
// // // // //                 <div className='grid grid-cols-2 gap-2'>
// // // // //                     <div>
// // // // //                         <Label>Title</Label>
// // // // //                         <Input type="Text" name="title" className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1" />
// // // // //                     </div>
// // // // //                     <div>
// // // // //                         <Label>Title</Label>
// // // // //                         <Input type="Text" name="title"
// // // // //                             value={input.title
// // // // //                             }
// // // // //                             onChange={changeEventHandler}
// // // // //                             className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1" />
// // // // //                     </div>
// // // // //                     <div>
// // // // //                         <Label>Description</Label>
// // // // //                         <Input type="Text" name="description"
// // // // //                             value={input.description}
// // // // //                             className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1" />
// // // // //                     </div>
// // // // //                     <div>
// // // // //                         <Label>Requirements</Label>
// // // // //                         <Input type="Text" name="requirements" value={input.requirements
// // // // //                         }
// // // // //                             onChange={changeEventHandler}
// // // // //                             className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1" />
// // // // //                     </div>


// // // // //                       <div>
// // // // //                         <Label>Salary</Label>
// // // // //                         <Input type="Text" name="salary" value={input.salary
// // // // //                         }
// // // // //                             onChange={changeEventHandler}
// // // // //                             className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1" />
// // // // //                     </div>
// // // // //                       <div>
// // // // //                         <Label>Location</Label>
// // // // //                         <Input type="Text" name="location" value={input.location
// // // // //                         }
// // // // //                             onChange={changeEventHandler}
// // // // //                             className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1" />
// // // // //                     </div>
// // // // //                       <div>
// // // // //                         <Label>Job Type</Label>
// // // // //                         <Input type="Text" name="jobType" value={input.jobType
// // // // //                         }
// // // // //                             onChange={changeEventHandler}
// // // // //                             className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1" />
// // // // //                     </div>
// // // // //                       <div>
// // // // //                         <Label>Experience Level</Label>
// // // // //                         <Input type="Text" name="experience" value={input.experience
// // // // //                         }
// // // // //                             onChange={changeEventHandler}
// // // // //                             className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1" />
// // // // //                     </div>
// // // // //                       <div>
// // // // //                         <Label>No. of Position</Label>
// // // // //                         <Input type="number " name="position" value={input.position
// // // // //                         }
// // // // //                             onChange={changeEventHandler}
// // // // //                             className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1" />
// // // // //                     </div>
// // // // //                 </div>
// // // // //                 </form>

// // // // //             </div>
// // // // //         </div>
// // // // //     )
// // // // // }

// // // // // export default PostJob













// // // const companyArray=[];

// // // const PostJob = () => {
// // //     const [input, setInput] = useState({
// // //         title: "",
// // //         description: "",
// // //         requirements: " ",
// // //         salary: " ",
// // //         location: "",
// // //         jobType: " ",
// // //         experience: " ",
// // //         position: 0,
// // //         companyId: " "
// // //     });
// // // const [Loading,setLoading]=useState(false);
// // // const navigate =useNavigate();
// // // const {companies}=useSelector(store=>store.company);
// // //     const changeEventHandler = (e) => {
// // //         setInput({ ...input, [e.target.name]: e.target.value });
// // //     }

// // //     const selectChangeHandler=(value)=>{
// // //         const selectedCompany=companies.find((company)=>company.name.toLowerCase()==value);
// // //         setInput({
// // //             ...input,companyId:selectedCompany._id
// // //         });
// // //     };
// // //     const submitHandler=async (e)=>{
// // //         e.preventDefault();
// // //         try{
// // //             setLoading(true);
// // //             const res=await axios.post(`${JOB_API_END_POINT}/post`,input,{
// // //                 headers:{
// // //                     'Content-Type':'application/json'
// // //                 },
// // //                 withCredentials:true
// // //             });
// // //             if(res.data.sucess){
// // //                 toast.success(res.data.message);
// // //                 navigate("/admin/jobs");
// // //             }
// // //         }catch(error){
// // //             toast.error(error.response.data.message);

// // //         }finally{
// // //             setLoading(false);
// // //         }
// // //     }


// // //     return (
// // //         <div>
// // //             <Navbar />
// // //             <div className='flex items-center justify-center w-screen my-5'>
// // //                 <form  onSubmit={submitHandler} className='p-8 max-w-4xl border-gray-200 shadow-lg rounded-md'>
// // //                     <div className='grid grid-cols-2 gap-2'>
// // //                         <div>
// // //                             <Label>Title</Label>
// // //                             <Input
// // //                                 type="text"
// // //                                 name="title"
// // //                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
// // //                             />
// // //                         </div>

// // //                         <div>
// // //                             <Label>Title</Label>
// // //                             <Input
// // //                                 type="text"
// // //                                 name="title"
// // //                                 value={input.title}
// // //                                 onChange={changeEventHandler}
// // //                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
// // //                             />
// // //                         </div>

// // //                         <div>
// // //                             <Label>Description</Label>
// // //                             <Input
// // //                                 type="text"
// // //                                 name="description"
// // //                                 value={input.description}
// // //                                 onChange={changeEventHandler}
// // //                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
// // //                             />
// // //                         </div>

// // //                         <div>
// // //                             <Label>Requirements</Label>
// // //                             <Input
// // //                                 type="text"
// // //                                 name="requirements"
// // //                                 value={input.requirements}
// // //                                 onChange={changeEventHandler}
// // //                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
// // //                             />
// // //                         </div>

// // //                         <div>
// // //                             <Label>Salary</Label>
// // //                             <Input
// // //                                 type="text"
// // //                                 name="salary"
// // //                                 value={input.salary}
// // //                                 onChange={changeEventHandler}
// // //                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
// // //                             />
// // //                         </div>

// // //                         <div>
// // //                             <Label>Location</Label>
// // //                             <Input
// // //                                 type="text"
// // //                                 name="location"
// // //                                 value={input.location}
// // //                                 onChange={changeEventHandler}
// // //                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
// // //                             />
// // //                         </div>

// // //                         <div>
// // //                             <Label>Job Type</Label>
// // //                             <Input
// // //                                 type="text"
// // //                                 name="jobType"
// // //                                 value={input.jobType}
// // //                                 onChange={changeEventHandler}
// // //                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
// // //                             />
// // //                         </div>

// // //                         <div>
// // //                             <Label>Experience Level</Label>
// // //                             <Input
// // //                                 type="text"
// // //                                 name="experience"
// // //                                 value={input.experience}
// // //                                 onChange={changeEventHandler}
// // //                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
// // //                             />
// // //                         </div>
// // // {
// // //     companies.length >    0 &&(
// // //         <Select onValueChange={selectChangeHandler}>
// // //             <SelectTrigger className="w-[180px]">
// // //                 <SelectValue placeholder={'Select a Company'}/>
// // //             </SelectTrigger>
// // //             <SelectContent>
// // //                 <SelectGroup>
// // //                     {
// // //                         companies.map((company)=>{
// // //                             return(
// // //                                 <SelectItem  value ={company?.name?.toLowerCase()}>{company.name}

// // //                                 </SelectItem>
// // //                             )
// // //                         })
// // //                     }
// // //                 </SelectGroup>
// // //             </SelectContent>
// // //         </Select>
// // //     )
// // // }
// // //                         <div>
// // //                             <Label>No. of Position</Label>
// // //                             <Input
// // //                                 type="number"
// // //                                 name="position"
// // //                                 value={input.position}
// // //                                 onChange={changeEventHandler}
// // //                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
// // //                             />
// // //                         </div>



// // //                     </div>
                   
// // //   {
// // //         loading ? <Button className="w-full my-4">
// // //             <Loader2 className='mr-2 h-4 w-4 animate-spin'/>
       
// // //        Please wait </Button>:<Button type="submit" className=
// // //        "w-full my-4">Update
// // //         </Button>
// // //      }

// // //                     {
// // //                         companies.length==0 && <p className='text-xs text-red-600 font-bold text-center my-3'>please register a company first,before postion a jobs</p>
// // //                     }
// // //                 </form>
// // //             </div>
// // //         </div>
// // //     )
// // // }

// // // export default PostJob































// // import React, { useState } from 'react';
// // import Navbar from '../shared/Navbar';
// // import { Label } from '../ui/label';
// // import { Input } from '../ui/input';
// // import { Button } from '../ui/button';
// // import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
// // import { useSelector } from 'react-redux';
// // import { JOB_API_END_POINT } from '@/utils/constant';
// // import axios from 'axios';
// // import { toast } from 'sonner';
// // import { useNavigate } from 'react-router-dom';
// // import { Loader2 } from 'lucide-react';

// // const PostJob = () => {
// //     const [input, setInput] = useState({
// //         title: "",
// //         description: "",
// //         requirements: "",
// //         salary: "",
// //         location: "",
// //         jobType: "",
// //         experience: "",
// //         position: 0,
// //         companyId: ""
// //     });
// //     const [loading, setLoading] = useState(false);
// //     const navigate = useNavigate();
// //     const { companies } = useSelector(store => store.company);

// //     const changeEventHandler = (e) => {
// //         setInput({ ...input, [e.target.name]: e.target.value });
// //     };

// //     const selectChangeHandler = (value) => {
// //         const selectedCompany = companies.find((company) => company.name.toLowerCase() === value);
// //         if (selectedCompany) {
// //             setInput({
// //                 ...input,
// //                 companyId: selectedCompany._id
// //             });
// //         }
// //     };

// //     const submitHandler = async (e) => {
// //         e.preventDefault();
// //         try {
// //             setLoading(true);
// //             const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
// //                 headers: {
// //                     'Content-Type': 'application/json'
// //                 },
// //                 withCredentials: true
// //             });
// //             if (res.data.success) {
// //                 toast.success(res.data.message);
// //                 navigate("/admin/jobs");
// //             }
// //         } catch (error) {
// //             toast.error(error.response?.data?.message || "Something went wrong");
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     return (
// //         <div>
// //             <Navbar />
// //             <div className='flex items-center justify-center w-screen my-5'>
// //                 <form onSubmit={submitHandler} className='p-8 max-w-4xl border border-gray-200 shadow-lg rounded-md'>
// //                     <div className='grid grid-cols-2 gap-2'>
// //                         <div>
// //                             <Label>Title</Label>
// //                             <Input
// //                                 type="text"
// //                                 name="title"
// //                                 value={input.title}
// //                                 onChange={changeEventHandler}
// //                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
// //                             />
// //                         </div>

// //                         <div>
// //                             <Label>Description</Label>
// //                             <Input
// //                                 type="text"
// //                                 name="description"
// //                                 value={input.description}
// //                                 onChange={changeEventHandler}
// //                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
// //                             />
// //                         </div>

// //                         <div>
// //                             <Label>Requirements</Label>
// //                             <Input
// //                                 type="text"
// //                                 name="requirements"
// //                                 value={input.requirements}
// //                                 onChange={changeEventHandler}
// //                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
// //                             />
// //                         </div>

// //                         <div>
// //                             <Label>Salary</Label>
// //                             <Input
// //                                 type="text"
// //                                 name="salary"
// //                                 value={input.salary}
// //                                 onChange={changeEventHandler}
// //                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
// //                             />
// //                         </div>

// //                         <div>
// //                             <Label>Location</Label>
// //                             <Input
// //                                 type="text"
// //                                 name="location"
// //                                 value={input.location}
// //                                 onChange={changeEventHandler}
// //                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
// //                             />
// //                         </div>

// //                         <div>
// //                             <Label>Job Type</Label>
// //                             <Input
// //                                 type="text"
// //                                 name="jobType"
// //                                 value={input.jobType}
// //                                 onChange={changeEventHandler}
// //                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
// //                             />
// //                         </div>

// //                         <div>
// //                             <Label>Experience Level</Label>
// //                             <Input
// //                                 type="text"
// //                                 name="experience"
// //                                 value={input.experience}
// //                                 onChange={changeEventHandler}
// //                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
// //                             />
// //                         </div>

// //                         {
// //                             companies.length > 0 && (
// //                                 <Select onValueChange={selectChangeHandler}>
// //                                     <SelectTrigger className="w-[180px]">
// //                                         <SelectValue placeholder={'Select a Company'} />
// //                                     </SelectTrigger>
// //                                     <SelectContent>
// //                                         <SelectGroup>
// //                                             {
// //                                                 companies.map((company) => (
// //                                                     <SelectItem key={company._id} value={company?.name?.toLowerCase()}>
// //                                                         {company.name}
// //                                                     </SelectItem>
// //                                                 ))
// //                                             }
// //                                         </SelectGroup>
// //                                     </SelectContent>
// //                                 </Select>
// //                             )
// //                         }

// //                         <div>
// //                             <Label>No. of Position</Label>
// //                             <Input
// //                                 type="number"
// //                                 name="position"
// //                                 value={input.position}
// //                                 onChange={changeEventHandler}
// //                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
// //                             />
// //                         </div>
// //                     </div>

// //                     {
// //                         loading ? (
// //                             <Button type="button" className="w-full my-4" disabled>
// //                                 <Loader2 className='mr-2 h-4 w-4 animate-spin' />
// //                                 Please wait
// //                             </Button>
// //                         ) : (
// //                             <Button type="submit" className="w-full my-4">
// //                                 Post New Job
// //                             </Button>
// //                         )
// //                     }

// //                     {
// //                         companies.length == 0 && <p className='text-xs text-red-600 font-bold text-center my-3'>please register a company first, before posting a job</p>
// //                     }
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // };

// // export default PostJob;

























// import React, { useState } from 'react';
// import Navbar from '../shared/Navbar';
// import { Label } from '../ui/label';
// import { Input } from '../ui/input';
// import { Button } from '../ui/button';
// import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
// import { useSelector } from 'react-redux';
// import { JOB_API_END_POINT } from '@/utils/constant';
// import useGetAllCompanies from '@/hooks/useGetAllCompanies';
// import axios from 'axios';
// import { toast } from 'sonner';
// import { useNavigate } from 'react-router-dom';
// import { Loader2 } from 'lucide-react';

// const PostJob = () => {
//     useGetAllCompanies();

//     const [input, setInput] = useState({
//         title: "",
//         description: "",
//         requirements: "",
//         salary: "",
//         location: "",
//         jobType: "",
//         experience: "",
//         position: 0,
//         companyId: ""
//     });
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();
//     const { companies } = useSelector(store => store.company);
//     const companyList = companies || [];

//     const changeEventHandler = (e) => {
//         setInput({ ...input, [e.target.name]: e.target.value });
//     };

//     const selectChangeHandler = (value) => {
//         const selectedCompany = companyList.find((company) => company?.name?.toLowerCase() === value);
//         if (selectedCompany) {
//             setInput({
//                 ...input,
//                 companyId: selectedCompany._id
//             });
//         }
//     };

//     const submitHandler = async (e) => {
//         e.preventDefault();
//         try {
//             setLoading(true);
//             const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 withCredentials: true
//             });
//             if (res.data.success) {
//                 toast.success(res.data.message);
//                 navigate("/admin/jobs");
//             }
//         } catch (error) {
//             toast.error(error.response?.data?.message || "Something went wrong");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <Navbar />
//             <div className='flex items-center justify-center w-screen my-5'>
//                 <form onSubmit={submitHandler} className='p-8 max-w-4xl border border-gray-200 shadow-lg rounded-md'>
//                     <div className='grid grid-cols-2 gap-2'>
//                         <div>
//                             <Label>Title</Label>
//                             <Input
//                                 type="text"
//                                 name="title"
//                                 value={input.title}
//                                 onChange={changeEventHandler}
//                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//                             />
//                         </div>

//                         <div>
//                             <Label>Description</Label>
//                             <Input
//                                 type="text"
//                                 name="description"
//                                 value={input.description}
//                                 onChange={changeEventHandler}
//                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//                             />
//                         </div>

//                         <div>
//                             <Label>Requirements</Label>
//                             <Input
//                                 type="text"
//                                 name="requirements"
//                                 value={input.requirements}
//                                 onChange={changeEventHandler}
//                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//                             />
//                         </div>

//                         <div>
//                             <Label>Salary</Label>
//                             <Input
//                                 type="text"
//                                 name="salary"
//                                 value={input.salary}
//                                 onChange={changeEventHandler}
//                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//                             />
//                         </div>

//                         <div>
//                             <Label>Location</Label>
//                             <Input
//                                 type="text"
//                                 name="location"
//                                 value={input.location}
//                                 onChange={changeEventHandler}
//                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//                             />
//                         </div>

//                         <div>
//                             <Label>Job Type</Label>
//                             <Input
//                                 type="text"
//                                 name="jobType"
//                                 value={input.jobType}
//                                 onChange={changeEventHandler}
//                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//                             />
//                         </div>

//                         <div>
//                             <Label>Experience Level</Label>
//                             <Input
//                                 type="text"
//                                 name="experience"
//                                 value={input.experience}
//                                 onChange={changeEventHandler}
//                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//                             />
//                         </div>

//                         {
//                             companyList.length > 0 && (
//                                 <Select onValueChange={selectChangeHandler}>
//                                     <SelectTrigger className="w-[180px]">
//                                         <SelectValue placeholder={'Select a Company'} />
//                                     </SelectTrigger>
//                                     <SelectContent>
//                                         <SelectGroup>
//                                             {
//                                                 companyList.map((company) => (
//                                                     <SelectItem key={company._id} value={company?.name?.toLowerCase()}>
//                                                         {company.name}
//                                                     </SelectItem>
//                                                 ))
//                                             }
//                                         </SelectGroup>
//                                     </SelectContent>
//                                 </Select>
//                             )
//                         }

//                         <div>
//                             <Label>No. of Position</Label>
//                             <Input
//                                 type="number"
//                                 name="position"
//                                 value={input.position}
//                                 onChange={changeEventHandler}
//                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//                             />
//                         </div>
//                     </div>

//                     {
//                         loading ? (
//                             <Button type="button" className="w-full my-4" disabled>
//                                 <Loader2 className='mr-2 h-4 w-4 animate-spin' />
//                                 Please wait
//                             </Button>
//                         ) : (
//                             <Button type="submit" className="w-full my-4">
//                                 Post New Job
//                             </Button>
//                         )
//                     }

//                     {
//                         companyList.length === 0 && (
//                             <p className='text-xs text-red-600 font-bold text-center my-3'>
//                                 please register a company first, before posting a job
//                             </p>
//                         )
//                     }
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default PostJob;
































import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { useSelector } from 'react-redux';
import { JOB_API_END_POINT } from '@/utils/constant';
import useGetAllCompanies from '@/hooks/useGetAllCompanies';
import axios from 'axios';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const PostJob = () => {
    useGetAllCompanies();

    const [input, setInput] = useState({
        title: "",
        description: "",
        requirements: "",
        salary: "",
        location: "",
        jobType: "",
        experience: "",
        position: 1,
        companyId: ""
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { companies } = useSelector(store => store.company);
    const companyList = companies || [];

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const selectChangeHandler = (value) => {
        const selectedCompany = companyList.find((company) => company?.name?.toLowerCase() === value);
        if (selectedCompany) {
            setInput({
                ...input,
                companyId: selectedCompany._id
            });
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!input.companyId) {
            toast.error("Please select a company first");
            return;
        }
        try {
            setLoading(true);
            const payload = {
                ...input,
                salary: Number(input.salary),
                experience: Number(input.experience),
                position: Number(input.position),
            };
            const res = await axios.post(`${JOB_API_END_POINT}/post`, payload, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/admin/jobs");
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center w-screen my-5'>
                <form onSubmit={submitHandler} className='p-8 max-w-4xl border border-gray-200 shadow-lg rounded-md'>
                    <div className='grid grid-cols-2 gap-2'>
                        <div>
                            <Label>Title</Label>
                            <Input
                                type="text"
                                name="title"
                                value={input.title}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            />
                        </div>

                        <div>
                            <Label>Description</Label>
                            <Input
                                type="text"
                                name="description"
                                value={input.description}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            />
                        </div>

                        <div>
                            <Label>Requirements</Label>
                            <Input
                                type="text"
                                name="requirements"
                                placeholder="e.g. React, Node.js, MongoDB"
                                value={input.requirements}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            />
                        </div>

                        <div>
                            <Label>Salary (in LPA)</Label>
                            <Input
                                type="number"
                                name="salary"
                                placeholder="e.g. 12"
                                value={input.salary}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            />
                        </div>

                        <div>
                            <Label>Location</Label>
                            <Input
                                type="text"
                                name="location"
                                value={input.location}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            />
                        </div>

                        <div>
                            <Label>Job Type</Label>
                            <Input
                                type="text"
                                name="jobType"
                                placeholder="e.g. Full Time"
                                value={input.jobType}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            />
                        </div>

                        <div>
                            <Label>Experience Level (Years)</Label>
                            <Input
                                type="number"
                                name="experience"
                                placeholder="e.g. 2"
                                value={input.experience}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            />
                        </div>

                        {
                            companyList.length > 0 && (
                                <div>
                                    <Label>Company</Label>
                                    <Select onValueChange={selectChangeHandler}>
                                        <SelectTrigger className="w-[180px] my-1">
                                            <SelectValue placeholder={'Select a Company'} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {
                                                    companyList.map((company) => (
                                                        <SelectItem key={company._id} value={company?.name?.toLowerCase()}>
                                                            {company.name}
                                                        </SelectItem>
                                                    ))
                                                }
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            )
                        }

                        <div>
                            <Label>No. of Position</Label>
                            <Input
                                type="number"
                                name="position"
                                value={input.position}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            />
                        </div>
                    </div>

                    {
                        loading ? (
                            <Button type="button" className="w-full my-4" disabled>
                                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                                Please wait
                            </Button>
                        ) : (
                            <Button type="submit" className="w-full my-4">
                                Post New Job
                            </Button>
                        )
                    }

                    {
                        companyList.length === 0 && (
                            <p className='text-xs text-red-600 font-bold text-center my-3'>
                                please register a company first, before posting a job
                            </p>
                        )
                    }
                </form>
            </div>
        </div>
    );
};

export default PostJob;