import React, {useCallback, useState} from 'react';
import { Vector3, Texture, Xbox360Button } from '@babylonjs/core';
import {hexCoordinateToWorld} from './geometry';
import { LoadedModel } from 'react-babylonjs';

interface GrassTileProps {
  pos: Vector3;
}

const GrassTile: React.FC<GrassTileProps> = (props) => {
  const onLoaded = (model: LoadedModel) => {
    if (model.rootMesh) model.rootMesh.name = 'grass ' + props.pos.toString();
  }
  return (
    <model
      rootUrl="https://neilturley.dev/game-assets/kenney_hexagonkit_1/Models/GLTF%20format/"
      sceneFilename="grass.glb"
      position={hexCoordinateToWorld(props.pos, 0)}
      onModelLoaded={onLoaded}
    />
  );
}
export default GrassTile;