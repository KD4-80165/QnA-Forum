import React from 'react';
import '../css/SidebarOptions.css';
import { Add } from "@material-ui/icons";

function SidebarOptions() {
    return (
        <div className='sidebarOptions'>
            <div className="sidebarOption">
                <img
                    src='https://media.istockphoto.com/photos/aerial-over-north-carolina-central-university-in-the-spring-picture-id1323420737?b=1&k=20&m=1323420737&s=170667a&w=0&h=rYBFNoi7xqsO83MSJmrWeR2kLkD5S8zqAU9mV1mJNA8='
                    alt=""
                />
                <p>Campus</p>
            </div>
            <div className="sidebarOption">
                <img
                    src='https://media.istockphoto.com/photos/setting-the-page-on-fire-with-some-hard-work-picture-id492198113?b=1&k=20&m=492198113&s=170667a&w=0&h=CBWxkL9fuZlpUKhnYVsWzcuGGrXiYTs7kxYgOlsSUoY=' alt='' />
                <p>Exams</p>
            </div>
            <div className="sidebarOption">
                <img
                    src='https://media.istockphoto.com/photos/close-up-interviewer-interview-candidate-apply-for-job-at-meeting-in-picture-id1159531985?b=1&k=20&m=1159531985&s=170667a&w=0&h=D4exMHpgM7_PPT7_tMvRkF1bbb1EYj1VPwViE_bPNRs=' alt='' />
                <p>Placements</p>
            </div>

            <div className="sidebarOption">
                <img
                    src='https://media.istockphoto.com/photos/cheering-crowd-at-a-concert-picture-id1049022558?b=1&k=20&m=1049022558&s=170667a&w=0&h=3RejXtNiutsfWJs7sBSESAJGwyfcNq6b1aA2Ya6d9OA=' alt='' />
                <p>Events</p>
            </div>

            <div className="sidebarOption">
                <img
                    src='https://media.istockphoto.com/photos/too-many-questions-picture-id487063216?b=1&k=20&m=487063216&s=170667a&w=0&h=IwEuixE6Z6VQiv73JHcsZq66sI1lA-2Ft63ySxZKVt8=' alt='' />
                <p>Others</p>
            </div>
            <div className='sidebarOption'>
                <Add />
                <p>Add</p>
            </div>
        </div>
    )
}

export default SidebarOptions
