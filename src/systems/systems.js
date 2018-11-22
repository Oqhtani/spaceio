import Matter from "matter-js";
import {Shoot} from "../entities/level";
import { Dimensions } from "react-native";


var timer = 0;

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
            //console.log("x: " + ship.body.position.x + " y: " + ship.body.position.y);
      }
    });
  
    return entities;
};

const Shooter = (entities, { time }) => {
    timer += time.delta;
    if (timer >= 300) {
        timer = 0;
        //console.log(time.current + "A second has passed")
        let name = "shot_" + time.current;
        //console.log(name);
        entities[name] = entities["spaceship_1"].shoot(0);
    }
    return entities
};

const Physics = (entities, { time }) => {
    const { width, height } = Dimensions.get("window");
    //let engine = entities["physics"].engine;
    //Matter.Engine.update(engine, time.delta);
    Object.keys(entities).forEach(entity => {
        let shot = entities[entity];
        if (shot.velocity != undefined) {
            shot.body.position.x += shot.velocity[0] * time.delta;
            shot.body.position.y += shot.velocity[1] * time.delta;
            shot.body = {...shot.body};
            if (shot.body.position.y < 0 || shot.body.position.y > height ||
                shot.body.position.x < 0 || shot.body.position.x > width) {
                delete entities[entity];
            }
        }   
    });
    //delete entities["shots"];

    return entities;
};
  
  export { MoveSpaceship, Physics, Shooter};