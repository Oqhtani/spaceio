import React from "react";
import { Dimensions } from "react-native";
import Matter from "matter-js";
import {Spaceship} from "../components/spaceship";

Matter.Common.isElement = () => false;

const { width, height } = Dimensions.get("window");
const scale = Math.min(width, 430) / 375;
const cx = width / 2;
const cy = height / 2;
const offsetY = (height - 465) / 2 - 35;

export const LevelOne = () => {
    let engine = Matter.Engine.create({enableSleeping: false });
    let world = engine.world;

    world.gravity = {x: 0, y: 0};

    
    return {
        physics: {engine: engine, world: world},
        spaceship: Spaceship(world, {x: cx, y: offsetY + 465 - 20 / 2 - 20}),
    };
};