import React from 'react';
import './App.css';
import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import { Vector3, Texture} from '@babylonjs/core';
import { Scene, Engine, SceneEventArgs } from 'react-babylonjs';
import Environment from './Environment';
import GrassTile from './GrassTile';
import {pointyHexesAtDistance, hexesAtDistance, InvertPointyHexesAtDistance} from './geometry';

const App: React.FC = () => {
  function onSceneMount(e: SceneEventArgs) {
    const { scene } = e;
    scene.debugLayer.show();
  }

  return (
    <div className="App">
        <Engine antialias={true} adaptToDeviceRatio={true} canvasId="sample-canvas">
          <Scene onSceneMount={onSceneMount}>
            <arcRotateCamera name="arc" target={ new Vector3(0, 1, 0) }
                  alpha={-Math.PI / 2} beta={(0.5 + (Math.PI / 4))}
                  radius={4} minZ={0.001} wheelPrecision={50} 
                  lowerRadiusLimit={8} upperRadiusLimit={20} upperBetaLimit={Math.PI / 2} />
            <Environment/>
            {hexesAtDistance(1).map(n => <GrassTile pos={n} key={n.toString()}/>)}
            {pointyHexesAtDistance(2).map(n => <GrassTile pos={n} key={n.toString()}/>)}
            {InvertPointyHexesAtDistance(3).map(n => <GrassTile pos={n} key={n.toString()}/>)}
            {pointyHexesAtDistance(4).map(n => <GrassTile pos={n} key={n.toString()}/>)}
            {InvertPointyHexesAtDistance(5).map(n => <GrassTile pos={n} key={n.toString()}/>)}
            
          </Scene>
        </Engine>
    </div>
  );
}
export default App;