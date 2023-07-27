import React from 'react'
import './Try.css'
import shade from './../images/shadow-removebg-preview.png'
import ReactCompareImage from 'react-compare-image';
import before from './../images/Inkedbefore-removebg-preview_LI.jpg'
import after from './../images/Inkedafter-removebg-preview_LI.jpg'
const Try = () => {
  return (
    <div className="try">
        <div className="try_left">
            <span>TRY-ON</span>
                <span>Never Buy Wrong Shade Againel</span>
                <span>Try Now </span>
                <img src={shade} />
        </div>
        <div className="try_right">
            <div className="wraper">
            <ReactCompareImage leftImage={before} rightImage={after} />
            </div>
        </div>
    </div>
  )
}

export default Try