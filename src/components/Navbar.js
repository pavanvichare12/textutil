import React from 'react'


export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <h1 className={`my-1 text-${props.mode==='light'?'dark':'light'}`}>TextUtils</h1>
        </div>
        <div className={`form-check form-switch mx-3 text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>  
      </div>
    </nav>
    </>
  )
}
