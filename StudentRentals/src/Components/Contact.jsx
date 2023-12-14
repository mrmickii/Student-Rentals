import React from "react";
import '../CSS/Contact.css'
import trixie from '../Images/trixie.png'
import ken from '../Images/ken.jpg'
import carlo from '../Images/caloy.jpg'

const num = '9123456789'

function AboutUs(){
  return (
    <div className="au-container">
      <div className="ffsh-text">
          <h1>OUR TEAM</h1>
      </div>
      <div className="au-card">
      <div className="devs">
          <img 
            src={carlo} 
            alt="carlo"
            style={{
              height: '150px',
              width: '150px',
              borderRadius: '50%',
              margin: '30px',
              objectFit: 'cover'
            }}
          />
          <div className="devs-info">
            <p>Carlo R. Garcia</p>
            <p style={{fontSize: '20px'}}>Developer</p>
            <button>
              <div style={{
                display: 'flex',
                marginLeft: '10px'
              }}>
                <box-icon name='phone' color='#F28500' size='sm' style={{
                }}></box-icon>
                <p style={{
                  margin: '2px 0px 0px 5px'
                }}>Call: {num}</p>
              </div>
            </button>
          </div>
        </div>

        <div className="devs">
          <img 
            src={trixie} 
            alt="trixie"
            style={{
              height: '150px',
              width: '150px',
              borderRadius: '50%',
              margin: '30px',
              objectFit: 'cover'
            }}
          />
          <div className="devs-info">
            <p>Trixie Gail Cloma</p>
            <p style={{fontSize: '20px'}}>Developer</p>
            <button>
              <div style={{
                display: 'flex',
                marginLeft: '10px'
              }}>
                <box-icon name='phone' color='#F28500' size='sm' style={{
                }}></box-icon>
                <p style={{
                  margin: '2px 0px 0px 5px'
                }}>Call: {num}</p>
              </div>
            </button>
          </div>
        </div>

        <div className="devs">
          <img 
            src={ken} 
            alt="ken"
            style={{
              height: '150px',
              width: '150px',
              borderRadius: '50%',
              margin: '30px',
              objectFit: 'cover'
            }}
          />
          <div className="devs-info">
            <p>Ken Alger Dimaymay</p>
            <p style={{fontSize: '20px'}}>Developer</p>
            <button>
              <div style={{
                display: 'flex',
                marginLeft: '10px'
              }}>
                <box-icon name='phone' color='#F28500' size='sm' style={{
                }}></box-icon>
                <p style={{
                  margin: '2px 0px 0px 5px'
                }}>Call: {num}</p>
              </div>
            </button>
          </div>
        </div>
        
        <div className="motto">
          <div className="motto-container">
          <p>"A little progress each day adds up to big results."</p>
          <h5>- Sarya Nani</h5>
          </div>
          <div className="motto-container">
          <p>"Nothing is impossible, the word itself says I'm possible."</p>
          <h5>- Audrey Hepburn</h5>
          </div>
          <div className="motto-container">
          <p>
            "Coding is not just about commands and syntax; it's a creative process that brings ideas to life"
          </p>
          <h5>- ChatGPT</h5>
          </div>
        </div>
      </div>
      

    </div>
  )
}

export default AboutUs