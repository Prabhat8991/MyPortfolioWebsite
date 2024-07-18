import React from 'react'
import '../intro.css'
import myPic from '../images/my_pic.jpeg';


function IntroPage() {
    return (
        <div className='intro'>
            <div className='section' style={{background: 'black'}}>
                <img className='image' src={myPic} alt='my_pic'/>
                <div id='introheader'>
                <h1 className='source-code-pro '>Hi, I am Prabhat Singh</h1>
                <h2 className='source-code-pro '>Mobile and Web Developer</h2>
                </div>
            </div>
            <div className='section bottom' style={{background: '#f0f8ff', fontSize: '2em'}}>
                <a href='https://medium.com/@singh.prabhat8991' className='source-code-pro'>Blogs</a>
                <a href='https://www.linkedin.com/in/prabhat-singh-429325111/' className='source-code-pro'>LinkedIn</a>
                <a href='https://leetcode.com/u/Gambit8991/'  className='source-code-pro'>LeetCode</a>

            </div>
        </div>
    )
}

export default IntroPage