import React, { PureComponent } from "react";
import { StyleSheet, StatusBar } from "react-native";
import {GameEngine } from "react-native-game-engine";
//import { LevelOne } from "./src/entities/level";
import { MoveSpaceship, Physics } from "./src/systems/systems"
import { Finger } from "./src/components/finger"
import { LevelOne } from "./src/entities/level";

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
        entities={LevelOne()}
        
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
