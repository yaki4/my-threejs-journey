import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// // mesh.position.x = 0.7
// // mesh.position.y = - 0.6
// // mesh.position.z = 1
// mesh.position.set(0.7, -0.6, 1)
// mesh.scale.set(2, .5, .5)

// // Rotation
// mesh.rotation.reorder('YXZ')
// mesh.rotateY(Math.PI) // MOITIÉ de rotation un rotation compléte est 2 X PI Math.pi / 2 give a quarter of rotation
// mesh.rotateX(Math.PI * 0.25)
// scene.add(mesh)


// Group => group of object
const group = new THREE.Group()
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
cube2.position.x = -2
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
)
cube3.position.x = 2
// Adding cube to group
group.add(cube1)
group.add(cube2)
group.add(cube3)
// Adding group to scene
group.position.y = 1 // all object in group will go up 
scene.add(group)

// Axes helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)
/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
// camera.position.y = .5
// camera.position.z = 5
// camera.lookAt(group.position)
// camera.lookAt(mesh.getWorldPosition()) => retourne la position de l'objet dans la scene ou dans le context passe en paramètre

scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera) // Frame rendering. A render make a one point in time