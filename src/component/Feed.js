import React, { useEffect, useState } from 'react';
import '../css/Feed.css';
import db from '../firebase';
import Post from './Post';
import QNABox from './QNABox';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("questions").orderBy("timestamp", "desc").onSnapshot((snapshot) => setPosts(snapshot.docs.map((doc) => ({
            id: doc.id,
            question: doc.data(),
        }))
        )
        );
    }, []);

    return (
        <div className='feed'>
            <QNABox />
            {
                posts.map(({ id, question }) => (
                    <Post
                        key={id}
                        Id={id}
                        imageUrl={question.imageUrl}
                        question={question.question}
                        timestamp={question.timestamp}
                        qnaUser={question.user}
                    />
                ))
            }
        </div>
    )
}

export default Feed
