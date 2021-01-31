Il existe plusieurs types de caméra dépendant de la class Camera
  ArrayCamera => rendu de scène depuis plusieurs caméra sur des endroit spécifique du rendu (multijoueur sur meme écran)
  StereoCamera => Rendu de 2 caméras pour la VR
  CubeCamera => 6 rendu sur chaque face d'un cube (utile pour ombre, reflexion, environnement map)
  
  PerspectiveCamera 
    => rendu avec perspective
    Parametres => 
      FOV degres (entre 45 et 75 recommandé), doit être défini au début du projet pour évité de devoir tout repositionné
      Apect Ratio, la largeur divisé par la largeur
      Near, plus proche que la caméra peut voir
      Far, plus loin que la caméra peut voir
      Si near et far trop grand alors la librairie n'est pas capable de déterminé quel objet est devant l'autre z-fighting
      En jouant avec les paramètres near et far on peut allégé l'app vue que tout ne sera pas rendu.
  
  OrthographicCamera 
    => rendu sans perspective (pas de profondeur). Rendu en rectanle et non en cône contraîrement à la perspective camera
    => Tout les objets vont avoir la même taille. Déforme les objets si on passes un carré en paramètre et que notre scène est rectangle.
    => On peut utilisé l'aspect ratio (width/height) pour palié au problème (left * aspectRatio, right * aspectRatio)
    Parametres => Sur nos axes
      left
      right
      top
      bottom
      Near
      Far

Contrôles
  Pour calé la souris sur la caméra
    => on a besoin d'un evénement qui récupère les coordonnées de la souris
      Les valeurs que l'on récupère doivent être modifiée pour être comprises entre 0 et 1. Plus simple pour manipulé
      => L'exemple en dessous donnera des coordo entre -0.5 et 0.5 avec une coordo au centre de l'écran de 0
        window.addEventListener('mousemove', (event) => {
          cursor.x = event.clientX / sizes.width - 0.5
          cursor.y = event.clientY / sizes.height - 0.5
        })
      => Dans notre loop de rendu on viendra faire correspondre le cursor x a position x
    => Position autour d'un objet qui sera à 0,0
      // math.pi * 2 pour une résolution compléte et Math.sin pour des valeurs qui oscillent entre 0 et 1
      camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
      camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3
      camera.position.y = cursor.y * 3
      camera.lookAt(mesh.position)
  THREE a des classes pour géré plus facilement les contrôles
    Plus besoin d'updaté les coordonnées de caméra à la main => Les classes suivantes s'en chargent
    DeviceOrientationControls 
      => récupère les coordo x,y,z du téléphone pour les mappès sur la caméra (!!! IOS ne le supporte plus pour le moment)
    FlyControls
      => Comme un vaisseau spatial https://threejs.org/examples/#misc_controls_fly
    FirstPersonControl
      => proche de flyControls mais on ne peut pas contrôlé la rotation https://threejs.org/examples/#webgl_geometry_terrain
    PointerLockControls
      => proche de fps dans un jeu https://threejs.org/examples/#misc_controls_pointerlock
    OrbitControls
      => Le plus commun on peut zoomé, faire des rotations, https://threejs.org/examples/#misc_controls_orbit
      => Pas dans la librairie par défaut, on peut l'importé avec => import { OrbitsControls } from 'three/examples/jsm/controls/OrbitControls.js'
      => paramètres
        Camera
        Dom Element de reference
        et controls.enableDamping = true pour avoir des contrôles smooth comme dans l'exemple
        => !! ne pas oublié de updaté les controls dans notre loop de rendu controls.update()
    TrackBallControls
      => comme orbitControls sans limit vertical (360 sur y) https://threejs.org/examples/#misc_controls_trackball
    TransformControls
      => pas pour la caméra mais permet de bougé des objets (comme un éditeur) https://threejs.org/examples/#misc_controls_transform
    DragControls
      => permet de bouger les objets aussi pas pour caméra https://threejs.org/examples/#misc_controls_drag
  
  Comment choisir le bon type de contrôle
    => Dépendant de votre contexte et ce que l'on veut réalisé. si il manque une feature