import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import '../css/QNABox.css';
import { selectUser } from '../features/userSlice';

function QNABox() {
  const user=useSelector(selectUser)
    return (
        <div className='qnabox'>
            <div className="qnaBox__info">
        <Avatar src={user.photo}
        className="qnabox__infoAvatar"/>
        <h5>{user.displayName}</h5>
      </div>
      <div className="qnabox__qna">
        <p>What is your question?</p>
      </div>
        </div>
    )
}

export default QNABox
