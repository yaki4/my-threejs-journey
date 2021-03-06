import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { BufferGeometry } from 'three'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// DECLARATION TABLEAU FLOAT32 avec des coordonnées pour un triangle
// const positionsArray = new Float32Array(9)
// //vertex
// positionsArray[0] = 0 //X
// positionsArray[1] = 0 //Y
// positionsArray[2] = 0 //Z
// //vertex
// positionsArray[3] = 0 //X
// positionsArray[4] = 1 //Y
// positionsArray[5] = 0 //Z
// //vertex
// positionsArray[6] = 1 //X
// positionsArray[7] = 0 //Y
// positionsArray[8] = 0 //Z

// const positionsArray = new Float32Array([
//     0, 0, 0,
//     0, 1, 0,
//     1, 0, 0
// ])
// faisons plein de triangles random
const count = 5000
const positionsArray = new Float32Array(count * 3 * 3) // un triangle composé de 3 vertices
for (let i = 0; i < positionsArray.length; i++) {
    positionsArray[i] = (Math.random() - .5 ) * 5// pour centré
}
//bufferAttribute
const positionsAttributes = new THREE.BufferAttribute(positionsArray, 3)
const geometry = new BufferGeometry()
geometry.setAttribute('position', positionsAttributes)
// Object
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Animate
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()