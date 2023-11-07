import './PickAvatar.scss';

import axios from 'axios';
import { useState, useEffect } from 'react';

function PickAvatar() {
    const [avatars, setAvatars] = useState([]);

    useEffect( () => {

        async function getAvatars() {
            const response = await axios.get('http://localhost:8080/avatars');
            setAvatars(response.data);
        }
        getAvatars();

    }, []);


    return (
        <main className='pick-avatar'>

            <h2 className='pick-avatar__heading'>
                PICK AN AVATAR
            </h2>

            {
                avatars &&
                <ul className='pick-avatar__avatars'>
                    {
                        avatars.map( avatar => (
                            <li key={avatar.id} className='pick-avatar__avatars-avatar'>
                                <img src={avatar.avatar} alt='avatar' className='pick-avatar__avatars-image'></img>
                            </li>
                        ))
                    }
                </ul>
            }
            
        </main>
    )
}

export default PickAvatar;