import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ApplicationUpdate = () => {
    const token= sessionStorage.getItem("accessToken"); 
    const { id } = useParams();
    const navigate = useNavigate();
    const [appUpdate, setAppUpdate] = useState({
        title: "",
        company: "",
        applied: "",
        hiring_manager: "",
        compensation: "",
        work_site: "",
        location: "",
        url: "",
    })

    const appUpdateCall = async (e) => {
        e.preventDefault()
        try{
            await axios.put(`https://the-dev-hub-app.herokuapp.com/api/thedevhub/application/update/${id}`, appUpdate, {
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            })
            navigate(`/myhub/application/${id}`)
        } catch (err) {
            console.log(err)
        }
    }

    const handleAppUpdate = (e) => {
        e.preventDefault()
        const appUpdateInput = { ...appUpdate }
        appUpdateInput[e.target.name] = e.target.value;
        setAppUpdate(appUpdateInput);
    }

    return (
        <div>
            <div className='font-lora flex text-4xl text-center justify-center'>Update Application</div>
            <div className="flex justify-center">
            <form onSubmit={appUpdateCall} className='font-montserrat w-3/4 md:w-1/2 lg:w-1/3 my-4 px-3 flex flex-col bg-white shadow-lg shadow-air-blue rounded-lg border-gray-300 border'>
                <input
                    className='mt-5'
                    placeholder='Job title'
                    type='text'
                    name='title'
                    value={appUpdate.title}
                    onChange={handleAppUpdate}
                    required />
                <br />
                <input
                    placeholder='Company'
                    type='text'
                    name='company'
                    value={appUpdate.company}
                    onChange={handleAppUpdate} 
                    required/>
                <br />
                <input
                    placeholder='Date applied'
                    type='date'
                    name='applied'
                    value={appUpdate.applied}
                    onChange={handleAppUpdate} 
                    required/>
                <br />
                <input
                    placeholder='Name of Recruiter/Hiring Manager'
                    type='text'
                    name='hiring_manager'
                    value={appUpdate.hiring_manager}
                    onChange={handleAppUpdate} 
                    required/>
                <br />
                <input
                    placeholder='Compensation'
                    type='text'
                    name='compensation'
                    value={appUpdate.compensation}
                    onChange={handleAppUpdate} 
                    required/>
                <br />
                <select
                    name='work_site'
                    value={appUpdate.work_site}
                    onChange={handleAppUpdate} 
                    required>
                    <option value="Remote">Remote</option>
                    <option value="In-person">In-person</option>
                    <option value="Hybrid">Hybrid</option>
                </select>
                <br />
                <input
                    placeholder='Job location'
                    type='text'
                    name='location'
                    value={appUpdate.location}
                    onChange={handleAppUpdate}
                    required />
                <br />
                <input
                    placeholder='Job URL'
                    type='text'
                    name='url'
                    value={appUpdate.url}
                    onChange={handleAppUpdate} 
                    required/>
                <br />
                <div className="flex justify-center">
                    <button className="font-lobster rounded-lg text-lg my-5 px-6 py-2 text-white tracking-wider bg-air-blue outline-none mx-10">Submit</button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default ApplicationUpdate