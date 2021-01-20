import React from 'react';
import styles from './users.module.css';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, photoUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-mandalorian-1572282426.jpg?crop=0.8217522658610272xw:1xh;center,top&resize=1200:*',
                followed: true, fullName: 'Vasya', status: 'Hi, nice to meet you', location: { city: 'Moscow', country: 'Russia' }
            },
            {
                id: 2, photoUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-mandalorian-1572282426.jpg?crop=0.8217522658610272xw:1xh;center,top&resize=1200:*',
                followed: true, fullName: 'Andrew', status: 'Hi, nice to meet you', location: { city: 'Tambov', country: 'Russia' }
            },
            {
                id: 3, photoUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-mandalorian-1572282426.jpg?crop=0.8217522658610272xw:1xh;center,top&resize=1200:*',
                followed: false, fullName: 'Yakov', status: 'Hi, nice to meet you', location: { city: 'Moscow', country: 'Russia' }
            },
            {
                id: 4, photoUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-mandalorian-1572282426.jpg?crop=0.8217522658610272xw:1xh;center,top&resize=1200:*',
                followed: false, fullName: 'Hi, how are you??', status: 'Hi, nice to meet you', location: { city: 'Moscow', country: 'Russia' }
            },
            {
                id: 5, photoUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-mandalorian-1572282426.jpg?crop=0.8217522658610272xw:1xh;center,top&resize=1200:*',
                followed: false, fullName: 'Hello world', status: 'Hi, nice to meet you', location: { city: 'Moscow', country: 'Russia' }
            },
            {
                id: 6, photoUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-mandalorian-1572282426.jpg?crop=0.8217522658610272xw:1xh;center,top&resize=1200:*',
                followed: true, fullName: 'Hi, how are you??', status: 'Hi, nice to meet you', location: { city: 'Moscow', country: 'Russia' }
            }
        ])
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto} />
                        </div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;