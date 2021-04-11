Une geometry est composé de vertices (vertex) 
  => coordonnées en 3d (position)
  => UV coordinates
  => Normal
  => Custom data ( couleur, taille, ce qu'on veut, ...)
Relié ensemble ça donne des faces
Si on veut faire des particules alors on utilise juste des vertices sans les reliés

Objet geometrie hérite de bufferGeometry
Geometry existante:
  - BoxGeometry => cube
      => 6 param: width(taille sur axe x), height (taille sur axe y), depth (taille sur z), widthSegments (nombre de triangle pour le x), heightSegments (nombre de triangle pour le y), depthSegments (nombre de trinagle pour le z)
        => new THREE.BoxGeometry(1, 1, 1, 2, 2, 2) 1 de largeur/ de haut/ de profondeur, 2 triangles sur chaques faces en largeur/hauteur/profondeur
   - PlaneGeometry => Deux triangles collé (une face de cube)
  - CircleGeometry => un cercle
  - ConeGeometry => un cone
  - CylinderGeometry => cylindre
  - RingGeometry => cercle avec trou au milieu
  - TorusGeometry => anneau
  - TorusKnotGeometry => deux torus l'un dans l'autres
  - DodecahedronGeometry
  - OctahedronGeometry => 8 face
  - TetrahedronGeometry
  - IcosahedrontGeometry
  - SphereGeometry => sphere
  - ShapeGeometry => se base sur les curves et bezier curve
  - TubeGeometry => tube
  - ExtrudeGeometry =>
  - LatheGeometry => On passe des valeurs pour une ligne et la gorme fait le tour
  - TextGeometry => Text

Wireframe d'une forme => sur le basic Material option wireframe: true
On peut combiné les forms pour faire des choses complexes:
  exemple: une maison => box + Cone


Pourquoi plus de triangles (complexité/ subdivision dans la forme/ segments) :
  - Exemple: Lors de la représentation d'un terrain, pour représenté les différentes hauteurs présentes nous avons besoins de divisé notre surface en plusieur
    triangle pour bougé chaque point afin qu'il corresponde à la bonne hauteur

Créer sa propre forme avec BufferGeometry:
  - On stock les vertex dans un tableau Float32Array (peut seulement stocké des floats, dispose d'un longueur fixe, moins gourmand qu'un array classique de js)
  - On converti le tableau en bufferAttribute (new BufferAttribute(tableau, nombre de valeurs par vertex))
  - On créé le bufferGeometry puis on ajout l'attribut position (geometry.setAttribute('position', positionsAttributes))


Le même vertex peut être partagé par plusieurs triangles. Un cube par exemple a des triangles qui se touche sur les différentes faces.
 On peut donc réduire la taille de notre FloatArray vue que certaines valeurs seront partagés.
 La propriété s'appelle index dans le bufferAttribute
