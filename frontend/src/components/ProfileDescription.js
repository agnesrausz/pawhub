import React, {useEffect, useState} from 'react';
import axios from "axios";

function ProfileDescription(props) {
    useEffect(() => {
        fetchUser();
    }, [])
    const [user, setUser] = useState([])


    const fetchUser = async () => {
        let config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('authToken')
            }
        }
        const response = await axios.get(`http://localhost:8000/api/user/${localStorage.getItem('userID')}`, config);
        console.log(response.data.user)
        setUser(response.data.user)
    }


    return (
        <div>
            <div className="content">
                <div>
                    <div>{user.name}</div>
                    <div>{user.email}</div>
                    <div>Status: {user.status}</div>
                </div>
            </div>
        </div>
    );
}

export default ProfileDescription;