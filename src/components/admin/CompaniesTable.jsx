// // // // // // import React from 'react'

// // // // // // import { MoreHorizontal, Table } from 'lucide-react'
// // // // // // import profile from "@/assets/logo.png";
// // // // // // import { PopoverContent } from '../ui/popover';
// // // // // // import { PopoverTrigger } from '@base-ui/react';
// // // // // // import { useSelector } from 'react-redux';

// // // // // // const CompaniesTable = () => {
// // // // // //     const {companies}=useSelector(store=>store.company);
// // // // // //     return (
// // // // // //         <div>
// // // // // //             <Table>
// // // // // //                 <TableCaption>A list of your recent regitered companies</TableCaption>
// // // // // //                 <TableHeader>
// // // // // //                     <TableRow>
// // // // // //                         <TableHead>Logo</TableHead>
// // // // // //                         <TableHead>Name</TableHead>
// // // // // //                         <TableHead>Date</TableHead>
// // // // // //                         <TableHead className="text-right">Action</TableHead>
// // // // // //                     </TableRow>
// // // // // //                 </TableHeader>
// // // // // //                 <TableBody>
// // // // // //                     {
// // // // // //                         companies.length <= 0 ? <span>You haven't 
// // // // // //                             regitered any company yet.</span>:(
// // // // // //                                 <>
// // // // // //                     {
// // // // // //                                 <TableCell>
// // // // // //                         <Avatar>
// // // // // //                             <AvatarImage src={logo} />
// // // // // //                         </Avatar>
// // // // // //                     </TableCell> 
                            
                    
                  
// // // // // //                     <TableCell>Company Name</TableCell>
// // // // // //                     <TableCell>18-07-2024</TableCell>
// // // // // //                     <TableCell className="text-right cursor-pointer">

// // // // // //                         <Popover>
// // // // // //                             <PopoverTrigger><MoreHorizontal/></PopoverTrigger>
// // // // // //                             <PopoverContent className="w-32">
// // // // // //                                 <div className='flex items-center gap-2 w-fit cursor-pointer'>
// // // // // //                                     <Edit2  className='w-4'/>
// // // // // //                                     <sapn>Edit</sapn>

// // // // // //                                 </div></PopoverContent></Popover></TableCell>
// // // // // //                 </TableBody>
// // // // // //             </Table>

// // // // // //         </div>
// // // // // //     )
// // // // // // })
// // // // // // }
// // // // // // </>
// // // // // //     )
// // // // // // }
// // // // // // export default CompaniesTable





















// // // // // import React from 'react'

// // // // // import { MoreHorizontal, Table } from 'lucide-react'
// // // // // import profile from "@/assets/logo.png";
// // // // // import { PopoverContent } from '../ui/popover';
// // // // // import { PopoverTrigger } from '@base-ui/react';
// // // // // import { useSelector } from 'react-redux';

// // // // // const CompaniesTable = () => {
// // // // //     const { companies } = useSelector(store => store.company);

// // // // //     return (
// // // // //         <div>
// // // // //             <Table>
// // // // //                 <TableCaption>A list of your recent regitered companies</TableCaption>

// // // // //                 <TableHeader>
// // // // //                     <TableRow>
// // // // //                         <TableHead>Logo</TableHead>
// // // // //                         <TableHead>Name</TableHead>
// // // // //                         <TableHead>Date</TableHead>
// // // // //                         <TableHead className="text-right">Action</TableHead>
// // // // //                     </TableRow>
// // // // //                 </TableHeader>

// // // // //                 <TableBody>
// // // // //                     {
// // // // //                         companies.length <= 0 ? (
// // // // //                             <span>You haven't regitered any company yet.</span>
// // // // //                         ) : (
// // // // //                             <>
// // // // //                             {companies?.map(company)=>{
// // // // //                                 return(
// // // // //                                     <div key={company._id}>
                            
                                
// // // // //                                     <TableCell>
// // // // //                                         <Avatar>
// // // // //                                             <AvatarImage src={profile} />
// // // // //                                         </Avatar>
// // // // //                                     </TableCell>

// // // // //                                     <TableCell>{company.name}</TableCell>
// // // // //                                     <TableCell>{company.createdAt.split("T")[0]}</TableCell>

