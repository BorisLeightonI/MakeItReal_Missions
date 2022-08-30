const {createRobot} = require('./robot');

describe('should be inside its limits 0-10', ()=>{
    it('should increment x value', ()=>{
        const {moveRight} = createRobot(5,5);
        expect(moveRight()).toBe(6);
    });
});

describe('should have a text message', ()=>{
    it('should return a error message', ()=>{
        const obj = createRobot(11,11);
        expect(obj).toBe('Posición fuera de los límites');
    });
});