import React from 'react'
import './ProfileCard.scss'

import profilePic from '../../img/yogendra-singh-MRPE-EbR6MM-unsplash.jpg'

function ProfileCard() {
    return (
        <div id="profile-card">
            <img src={profilePic} alt={"hamsa"} />
            <div className="card-body">
                <h1>Hamsa</h1>
                <p>Front end developer</p>

                <div>
                    <p className="tags">Hamsa</p>
                    <p className="tags">Hamsa</p>
                    <p className="tags">Hamsa</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
