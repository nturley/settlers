import React from 'react';
import { Vector3, Texture } from '@babylonjs/core';

const Environment: React.FC = () => {
  return (
    <>
      <hemisphericLight name='hemilight' direction={Vector3.Up()} intensity={2.0} />
      <directionalLight name='dlight' direction={new Vector3(0.1, -1, 0.1)} />
      <box name="skyBox" size={200}>
        <standardMaterial
          name="skyBox"
          backFaceCulling={false}
          disableLighting={true}
        >
          <cubeTexture
            assignTo="reflectionTexture"
            rootUrl="https://raw.githubusercontent.com/BabylonJS/Babylon.js/master/Playground/textures/TropicalSunnyDay"
            coordinatesMode={Texture.SKYBOX_MODE}
          />
        </standardMaterial>
      </box>
    </>
  );
}
export default Environment;