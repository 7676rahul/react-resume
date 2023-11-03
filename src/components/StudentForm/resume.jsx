import React from 'react'
import camera from '../../rahul.JPG';

function Resume() {
    return (
        <div>
            <div className="image">
                <img src={camera} />
            </div>
            <div className="container">
                <h1 style={{ textAlign: 'center' }}>RAHUL MENDON</h1>

                <div className="contact-info">
                    <p>Email: rahulmendon6@gmail.com</p>
                    <p>Phone: +917204195224</p>


                    <div className="about">
                        <h2>About</h2>
                        <p> To become a successful expert in the field of Artificial Intelligence & Data Science by channelizing
                            my technical knowledge and skills to ensurepersonal and professional growth and to contribute to the
                            prosperity growth and to contribute to the prosperity of the organization</p>

                    </div>

                    <div className="education">
                        <h2>Education</h2>
                        Mukunda Kripa(2007-2015)<p><br /><br />IEMHS,Indrali(2016-2019) <br /><br /> MGM PU
                            college (2019-2021)<br /><br />
                            SMVITM (2021-PRESENT) </p>
                    </div>

                    
                    <div className="technicalskills">
                        <h2>Technical Skills</h2>
                        <p> C<br />C++<br />Microsoft Word<br />MS Office<br />Java<br />Python</p>

                    </div>
                    <div className="keyskills">
                        <h2>Key Skills</h2>
                        <p> Team Management<br />Project Management<br />Problem Solving<br />Decision Making<br />Active
                            Listener<br />Public Speaking</p>

                    </div>
                    <div className="achievements">
                        <h2>Achievements</h2>
                        <p> 3rd prize in district level triple jump<br /><br /> succesfully completed 2 years of engineering</p>

                    </div>
                </div>npm start
            </div>
        </div>
    )
}

export default Resume