// // // // //                                     <TableCell className="text-right cursor-pointer">
// // // // //                                         <Popover>
// // // // //                                             <PopoverTrigger>
// // // // //                                                 <MoreHorizontal />
// // // // //                                             </PopoverTrigger>

// // // // //                                             <PopoverContent className="w-32">
// // // // //                                                 <div className='flex items-center gap-2 w-fit cursor-pointer'>
// // // // //                                                     <Edit2 className='w-4' />
// // // // //                                                     <span>Edit</span>
// // // // //                                                 </div>
// // // // //                                             </PopoverContent>
// // // // //                                         </Popover>
// // // // //                                     </TableCell>
// // // // //                                 </TableCell>
// // // // //                                 </div>
                            
// // // // //                         )
// // // // //                     })
// // // // //                 }
// // // // //                 </>
// // // // //     )
// // // // // }
// // // // //                 </TableBody>
// // // // //             </Table>
// // // // //         </div>
// // // // //     )
// // // // // }

// // // // // export default CompaniesTable




// // // // import React from 'react'

// // // // import { MoreHorizontal, Table } from 'lucide-react'
// // // // import profile from "@/assets/logo.png";
// // // // import { PopoverContent } from '../ui/popover';
// // // // import { PopoverTrigger } from '@base-ui/react';
// // // // import { useSelector } from 'react-redux';

// // // // const CompaniesTable = () => {
// // // //     const { companies } = useSelector(store => store.company);

// // // //     return (
// // // //         <div>
// // // //             <Table>
// // // //                 <TableCaption>A list of your recent regitered companies</TableCaption>

// // // //                 <TableHeader>
// // // //                     <TableRow>
// // // //                         <TableHead>Logo</TableHead>
// // // //                         <TableHead>Name</TableHead>
// // // //                         <TableHead>Date</TableHead>
// // // //                         <TableHead className="text-right">Action</TableHead>
// // // //                     </TableRow>
// // // //                 </TableHeader>

// // // //                 <TableBody>
// // // //                     {
// // // //                         companies.length <= 0 ? (
// // // //                             <span>You haven't regitered any company yet.</span>
// // // //                         ) : (
// // // //                             <>
// // // //                                 {companies?.map((company) => {(
// // // //                                      <tr>
                                       

// // // //                                             <TableCell>
// // // //                                                 <Avatar>
// // // //                                                     <AvatarImage src={profile} />
// // // //                                                 </Avatar>
// // // //                                             </TableCell>

// // // //                                             <TableCell>{company.name}</TableCell>
// // // //                                             <TableCell>{company.createdAt.split("T")[0]}</TableCell>

// // // //                                             <TableCell className="text-right cursor-pointer">
// // // //                                                 <Popover>
// // // //                                                     <PopoverTrigger>
// // // //                                                         <MoreHorizontal />
// // // //                                                     </PopoverTrigger>

// // // //                                                     <PopoverContent className="w-32">
// // // //                                                         <div className='flex items-center gap-2 w-fit cursor-pointer'>
// // // //                                                             <Edit2 className='w-4' />
// // // //                                                             <span>Edit</span>
// // // //                                                         </div>
// // // //                                                     </PopoverContent>
// // // //                                                 </Popover>
// // // //                                             </TableCell>
// // // // </tr>
                                     
                                    
// // // //                                 }))}
// // // //                             </>
// // // //                         )
// // // //                     }
// // // //                 </TableBody>
// // // //             </Table>
// // // //         </div>
// // // //     )
// // // // }

// // // // export default CompaniesTable














// // // import React, { useEffect } from 'react'

// // // import { MoreHorizontal, Table } from 'lucide-react'
// // // import profile from "@/assets/logo.png";
// // // import { PopoverContent } from '../ui/popover';
// // // import { PopoverTrigger } from '@base-ui/react';
// // // import { useSelector } from 'react-redux';
// // // import { setSearchCompanyByText } from '@/redux/companySlice';

// // // const CompaniesTable = () => {
// // //     const { companies } = useSelector(store => store.company);
// // //     const [filterCompany,setFilterCompany]=useState(companies);

// // //     useEffect(()=>{
// // //         const filterCompany=companies.length >= 0 && companies.filter((company)=>{
// // //             if(!setSearchCompanyByText){
// // //                 return true
// // //             };
// // //             return company?.name?.toLowerCase().includes
// // //             (setSearchCompanyByText.toLowerCase()

