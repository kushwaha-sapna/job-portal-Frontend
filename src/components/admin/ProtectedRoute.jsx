// const {useEffect, Children}=require("react");
// const {useSelector}=require("react-redux");
// const {useNavigate}=require("react-router-dom");

// const ProtectedRoute=({Children})=>{
//     const {user}=useSelector(store=>store.auth);
//     const navigate=useNavigate();

//     useEffect(()=>{
//         if(user==null || user.role!= 'recruiter'){
//             navigate('/')
//         }
//     },[]);
//     return(
//         <>
//         {Children}
//         </>
//     )
// };
// export default ProtectedRoute;













import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { user } = useSelector(store => store.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user == null || user.role != 'recruiter') {
            navigate('/');
        }
    }, [user, navigate]);

    return (
        <>
            {children}
        </>
    );
};

export default ProtectedRoute;