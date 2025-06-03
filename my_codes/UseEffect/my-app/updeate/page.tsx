'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const updatePage = () => {
    interface User {
        f_name: string,
        l_name: string
    }

    const [user, setUser] = useState<User>({
        f_name: '',
        l_name: ''
    });

    const id = '123'; 

    useEffect(() => {
        axios.get(`http://localhost:3000/ab/db/getOne/${id}`)
            .then(res => setUser(res.data), err => {
                console.error('Error fetching user:', err);
            });
    }, []);

    const handleUpdate = () => {
    axios.put(`http://localhost:3000/ab/db/update/${id}`, user)
        .then(
            () => {
                alert('User updated successfully!');
            },
            (err) => {
                console.error('Update failed:', err);
                alert('Update failed!');
            }
        );
};
    return (
        <div>
            <h2>Update User</h2>
            <input
                type="text"
                placeholder="First Name"
                value={user.f_name}
                onChange={(e) => setUser({ ...user, f_name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Last Name"
                value={user.l_name}
                onChange={(e) => setUser({ ...user, l_name: e.target.value })}
            />
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
};

export default updatePage;
