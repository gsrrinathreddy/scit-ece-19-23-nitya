import { Typography } from '@mui/material';
import {useState,useEffect} from 'react';
import axios from 'axios';

export default function Aboutus(){
const [loader,setLoader] = useState(true);
    const [aboutus,setAboutus] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/Aboutus')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setAboutus(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])
    return(
       
        <>
<Typography>Name: NITHYASRI KADIYALA</Typography>
<Typography>Father Name: CHANDRASENA</Typography>
<Typography>Mother Name: SWAPNA</Typography>
<Typography>Email: nithyasri.kadiyala@gmail.com</Typography>
<Typography>Phone No.: 8897139024</Typography>
        </>
        
    )
}
