exports.createRobot = (x,y) => {
/*     let x = x;
    let y = y; */
      // lanza error si x o y están fuera de los límites (0 a 10)
    // if(x<0||x>10||y<0||y>10) throw new Error('La posición está fuera de los límites')
    if(x>0 && x<10 || y>0 && y<10){ //Está dentro de los límites 11,9

        const moveUp = () => ++y;
        const moveDown = () => --y;
        const moveLeft = () => --x;
        const moveRight = () => ++x;
      
        const getX = () => x
        const getY = () => y
        return {
          moveUp, //- incrementa y en 1
          moveDown, //- decrementa y en 1.
          moveLeft, //- decrementa x en 1.
          moveRight, //- incrementa x en 1 
          getX, //- retorna x
          getY, //- retorna y
       }
     
    }else{ //Está fuera de los límites
        console.log('Posición fuera de los límites, x:', x, ' y: ', y);
        return 'Posición fuera de los límites';
    }
    


  }
