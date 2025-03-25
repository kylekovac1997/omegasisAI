import React, { useEffect } from 'react'
import '../../styles/AnimatedBg.css'

const AnimatedBg: React.FC = () => {
  useEffect(() => {
    // Create particles
    const container = document.querySelector('.animated-bg')
    if (!container) return

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div')
      particle.classList.add('particle')
      particle.style.top = `${Math.random() * 100}%`
      particle.style.left = `${Math.random() * 100}%`
      const size = `${Math.random() * 5 + 2}px`
      particle.style.width = size
      particle.style.height = size
      particle.style.opacity = `${Math.random() * 0.5 + 0.3}`
      particle.style.animationDuration = `${Math.random() * 10 + 10}s`
      particle.style.animationDelay = `${Math.random() * 5}s`
      container.appendChild(particle)
    }

    // Cleanup on unmount
    return () => {
      const particles = container.querySelectorAll('.particle')
      particles.forEach(particle => {
        container.removeChild(particle)
      })
    }
  }, [])

  return (
    <div className="animated-bg">
      <div className="grid-line"></div>
    </div>
  )
}

export default AnimatedBg