/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/animations.gltf
*/

import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useCharacterAnimations } from '../contexts/CharacterAnimations'

const Guts = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/animations.gltf')
  const { actions, names } = useAnimations(animations, group)
  // Custom Context
  const context = useCharacterAnimations();
  console.log(names);

  useEffect(() => {
    if(!context) return;
    actions[names[context.animationIndex]]?.reset().fadeIn(0.5).play();
    return () => {
      actions[names[context.animationIndex]]?.fadeOut(0.5);
    }
  }, [context?.animationIndex])

  useEffect(() => {
    context?.setAnimations(names);
  }, [names])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials['Mesh_0011.rip.002']} skeleton={nodes.Object_10.skeleton} castShadow />
          <skinnedMesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials['Mesh_0012.rip.002']} skeleton={nodes.Object_11.skeleton} castShadow />
          <skinnedMesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials['Mesh_0016.rip.002']} skeleton={nodes.Object_12.skeleton} castShadow />
          <skinnedMesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials['Mesh_0018.rip.002']} skeleton={nodes.Object_13.skeleton} castShadow />
          <skinnedMesh name="Object_2" geometry={nodes.Object_2.geometry} material={materials['Mesh_0001.rip.002']} skeleton={nodes.Object_2.skeleton} castShadow />
          <skinnedMesh name="Object_3" geometry={nodes.Object_3.geometry} material={materials['Mesh_0002.rip.002']} skeleton={nodes.Object_3.skeleton} castShadow />
          <skinnedMesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials['Mesh_0003.rip.002']} skeleton={nodes.Object_4.skeleton} castShadow />
          <skinnedMesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials['Mesh_0004.rip.002']} skeleton={nodes.Object_5.skeleton} castShadow />
          <skinnedMesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials['Mesh_0005.rip.002']} skeleton={nodes.Object_6.skeleton} castShadow />
          <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials['Mesh_0006.rip.002']} skeleton={nodes.Object_7.skeleton} castShadow />
          <skinnedMesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials['Mesh_0007.rip.002']} skeleton={nodes.Object_8.skeleton} castShadow />
          <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials['Mesh_0008.rip.002']} skeleton={nodes.Object_9.skeleton} castShadow />
        </group>
      </group>
    </group>
  )
}

export default Guts

useGLTF.preload('./models/animations.gltf')
