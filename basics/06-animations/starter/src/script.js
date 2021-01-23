import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
// const clock = new THREE.Clock()
// gsap.to objet, destination
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })
// animations
const tick = () => 
{
    // const elapsedTime = clock.getElapsedTime() 

    // update object by delta
    // mesh.rotation.y = elapsedTime * Math.PI * 2 // un tour par seconde Math.pi * 2 == un tour ,elapsedTime = 1 secondes
    
    // camera's gonna make a circle
    // camera.position.y = Math.sin(elapsedTime)
    // camera.position.x = Math.cos(elapsedTime)
    // // but with the cube at the center
    // camera.lookAt(mesh.position)

    // render
    renderer.render(scene, camera)

    // call on next frame
    window.requestAnimationFrame(tick)
}

// we need to call the function to start the cycle
tick()