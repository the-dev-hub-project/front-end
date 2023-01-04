import axios from 'axios'
import React, { useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const MyHub = ({ uid }) => {
    const [allApplications, setAllApplications] = useState();
    const token = sessionStorage.getItem("accessToken");
    const navigate = useNavigate();

    const fetchData = async (token) => {
            const res = await axios.get('http://localhost:8080/api/thedevhub/application', {
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            })
            setAllApplications(res.data)
        }
    useEffect(()=>{
            if(token){
            fetchData(token);
            } else{
                navigate('/')
                alert ('You need to sign in!')
            }
        },[]);

    if (allApplications === undefined) return;

    const filteredList = allApplications.filter(apps => {
        return apps.user_id === uid
    })
    
    const displayList = filteredList.map((app, index) =>{
    return(
        <div key={index} className="flex justify-around border-box p-2 flex-col">
        
            <p className="text-lg text-gray-500 font-bold font-serif">{app.company}</p>
            <p className="break-normal flex flex-wrap border-black border-4">{app.title}</p>
            <p>{app.applied}</p>
            <button className="rounded-xl btn group flex items-center bg-slate-900 p-2 px-6 text-lg font-thin tracking-widest text-white">
                <span className="relative pr-4 pb-1 text-white after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-blue-500 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">
                </span>
                <Link to={`/myhub/application/${app._id}`}>View details</Link>
            </button>
        </div>
    )
})

  return (
    <div className='w-screen'>
        <h1 className='text-4xl text-center border-black border-4 mx-44'>MyHub</h1>
            <Link to='/myhub/application/create'>
            <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                <div class="absolute inset-0 w-3 bg-blue-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span class="relative text-black group-hover:text-white">Create application</span>
            </button>
            </Link>
           <div className="w-screen flex flex-row gap-x-8 h-min p-1 border-box bg-white rounded xl ">{displayList}</div>
    </div>
  )
}

export default MyHub