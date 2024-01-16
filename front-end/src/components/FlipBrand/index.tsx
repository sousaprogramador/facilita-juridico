import gsap from 'gsap'
import { Flip } from 'gsap/Flip'
import { useLayoutEffect } from 'react'

import './styled.css'

gsap.registerPlugin(Flip)
export const FlipBrand = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const layouts = ['final', 'plain', 'columns', 'grid']
      const container = document.querySelector('.container')
      let curLayout = 0

      function nextState() {
        if (!container) return
        const state = Flip.getState('.letter, .for, .gsap', {
          props: 'color,backgroundColor',
          simple: true,
        })

        container.classList.remove(layouts[curLayout])
        curLayout = (curLayout + 1) % layouts.length
        container.classList.add(layouts[curLayout])

        Flip.from(state, {
          absolute: true,
          stagger: 0.07,
          duration: 0.3,
          ease: 'power2.inOut',
          spin: curLayout === 0,
          simple: true,
          onEnter: (elements) => gsap.fromTo(elements, { opacity: 0 }, { opacity: 1, delay: 0.1 }),
          onLeave: (elements) => gsap.to(elements, { opacity: 0 }),
        })

        gsap.delayedCall(curLayout === 0 ? 3.5 : 1.5, nextState)
      }

      gsap.delayedCall(1, nextState)
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="main">
      <div className="container final">
        <div className="letter bg-yellow-200">R</div>
        <div className="letter bg-yellow-200">O</div>
        <div className="letter bg-yellow-200">T</div>
        <div className="letter bg-yellow-200">E</div>
        <div className="letter bg-yellow-200">I</div>
        <div className="letter bg-yellow-200">R</div>
        <div className="letter bg-yellow-200">I</div>
        <div className="letter bg-yellow-200">Z</div>
        <div className="letter bg-yellow-200">A</div>
        <div className="letter bg-yellow-200">D</div>
        <div className="letter bg-yellow-200">O</div>
        <div className="letter bg-yellow-200">R</div>
      </div>
    </div>
  )
}