// // //             )
// // //         });
// // //         setFilterCompany(filteredCompany);
// // //     },[companies,searchCompanyByText])

// // //     return (
// // //         <div>
// // //             <Table>
// // //                 <TableCaption>A list of your recent regitered companies</TableCaption>

// // //                 <TableHeader>
// // //                     <TableRow>
// // //                         <TableHead>Logo</TableHead>
// // //                         <TableHead>Name</TableHead>
// // //                         <TableHead>Date</TableHead>
// // //                         <TableHead className="text-right">Action</TableHead>
// // //                     </TableRow>
// // //                 </TableHeader>

// // //                 <TableBody>
// // //                     {
                     
// // //                                 {filterCompany?.map((company) => (
// // //                                     <tr>
// // //                                         <TableCell>
// // //                                             <Avatar>
// // //                                                 <AvatarImage src={company.logo} />
// // //                                             </Avatar>
// // //                                         </TableCell>

// // //                                         <TableCell>{company.name}</TableCell>
// // //                                         <TableCell>{company.createdAt.split("T")[0]}</TableCell>

// // //                                         <TableCell className="text-right cursor-pointer">
// // //                                             <Popover>
// // //                                                 <PopoverTrigger>
// // //                                                     <MoreHorizontal />
// // //                                                 </PopoverTrigger>

// // //                                                 <PopoverContent className="w-32">
// // //                                                     <div className='flex items-center gap-2 w-fit cursor-pointer'>
// // //                                                         <Edit2 className='w-4' />
// // //                                                         <span>Edit</span>
// // //                                                     </div>
// // //                                                 </PopoverContent>
// // //                                             </Popover>
// // //                                         </TableCell>
// // //                                     </tr>
// // //                                 ))}
// // //                             </>
// // //                         )
// // //                     }
// // //                 </TableBody>
// // //             </Table>
// // //         </div>
// // //     )
// // // }

// // // export default CompaniesTable

















// // import React, { useEffect, useState } from 'react'

// // import { MoreHorizontal, Table } from 'lucide-react'
// // import profile from "@/assets/logo.png";
// // import { PopoverContent } from '../ui/popover';
// // import { PopoverTrigger } from '@base-ui/react';
// // import { useSelector } from 'react-redux';
// // import { setSearchCompanyByText } from '@/redux/companySlice';
// // import { useNavigate } from 'react-router-dom';

// // const CompaniesTable = () => {
// //     const { companies, searchCompanyByText } = useSelector(store => store.company);
// //     const [filterCompany, setFilterCompany] = useState(companies);
// // const navigate=useNavigate();
// //     useEffect(() => {
// //         const filteredCompany = companies.length >= 0 && companies.filter((company) => {
// //             if (!searchCompanyByText) {
// //                 return true
// //             };
// //             return company?.name?.toLowerCase().includes(
// //                 searchCompanyByText.toLowerCase()
// //             )
// //         });
// //         setFilterCompany(filteredCompany);
// //     }, [companies, searchCompanyByText])

// //     return (
// //         <div>
// //             <Table>
// //                 <TableCaption>A list of your recent regitered companies</TableCaption>

// //                 <TableHeader>
// //                     <TableRow>
// //                         <TableHead>Logo</TableHead>
// //                         <TableHead>Name</TableHead>
// //                         <TableHead>Date</TableHead>
// //                         <TableHead className="text-right">Action</TableHead>
// //                     </TableRow>
// //                 </TableHeader>

// //                 <TableBody>
// //                     {filterCompany?.map((company) => (
// //                         <tr key={company._id}>
// //                             <TableCell>
// //                                 <Avatar>
// //                                     <AvatarImage src={company.logo} />
// //                                 </Avatar>
// //                             </TableCell>

// //                             <TableCell>{company.name}</TableCell>
// //                             <TableCell>{company.createdAt.split("T")[0]}</TableCell>

// //                             <TableCell className="text-right cursor-pointer">
// //                                 <Popover>
// //                                     <PopoverTrigger>
// //                                         <MoreHorizontal />
// //                                     </PopoverTrigger>

