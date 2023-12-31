import React from 'react'
import volume from "../assets/volume.svg"
import spo2line from "../assets/spo2Line.svg"
import Header from '../../HeaderBar'
//import { CircularProgressbar,buildStyles} from 'react-circular-progressbar';

const HRCircularBarResult = (props) => {
    console.log("props  wewe", props)
  return (
    <>
      <div className="stethescopeinput-container">
        <div className="stethescopeinput-container1">
          <Header rootClassName="header-root-class-name21"></Header>
          <div className='circular-progressbar'>
          </div>
            <span className='hr-circular-progressbar-spo2-top'>{props.data.spo2}</span>
            <span className='hr-circular-progressbar-top-left'>SpO2</span>
            <span className='hr-circular-progressbar-top-right'>%</span>
             <span className='hr-circular-progressbar-spo2-bottom'>{props.data.hr}</span>
             <span className='hr-circular-progressbar-bottom-right'>BPM</span>
             <span className='hr-circular-progressbar-bottom-left'>HR</span>
             <img
            alt="image"
            src={spo2line}
            className="spo2-line-image"
          />
          <button className="stethescopeinput-button button">
          <img
            alt="image"
            src={volume}
            className="stethescopeinput-image1"
          />
          </button>
         
          <button className="circular-progressbar-stop-button">
             Stop test
          </button>
          <button className="circular-progressbar-result-button"
          onClick={props.onContinueClick}
          >
          Continue
          </button>


        </div>
      </div>
      <style jsx>
        {`
        .spo2-line-image{
            position: absolute;
            width: 229.57px;
            height: 25.5px;
            left: 386.38px;
            top: 270px;

        }
        .hr-circular-progressbar-bottom-right
        {
            position: absolute;
            width: 29px;
            height: 19px;
            left: 547px;
            top: 345px;
            margin-left:12px;
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;

            color: #263540;
        }
        .hr-circular-progressbar-bottom-left
        {
            position: absolute;
            width: 19px;
            height: 19px;
            left: 437px;
            top: 345px;

            font-family: 'Manrope';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            margin
            line-height: 19px;
            text-align: right;

            color: #263540;
        }
        .hr-circular-progressbar-top-right{
            position: absolute;
            width: 13px;
            height: 19px;
            left: 563px;
            top: 237px;

            font-family: 'Manrope';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;

            color: #263540;
        }
        .hr-circular-progressbar-top-left{
            position: absolute;
            width: 36px;
            height: 19px;
            left: 420px;
            top: 237px;

            font-family: 'Manrope';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;
            text-align: right;

            color: #263540;
            }
        .hr-circular-progressbar-spo2-top{
            position: absolute;
            width: 80px;
            height: 87px;
            left: 461px;
            top: 188px;
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 600;
            font-size: 64px;
            line-height: 87px;
            display: flex;
            align-items: center;
            text-align: center;
            margin-right: 32px;

            color: #1AB58F;
        }
        .hr-circular-progressbar-spo2-bottom{
            position: absolute;
                width: 79px;
                height: 87px;
                left: 462px;
                top: 292px;
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 600;
            font-size: 64px;
            line-height: 87px;
            display: flex;
            align-items: center;
            text-align: center;

            color: #1AB58F;  
        }
        .circular-progressbar-result-button{
            position: absolute;
                width: 240px;
                height: 54px;
                left: 519px;
                top: 493px;
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 22px;
                text-align: center;

                color: #FFFFFF;
                border:none;
                background: #1AB58F;
                box-shadow: 0px 10px 20px rgba(11, 68, 90, 0.16);
                border-radius: 10px;
        }
          .circular-progressbar-stop-button
          {
            position: absolute;
            width: 241.93px;
            height: 54px;
            left: 265px;
            top: 493px;
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            /* identical to box height */

            text-align: center;

            color: #1AB58F;
            background: #FFFFFF;
            border: 1px solid #1AB58F;
            box-shadow: 0px 10px 20px rgba(11, 68, 90, 0.16);
            border-radius: 10px;
          }
         .circular-progressbar-text-sign{
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;
            text-align: center;

            color: #263540;
         } 
        .circular-progressbar-text
        {
            {/* position: absolute; */}
            {/* width: 80px;
            height: 87px; */}
            {/* left: 462px;
            top: 238px; */}

            font-family: 'Manrope';
            font-style: normal;
            font-weight: 600;
            font-size: 64px;
            line-height: 87px;
            margin-left:32px;
            color: #1AB58F;
         }

        .circular-progressbar
        {
            box-sizing: border-box;

            position: absolute;
            width: 257.68px;
            height: 257.68px;
            left: 373.89px;
            top: 157.21px;
            border-radius:175px;
            border: 3px solid #1AB58F;
            display: flex;
            padding:54px;
            align-items: center;
            text-align: center;

        }
          .stethescopeinput-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .stethescopeinput-container1 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 1024px;
            bottom: 0px;
            height: 600px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .stethescopeinput-button {
            top: 68px;
            left: 41px;
            color: #1ab58f;
            width: 43.44px;
            height: 43.44px;
            position: absolute;
            font-size: 16px;
            box-shadow: 0px 10px 20px 0px rgba(36, 99, 14, 0.17);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 2.5;
            border-width: 0px;
            border-radius: 5px;
            background-color: #ffffff;
            display:flex;
            justify-content: center;
            align-items: center;
          }
          .stethescopeinput-image1 {
          
            width: 32.75px;
            height: 32.89px;
          
          }


        `}
      </style>
    </>
  )
}

export default HRCircularBarResult