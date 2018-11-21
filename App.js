import React, { PureComponent } from "react";
import { StyleSheet, StatusBar } from "react-native";
import {GameEngine } from "react-native-game-engine";
//import { LevelOne } from "./src/entities/level";
import { MoveSpaceship } from "./src/systems/systems"
import { Finger } from "./src/components/finger"

export default class App extends PureComponent {

  constructor (props) { 
    super(props);
  }

  render() {
    return (
      <GameEngine
        ref={"engine"}
        style={styles.game}
        systems={[MoveSpaceship]}
        entities={{ 
          1: { position: [40,  200], renderer: <Finger />}, //-- Notice that each entity has a unique id (required)
          2: { position: [100, 200], renderer: <Finger />}, //-- and a renderer property (optional). If no renderer
          3: { position: [160, 200], renderer: <Finger />}, //-- is supplied with the entity - it won't get displayed.
          4: { position: [220, 200], renderer: <Finger />}, 
          5: { position: [280, 200], renderer: <Finger />}
        }}
      >
        <StatusBar hidden={true} />
        
      </GameEngine>
    );
  }
}

const styles = StyleSheet.create({
  game: {
    backgroundColor: "#000"
  }
});
