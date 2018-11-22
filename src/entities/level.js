import React from "react";
import { Dimensions } from "react-native";
import Matter from "matter-js";
import Spaceship from "../components/spaceship";
import {Shot} from "../components/shot";


Matter.Common.isElement = () => false;

var engine;
var world;

const { width, height } = Dimensions.get("window");
const scale = Math.min(width, 430) / 375;
const cx = width / 2;
const cy = height / 2;
const offsetY = (height - 465) / 2 - 35;

export const LevelOne = () => {
    engine = Matter.Engine.create({enableSleeping: false });
    world = engine.world;

    world.gravity = {x: 0, y: 0};

    return {
        physics: {engine: engine, world: world},
        spaceship_1: Spaceship(world, {x: cx, y: offsetY + 465 - 20 / 2 - 20}),
    };
};
