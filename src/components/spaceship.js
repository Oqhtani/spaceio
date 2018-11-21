import React, {PureComponent, View} from "react";
import {StyleSheet, Image} from "react-native";
import Matter from "matter-js";
import {collisionCategories} from "../utils/constants";
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
import spaceship_1 from "./spaceship_1.png";

export class Renderer extends PureComponent {
    render() {
        const source = this.props.actions[this.props.action];
        const {width, height} = source;
        const body = this.props.body;
        const x = body.position.x - width / 2;
        const y = body.position.y - height / 2;
        const angle = body.angle;
        const direction = body.angle;

        return (
            <Image
                source={source}
                style={[
                    styles.spaceship, 
                    {
                        left: x,
                        top: y,
                        transform: [
                            { rotateZ: angle + "rad" },
                            { rotateY: (direction === " right" ? 180 : 0) + "deg" }
                        ]
                    }
                ]}
            />
        );
    }
}


export const Spaceship = (world, pos) => {
    let width = 30;
    let height = 40;

    let body = Matter.Bodies.rectangle(pos.x, pos.y, width, height, {
        density: 0.8,
        friction: 1,
        collisionFilter: {
            category: collisionCategories.spaceship
        }
    });

    Matter.World.add(world, [body]);
    
    return {
        body,
        size: {width, height},
        controls: {
            gestures: {},
            mode: "platform"
        },
        direction: {
            horizontal: "right",
            vertical: "up"
        },
        action: "idling",
        actions: {
            idling: resolveAssetSource(spaceship_1)
        },
        "power-ups": {},
        animations: {},
        renderer: <Renderer />
    };
};

const styles = StyleSheet.create({
    spaceship: {
        position: "absolute"
    }
});
