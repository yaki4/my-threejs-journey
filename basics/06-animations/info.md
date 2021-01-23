Animations dans THREE.js se fait une frame à la fois.
La fonction render génère une frame
Pour faire un update à chaque frame on va faire un window.requestAnimationFrame()

Request animation frame:
  va appelé une fonction à la prochaine frame une seule fois ( vue équivalent => $nextTick ou setTimeout qui est callé sur le render des frames)

  On utilise un valeur de temps pour faire un framerate commun à chaque machine ( date.now() => donne un timestamp qui sera commun pour chaque machine)
    => on fait un delta entre la première date et celle dans le render
    => un autre solution c'est d'utilisé Clock qui existe dans la librairie Three.js
      => dispose d'une méthode getElapsedTime() donnant le temps écoulé en secondes depuis le lancement du script
      => dispose de getDelta, ne pas utilisé car il va modifié le getElapsedTime() (un reset du temps)

Pour avoir des anims' plus clean avec plus de controls et timeline, c'est mieux d'utilisé gsap
  => GSAP à sa propre horloge donc si on utilise gsap on a plus besoin de clock