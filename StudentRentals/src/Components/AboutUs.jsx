import React from "react";
import '../CSS/AboutUs.css'
import carlo from '../Images/carlo.jpg'
import trixie from '../Images/trixie.png'
import ken from '../Images/ken.jpg'
import caloy from '../Images/sada.jpg'

const num = '9123456789'

function AboutUs(){
  return (
    <div className="au-container">

      <div className="au-card">
      <div className="devs">
          <img 
            src={caloy} 
            alt="carlo"
            style={{
              height: '250px',
              width: '250px',
              borderRadius: '50%',
              margin: '30px',
              objectFit: 'cover',
              boxShadow: '0px 0px 10px #F28500'
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
              height: '250px',
              width: '250px',
              borderRadius: '50%',
              margin: '30px',
              objectFit: 'cover',
              boxShadow: '0px 0px 10px #F28500'
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
              height: '250px',
              width: '250px',
              borderRadius: '50%',
              margin: '30px',
              objectFit: 'cover',
              boxShadow: '0px 0px 10px #F28500'
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
          <p>"A LITTLE PROGRESS EACH DAY ADDS UP TO BIG RESULTS"</p>
          <h5>- Sarya Nani</h5>
          </div>
          <div className="motto-container">
          <p>"A LITTLE PROGRESS EACH DAY ADDS UP TO BIG RESULTS"</p>
          <h5>- Sarya Nani</h5>
          </div>
          <div className="motto-container">
          <p>"A LITTLE PROGRESS EACH DAY ADDS UP TO BIG RESULTS"</p>
          <h5>- Sarya Nani</h5>
          </div>
        </div>
      </div>
      

    </div>
  )
}

export default AboutUs