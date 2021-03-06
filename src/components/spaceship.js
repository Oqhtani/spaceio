import React, {PureComponent, View} from "react";
import {StyleSheet, Image} from "react-native";
import Matter from "matter-js";
import {Shot} from "./shot";
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
import spaceshipImg from "./spaceship_1.png";

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
                    styles.spaceship, 
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


export default Spaceship = (world, pos) => {
    let width = 100;
    let height = 100;

    let body = Matter.Bodies.rectangle(pos.x, pos.y, width, height);

    Matter.World.add(world, [body]);
    
    return {
        body,
        shoot: (type) => {
            switch (type) {
                case 0:
                    return Shot(world, {x: body.position.x, y: body.position.y}, [0, -0.5]);
                    break;
            }
        },
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
            idling: resolveAssetSource(spaceshipImg),
            zooming: resolveAssetSource(spaceshipImg)
        },
        "power-ups": {},
        animations: {},
        renderer: <Renderer />
    };
};

/*
<renderer body={body}, shoot={shoot}... />

const styles = StyleSheet.create({
    spaceship: {
        position: "absolute"
    }
});
