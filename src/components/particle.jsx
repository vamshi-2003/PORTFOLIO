import React from 'react';
import Particles from 'react-tsparticles';

function Particle({ darkMode }) {
  const particleColor = darkMode ? '#ffffff' : '#393939'; // Adjust color based on dark mode

  return (
    <Particles
      id="tsparticles"
      className="z-10" // Apply the Tailwind z-index class here
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
      params={{
        particles: {
          number: {
            value: 300,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          color: {
            value: particleColor,
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: 'right',
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: 'push',
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
