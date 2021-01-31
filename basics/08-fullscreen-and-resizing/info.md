Si l'on veut que notre zone de rendu prennent toute la place disponible

  Il faut faire fitté le canvas avec notre viewport.
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    Nous laisses avec une marge par défaut 
      => pour l'enlevé 
        => il faut ajouté du css avec margin et padding à 0 mais garde la scrollbar
        => canvas avec fixed position ou absolute
        => enlevé les outlines possibles outline: none
        => enleve les scroll possibles sur l'élément
          html, body {
            overflow: hidden;
          }
  Pour géré le resizing
    => on ajoute un event sur le window 'resize'
      => on update la taille du canvas
      => on update l'aspect ratio de la caméra
      => on dit à THREE que le canvas a changé
      => exemple
        window.addEventListener('resize', (e) => {

            // update sizes
            sizes.height = window.innerHeight
            sizes.width = window.innerWidth

            // update camera
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()

            // update renderer
            renderer.setSize(sizes.width, sizes.height)
        })

  Pour géré le pixel ratio ( effect d'escalier sur les bords des formes géométriques, flou )
    => window.devicePixelRatio => donne le pixel ratio de la machine 
      => renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) => permet de limité le pixel ratio à 2 pour optimisé les perfs'

  Pour géré le fullscreen
    => il faut faire un event pour "lancé" le fullscreen
      => exemple pour tout
         const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement
          if (!fullscreenElement) {
              if (canvas.requestFullscreen) {
                  canvas.requestFullscreen()
              } else if (canvas.webkitRequestFullscreen) {
                  canvas.webkitRequestFullscreen()
              }
          } else {
              if (document.exitFullscreen) {
                  document.exitFullscreen()
              } else if (document.webkitExitFullscreen) {
                  document.webkitExitFullscreen()
              }
          }