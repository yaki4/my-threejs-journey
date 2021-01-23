import './style.css'
import * as THREE from 'three'

//MINMAL WORKING SCENE

// A SCENE
const scene = new THREE.Scene()

// AN OBJECT (CUBE, MODELS, PARTICLES)
// mesh = combination of geometry(shape) and material(how it looks colors, flat,...)
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000 // Or #ff0000 value RRBBGG Or 'red'
})
const mesh = new THREE.Mesh(geometry, material)
// ADD IT TO THE SCENE !!!!!!!
scene.add(mesh) 

// A CAMERA
// on peut en avoir plusieurs mais le render en utilise quune seule
const sizes = {
  width: 800,
  height: 600
}
const camera = new THREE.PerspectiveCamera(75, (sizes.width / sizes.height)) // FOV (degres) , aspect ratio (width / height)
camera.position.z = 3 // vers nous
scene.add(camera)

// A RENDERER
// resultat dessiné dans un canvas dans le template ou le crer avec le renderer
const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({ // il y en dautres
  canvas
})
// pour mettre le render à la bonne taile
renderer.setSize(sizes.width, sizes.height) // va changer la taille du canvas dans le template

// On fait le rendu de la scene et camera
renderer.render(scene, camera) // Comme une photo => une frame
