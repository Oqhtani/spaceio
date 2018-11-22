import React, {PureComponent, View} from "react";
import {StyleSheet, Image} from "react-native";
import Matter from "matter-js";
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
import shot_1 from "./shot_1.png";

export class Renderer extends PureComponent {
    render() {
        const source = this.props.actions[this.props.action];
        const {width, height} = this.props.size;
        const body = this.props.body;
        const x = body.position.x - width / 2;
        const y = body.position.y - height / 2;
        const angle = body.angle;
        const direction = body.angle;
        return (
            <Image
                source={source}
                style={[
                    styles.shot, 
                    {
                        left: x,
                        top: y,
                        width: width,
                        height: height,
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


export const Shot = (world, pos, velocity) => {
    let width = 20;
    let height = 20;

    let body = Matter.Bodies.rectangle(pos.x, pos.y, width, height);

    Matter.World.add(world, [body]);
    
    return {
        body,
        size: {width, height},
        velocity: velocity, 
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
            idling: resolveAssetSource(shot_1)
        },
        "power-ups": {},
        animations: {},
        renderer: <Renderer />
    };
};

const styles = StyleSheet.create({
    shot: {
        position: "absolute"
    }
});
