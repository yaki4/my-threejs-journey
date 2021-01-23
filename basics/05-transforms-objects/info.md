4 proprieté pour transformer un objet
  position (x, y, z)
    hérite de Vector3  plusieurs méthodes disponibles via object.position.MethodeDeVector3()
      méthode de vector3 utile
        .length 
        .random
        .distanceTo // distance entre deux objects exemple: distance entre la caméra et mon cubee
        .normalize // prends la longueur du vector et la réduit à 1
        .set // on passe x y z
        .applyAxisAngle
        .angle
  scale (x, y, z)
    hérite aussi de vector3
  rotation (x, y, z)
    hérite de euler
  quaternion (x, y, z)
    hérite de euler
    Euler plus facile que quaternion. Quaternion est une représentation mathématique de la rotation

Propriétés accessibles dans tout les objets de la librairie (Mesh, PerspectiveCamera, boxGeometry)

AxesHelper est un objet permettant de réprensenter les axes visuellement (axe placés au centre de la scene à 0,0,0 avec une longueur de 1 unité par défaut, sinon on peut passer des valeurs pour x, y et z)

rotation objet avec rotation ou quaternion et l'un update l'autre
  on peut imaginé passé un baton à travers l'objet pour trouvé les axes de rotations.
    exemple le vent => axe x
  La valeur des axes est exprimé en radians
  Lorsque l'on change la valeur d'un axe, les autres changent aussi de direction. Un axe peut ne plus fonctionner donnera un gamble lock
  On peut changer l'ordre avec la méthode reorder('YXZ') => on applique le y puis le x puis le z 
    exemple => FPS je veux voir devant puis en bas

Pour regarder un object précis on peut utilisé lookAt.
  La méthode va faire une rotation sur l'objet qui utilise la méthode pour être en face du vector3 qu'on lui passe

On peut faire des groupes d'objet permettant de juste changé la position, rotation, scale du groupe
  Cela changera tout les objets du groupe
