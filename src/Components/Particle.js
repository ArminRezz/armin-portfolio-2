import React from "react";
import Particles from "react-particles-js";

function Particle() {
  return (
    <>
      <Particles width="100%" height="100vh" 
        params={{
            "particles": {
                "number": {
                    "value": 160,
                    "density": {
                        "enable": false
                    }
                },
                color:{
                    value: '#636e72'
                },
                "size": {
                    "value": 8,
                    "random": true
                },
                "move": {
                    "direction": "bottom",
                    "out_mode": "out"
                },
                "line_linked": {
                    "enable": false
                }
            },
        }} />
    </>
  )
}

export default Particle;
