import { useEffect } from 'react'

// Adapted from oneko.js (https://github.com/adryd325/oneko.js) — the cat chases
// the cursor and, once it catches up, sits and grooms/sleeps. Sprite animation
// is driven by shifting the background-position across a 32px sprite sheet.

const SPRITE_SIZE = 32
const NEKO_SPEED = 10
const IDLE_DISTANCE = 48 // sit this far from the cursor, so it rests beside it

type SpriteSets = Record<string, [number, number][]>

const spriteSets: SpriteSets = {
  idle: [[-3, -3]],
  alert: [[-7, -3]],
  scratchSelf: [
    [-5, 0],
    [-6, 0],
    [-7, 0],
  ],
  scratchWallN: [
    [0, 0],
    [0, -1],
  ],
  scratchWallS: [
    [-7, -1],
    [-6, -2],
  ],
  scratchWallE: [
    [-2, -2],
    [-2, -3],
  ],
  scratchWallW: [
    [-4, 0],
    [-4, -1],
  ],
  tired: [[-3, -2]],
  sleeping: [
    [-2, 0],
    [-2, -1],
  ],
  N: [
    [-1, -2],
    [-1, -3],
  ],
  NE: [
    [0, -2],
    [0, -3],
  ],
  E: [
    [-3, 0],
    [-3, -1],
  ],
  SE: [
    [-5, -1],
    [-5, -2],
  ],
  S: [
    [-6, -3],
    [-7, -2],
  ],
  SW: [
    [-5, -3],
    [-6, -1],
  ],
  W: [
    [-4, -2],
    [-4, -3],
  ],
  NW: [
    [-1, 0],
    [-1, -1],
  ],
}

export function Oneko({ spriteUrl = '/oneko.gif' }: { spriteUrl?: string }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches
    // No cursor to follow on touch devices, and honor reduced-motion.
    if (prefersReducedMotion || !hasFinePointer) return

    const nekoEl = document.createElement('div')
    let nekoPosX = 32
    let nekoPosY = 32
    let mousePosX = window.innerWidth / 2
    let mousePosY = window.innerHeight / 2

    let frameCount = 0
    let idleTime = 0
    let idleAnimation: string | null = null
    let idleAnimationFrame = 0

    nekoEl.id = 'oneko'
    nekoEl.setAttribute('aria-hidden', 'true')
    nekoEl.style.width = `${SPRITE_SIZE}px`
    nekoEl.style.height = `${SPRITE_SIZE}px`
    nekoEl.style.position = 'fixed'
    nekoEl.style.pointerEvents = 'none'
    nekoEl.style.imageRendering = 'pixelated'
    nekoEl.style.backgroundImage = `url(${spriteUrl})`
    nekoEl.style.zIndex = '55'
    nekoEl.style.left = `${nekoPosX - SPRITE_SIZE / 2}px`
    nekoEl.style.top = `${nekoPosY - SPRITE_SIZE / 2}px`
    document.body.appendChild(nekoEl)

    const onMouseMove = (event: MouseEvent) => {
      mousePosX = event.clientX
      mousePosY = event.clientY
    }
    window.addEventListener('mousemove', onMouseMove)

    function setSprite(name: string, frame: number) {
      const frames = spriteSets[name]
      const sprite = frames[frame % frames.length]
      nekoEl.style.backgroundPosition = `${sprite[0] * SPRITE_SIZE}px ${
        sprite[1] * SPRITE_SIZE
      }px`
    }

    function resetIdleAnimation() {
      idleAnimation = null
      idleAnimationFrame = 0
    }

    function idle() {
      idleTime += 1

      // Once the cat has settled, soon start grooming (biased) or napping.
      if (idleTime > 12 && idleAnimation == null && Math.random() < 0.2) {
        const options = ['scratchSelf', 'scratchSelf', 'sleeping']
        if (nekoPosX < SPRITE_SIZE) options.push('scratchWallW')
        if (nekoPosY < SPRITE_SIZE) options.push('scratchWallN')
        if (nekoPosX > window.innerWidth - SPRITE_SIZE)
          options.push('scratchWallE')
        if (nekoPosY > window.innerHeight - SPRITE_SIZE)
          options.push('scratchWallS')
        idleAnimation = options[Math.floor(Math.random() * options.length)]
      }

      switch (idleAnimation) {
        case 'sleeping':
          if (idleAnimationFrame < 8) {
            setSprite('tired', 0)
            break
          }
          setSprite('sleeping', Math.floor(idleAnimationFrame / 4))
          if (idleAnimationFrame > 192) resetIdleAnimation()
          break
        case 'scratchWallN':
        case 'scratchWallS':
        case 'scratchWallE':
        case 'scratchWallW':
        case 'scratchSelf':
          setSprite(idleAnimation, idleAnimationFrame)
          if (idleAnimationFrame > 9) resetIdleAnimation()
          break
        default:
          setSprite('idle', 0)
          return
      }
      idleAnimationFrame += 1
    }

    function step() {
      frameCount += 1
      const diffX = nekoPosX - mousePosX
      const diffY = nekoPosY - mousePosY
      const distance = Math.sqrt(diffX ** 2 + diffY ** 2)

      if (distance < IDLE_DISTANCE) {
        idle()
        return
      }

      resetIdleAnimation()

      if (idleTime > 1) {
        setSprite('alert', 0)
        idleTime = Math.min(idleTime, 7) - 1
        return
      }

      let direction = ''
      direction += diffY / distance > 0.5 ? 'N' : ''
      direction += diffY / distance < -0.5 ? 'S' : ''
      direction += diffX / distance > 0.5 ? 'W' : ''
      direction += diffX / distance < -0.5 ? 'E' : ''
      setSprite(direction, frameCount)

      nekoPosX -= (diffX / distance) * NEKO_SPEED
      nekoPosY -= (diffY / distance) * NEKO_SPEED

      nekoPosX = Math.min(
        Math.max(SPRITE_SIZE / 2, nekoPosX),
        window.innerWidth - SPRITE_SIZE / 2,
      )
      nekoPosY = Math.min(
        Math.max(SPRITE_SIZE / 2, nekoPosY),
        window.innerHeight - SPRITE_SIZE / 2,
      )

      nekoEl.style.left = `${nekoPosX - SPRITE_SIZE / 2}px`
      nekoEl.style.top = `${nekoPosY - SPRITE_SIZE / 2}px`
    }

    let rafId = 0
    let lastFrameTimestamp = 0
    function onAnimationFrame(timestamp: number) {
      if (!nekoEl.isConnected) return
      if (!lastFrameTimestamp) lastFrameTimestamp = timestamp
      // Throttle the sprite/movement loop to ~10fps for the classic look.
      if (timestamp - lastFrameTimestamp > 100) {
        lastFrameTimestamp = timestamp
        step()
      }
      rafId = window.requestAnimationFrame(onAnimationFrame)
    }
    rafId = window.requestAnimationFrame(onAnimationFrame)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.cancelAnimationFrame(rafId)
      nekoEl.remove()
    }
  }, [spriteUrl])

  return null
}
