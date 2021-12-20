import Particles from 'react-particles-js';

import React from 'react';

function Particle() {
  return (
    <>
      <Particles width="100%" height="100vh" 
              params={{
                particles: {
                  number:{
                    value: 100,
                    density:{
                      enable: true,
                      value_area: 1400
                    }
                  },
                  color:{
                    value: '#636e72'
                  },
                  shape:{
                    type: 'circle',
                    stroke: {
                      width: 0
                    },
                    polygon:{
                      nb_sides: 2
                    }
                  },
                  line_linked: {
                    enable: true,
                    distance: 69,
                    opacity: 0.7,
                    width: 2,
                    shadow: {
                      enable: true,
                      color: "#e74c3c",
                      blur: 5
                    }
                  },
                  move:{
                    enable: true,
                    random: true,
                    speed: .2,
                    attract:{
                      rotateX: 600,
                      rotateY: 1200
                    }
                  },
                  size: {
                    value: 7,
                    random: true,
                    anim:{
                      speed: 8,
                      size_min: 5
                    }
                  },
                  opacity: {
                    value: 0.8,
                    anim: {
                      speed: 0.2,
                      opacity_min: 0.3
                    }
                  }
                }
              }}
      />
    </>
  )
}

export default Particle;