// //                                     <PopoverContent className="w-32">
// //                                         <div onClick={()=>navigate(`/admin/companies/${company._id}`)} className='flex items-center gap-2 w-fit cursor-pointer'>
// //                                             <Edit2 className='w-4' />
// //                                             <span>Edit</span>
// //                                         </div>
// //                                     </PopoverContent>
// //                                 </Popover>
// //                             </TableCell>
// //                         </tr>
// //                     ))}
// //                 </TableBody>
// //             </Table>
// //         </div>
// //     )
// // }

// // export default CompaniesTable













// import React, { useEffect, useState } from 'react'

// import { MoreHorizontal, Edit2 } from 'lucide-react'
// import {
//     Table,
//     TableCaption,
//     TableHeader,
//     TableRow,
//     TableHead,
//     TableBody,
//     TableCell
// } from '../ui/table'

// import { Avatar, AvatarImage } from '../ui/avatar'
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// const CompaniesTable = () => {
//     const { companies, searchCompanyByText } = useSelector(store => store.company);
//     const [filterCompany, setFilterCompany] = useState(companies);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const filteredCompany = companies.length >= 0 && companies.filter((company) => {
//             if (!searchCompanyByText) {
//                 return true
//             };
//             return company?.name?.toLowerCase().includes(
//                 searchCompanyByText.toLowerCase()
//             )
//         });
//         setFilterCompany(filteredCompany);
//     }, [companies, searchCompanyByText])

//     return (
//         <div>
//             <Table>
//                 <TableCaption>A list of your recent regitered companies</TableCaption>

//                 <TableHeader>
//                     <TableRow>
//                         <TableHead>Logo</TableHead>
//                         <TableHead>Name</TableHead>
//                         <TableHead>Date</TableHead>
//                         <TableHead className="text-right">Action</TableHead>
//                     </TableRow>
//                 </TableHeader>

//                 <TableBody>
//                     {filterCompany?.map((company) => (
//                         <TableRow key={company._id}>
//                             <TableCell>
//                                 <Avatar>
//                                     <AvatarImage src={company.logo} />
//                                 </Avatar>
//                             </TableCell>

//                             <TableCell>{company.name}</TableCell>
//                             <TableCell>{company.createdAt.split("T")[0]}</TableCell>

//                             <TableCell className="text-right cursor-pointer">
//                                 <Popover>
//                                     <PopoverTrigger>
//                                         <MoreHorizontal />
//                                     </PopoverTrigger>

//                                     <PopoverContent className="w-32">
//                                         <div onClick={() => navigate(`/admin/companies/${company._id}`)} className='flex items-center gap-2 w-fit cursor-pointer'>
//                                             <Edit2 className='w-4' />
//                                             <span>Edit</span>
//                                         </div>
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

// export default CompaniesTable












import React, { useEffect, useState } from 'react';
import { MoreHorizontal, Edit2 } from 'lucide-react';
import {
    Table,
    TableCaption,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell
} from '../ui/table';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CompaniesTable = () => {
    const { companies, searchCompanyByText } = useSelector(store => store.company);
    const [filterCompany, setFilterCompany] = useState(companies);
    const navigate = useNavigate();

    useEffect(() => {
        const filteredCompany = companies?.filter((company) => {
            if (!searchCompanyByText || !searchCompanyByText.trim()) {
                return true;
            }
            return company?.name?.toLowerCase().includes(
                searchCompanyByText.toLowerCase()
            );
        });
        setFilterCompany(filteredCompany);
    }, [companies, searchCompanyByText]);

    return (
        <div>
            <Table>
                <TableCaption>A list of your recent registered companies</TableCaption>

                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {filterCompany?.map((company) => (
                        <TableRow key={company._id}>
                            <TableCell>
                                <Avatar>
                                    <AvatarImage src={company.logo} />
                                </Avatar>
                            </TableCell>

                            <TableCell>{company.name}</TableCell>
                            <TableCell>{company?.createdAt?.split("T")[0]}</TableCell>

                            <TableCell className="text-right cursor-pointer">
                                <Popover>
                                    <PopoverTrigger>
                                        <MoreHorizontal />
                                    </PopoverTrigger>

                                    <PopoverContent className="w-32">
                                        <div onClick={() => navigate(`/admin/companies/${company._id}`)} className='flex items-center gap-2 w-fit cursor-pointer'>
                                            <Edit2 className='w-4' />
                                            <span>Edit</span>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default CompaniesTable;