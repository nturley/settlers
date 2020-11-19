import { Vector3 } from '@babylonjs/core';

const size = 0.5;
const h = Math.sqrt(3) * size;
const w = 2 * size;

export const hexNeighbors = [
  new Vector3(0, -1, 1),
  new Vector3(1, -1, 0),
  new Vector3(1, 0, -1),
  new Vector3(0, 1, -1),
  new Vector3(-1, 1, 0),
  new Vector3(-1, 0, 1)]

export function hexesAtDistance(dist: number): Vector3[] {
  let pos = new Vector3(-dist, dist, 0);
  if (dist == 0) return [pos];
  const ret:Vector3[] = [];
  for (let neighbor of hexNeighbors) {
    for (let i=0;i<dist;i++) {
      pos = pos.add(neighbor);
      ret.push(pos);
    }
  }
  return ret;
}

export function pointyHexesAtDistance(dist: number) {
  let pos = new Vector3(-dist, dist, 0);
  if (dist == 0) return [pos];
  const ret:Vector3[] = [];
  for (let neighbor of hexNeighbors) {
    for (let i=0;i<dist;i++) {
      pos = pos.add(neighbor);
      if (i+1<dist/3) ret.push(pos);
      if (i+1>2*dist/3) ret.push(pos);
    }
  }
  return ret;
}

export function InvertPointyHexesAtDistance(dist: number) {
  let pos = new Vector3(-dist, dist, 0);
  if (dist == 0) return [pos];
  const ret:Vector3[] = [];
  for (let neighbor of hexNeighbors) {
    for (let i=0;i<dist;i++) {
      pos = pos.add(neighbor);
      if (i+1<dist/4) continue;
      if (i+1>3*dist/4) continue;
      ret.push(pos);
    }
  }
  return ret;
}

export function hexCoordinateToWorld(cubicPos: Vector3, height: number) {
  return new Vector3(
    cubicPos.x * w + cubicPos.z * w / 2,
    height,
    cubicPos.z * h);
}