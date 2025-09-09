import React, { useState } from "react";

function ProfileCard(props) {
    const [LikeCount, setLikeCount] = useState(0);
    const handleLike = () => {
        setLikeCount(LikeCount + 1);
    };

    return (
        <div className="profile-card">
            <h1>이름 : {props.name}</h1>
            <h1>학번 : {props.studentId}</h1>
            <h1>전공 : {props.major}</h1>
            <button onClick = {handleLike}>
                좋아요 {LikeCount}
            </button>
        </div>
    )
}

export default ProfileCard;