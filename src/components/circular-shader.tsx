"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function ShaderAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    camera: THREE.Camera
    scene: THREE.Scene
    renderer: THREE.WebGLRenderer
    uniforms: any
    animationId: number
  } | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current

    // Vertex shader
    const vertexShader = `
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `

    // Fragment shader - Light theme with custom colors
    const fragmentShader = `
      #define TWO_PI 6.2831853072
      #define PI 3.14159265359

      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        float t = time * 0.05;
        float lineWidth = 0.002;

        // Original animation loop - unchanged
        vec3 color = vec3(0.0);
        for(int j = 0; j < 3; j++){
          for(int i = 0; i < 5; i++){
            color[j] += lineWidth * float(i*i) / abs(fract(t - 0.01*float(j) + float(i)*0.01) * 5.0 - length(uv) + mod(uv.x+uv.y, 0.2));
          }
        }
        
        // Clamp color values
        vec3 clampedColor = clamp(color, 0.0, 1.0);
        
        // Invert for light theme (white background)
        vec3 invertedColor = vec3(1.0) - clampedColor;
        
        // Remap RGB to custom colors: dark blue, light blue, purple, pink, yellow
        // R channel -> Pink/Yellow tones
        // G channel -> Light blue/Purple tones  
        // B channel -> Dark blue/Purple tones
        vec3 darkBlue = vec3(0.1, 0.15, 0.4);
        vec3 lightBlue = vec3(0.4, 0.7, 0.95);
        vec3 purple = vec3(0.6, 0.3, 0.7);
        vec3 pink = vec3(0.95, 0.5, 0.65);
        vec3 yellow = vec3(1.0, 0.9, 0.4);
        
        // Mix custom colors based on the original color channels
        vec3 customColor = 
          clampedColor.r * pink +
          clampedColor.g * lightBlue +
          clampedColor.b * purple +
          (clampedColor.r * clampedColor.g) * yellow +
          (clampedColor.b * (1.0 - clampedColor.r)) * darkBlue;
        
        // Normalize and create light theme
        customColor = clamp(customColor, 0.0, 1.0);
        vec3 backgroundColor = vec3(0.99, 0.98, 0.97);
        vec3 finalColor = mix(backgroundColor, customColor, length(clampedColor) * 0.9);
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `

    // Initialize Three.js scene
    const camera = new THREE.Camera()
    camera.position.z = 1

    const scene = new THREE.Scene()
    const geometry = new THREE.PlaneGeometry(2, 2)

    const uniforms = {
      time: { type: "f", value: 1.0 },
      resolution: { type: "v2", value: new THREE.Vector2() },
    }

    const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor(0xffffff, 1) // Set clear color to white

    container.appendChild(renderer.domElement)

    // Handle window resize
    const onWindowResize = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      renderer.setSize(width, height)
      uniforms.resolution.value.x = renderer.domElement.width
      uniforms.resolution.value.y = renderer.domElement.height
    }

    // Initial resize
    onWindowResize()
    window.addEventListener("resize", onWindowResize, false)

    // Animation loop
    const animate = () => {
      const animationId = requestAnimationFrame(animate)
      uniforms.time.value += 0.05
      renderer.render(scene, camera)

      if (sceneRef.current) {
        sceneRef.current.animationId = animationId
      }
    }

    // Store scene references for cleanup
    sceneRef.current = {
      camera,
      scene,
      renderer,
      uniforms,
      animationId: 0,
    }

    // Start animation
    animate()

    // Cleanup function
    return () => {
      window.removeEventListener("resize", onWindowResize)

      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId)

        if (container && sceneRef.current.renderer.domElement) {
          container.removeChild(sceneRef.current.renderer.domElement)
        }

        sceneRef.current.renderer.dispose()
        geometry.dispose()
        material.dispose()
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full h-screen"
      style={{
        background: "#fff",
        overflow: "hidden",
      }}
    />
  )
}
