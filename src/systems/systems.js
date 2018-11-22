import Matter from "matter-js";

const MoveSpaceship = (entities, { touches }) => {

    //-- I'm choosing to update the game state (entities) directly for the sake of brevity and simplicity.
    //-- There's nothing stopping you from treating the game state as immutable and returning a copy..
    //-- Example: return { ...entities, t.id: { UPDATED COMPONENTS }};
    //-- That said, it's probably worth considering performance implications in either case.
  
    touches.filter(t => t.type === "move").forEach(t => {
        let ship = entities["spaceship_1"];
        if (ship && ship.body) {
            //console.log(ship.body.position.x);
            ship.body.position.x = t.event.pageX;
            ship.body.position.y = t.event.pageY;
            ship.body = {...ship.body};
      }
    });
  
    return entities;
};


const Physics = (entities, { time }) => {
    let engine = entities["physics"].engine;
    Matter.Engine.update(engine, time.delta);
    return entities;
};
  
  export { MoveSpaceship, Physics};