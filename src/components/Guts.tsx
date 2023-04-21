import * as THREE from 'three'
import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useCharacterAnimations } from '../contexts/CharacterAnimations'

// GLTF Nodes and Materials Types
type GLTFResult = GLTF & {
  nodes: {
    Object_10: THREE.SkinnedMesh
    Object_11: THREE.SkinnedMesh
    Object_12: THREE.SkinnedMesh
    Object_13: THREE.SkinnedMesh
    Object_2: THREE.SkinnedMesh
    Object_3: THREE.SkinnedMesh
    Object_4: THREE.SkinnedMesh
    Object_5: THREE.SkinnedMesh
    Object_6: THREE.SkinnedMesh
    Object_7: THREE.SkinnedMesh
    Object_8: THREE.SkinnedMesh
    Object_9: THREE.SkinnedMesh
    mixamorigHips: THREE.Bone
  }
  materials: {
    ['Mesh_0011.rip']: THREE.MeshStandardMaterial
    ['Mesh_0012.rip']: THREE.MeshStandardMaterial
    ['Mesh_0016.rip']: THREE.MeshStandardMaterial
    ['Mesh_0018.rip']: THREE.MeshStandardMaterial
    ['Mesh_0001.rip']: THREE.MeshStandardMaterial
    ['Mesh_0002.rip']: THREE.MeshStandardMaterial
    ['Mesh_0003.rip']: THREE.MeshStandardMaterial
    ['Mesh_0004.rip']: THREE.MeshStandardMaterial
    ['Mesh_0005.rip']: THREE.MeshStandardMaterial
    ['Mesh_0006.rip']: THREE.MeshStandardMaterial
    ['Mesh_0007.rip']: THREE.MeshStandardMaterial
    ['Mesh_0008.rip']: THREE.MeshStandardMaterial
  }
}

const Guts = (props: JSX.IntrinsicElements['group']) => {
  // Create a reference to the Group Element containing the model
  const group = useRef() as React.MutableRefObject<THREE.Group>
  // Acquire the model nodes, materials and animations
  const { nodes, materials, animations } = useGLTF('./models/guts.gltf') as GLTFResult
  // Get the animations as callable actions and animation names
  const { actions, names } = useAnimations(animations, group);
  // Custom Context
  const context = useCharacterAnimations();

  useEffect(() => {
    // Guard Clause
    if(!context) return;
    // Play the currently selected animation
    actions[names[context.animationIndex]]?.reset().fadeIn(0.5).play();
    return () => {
      // Stop the previously selected animation
      actions[names[context.animationIndex]]?.fadeOut(0.5);
    }
  }, [actions, names, context, context?.animationIndex])

  useEffect(() => {
    // Update the context with the acquired animation names
    context?.setAnimations(names);
  }, [context, names])

  return (
    // Model Group: containing nodes, meshes and materials
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials['Mesh_0011.rip']} skeleton={nodes.Object_10.skeleton} />
          <skinnedMesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials['Mesh_0012.rip']} skeleton={nodes.Object_11.skeleton} />
          <skinnedMesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials['Mesh_0016.rip']} skeleton={nodes.Object_12.skeleton} />
          <skinnedMesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials['Mesh_0018.rip']} skeleton={nodes.Object_13.skeleton} />
          <skinnedMesh name="Object_2" geometry={nodes.Object_2.geometry} material={materials['Mesh_0001.rip']} skeleton={nodes.Object_2.skeleton} />
          <skinnedMesh name="Object_3" geometry={nodes.Object_3.geometry} material={materials['Mesh_0002.rip']} skeleton={nodes.Object_3.skeleton} />
          <skinnedMesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials['Mesh_0003.rip']} skeleton={nodes.Object_4.skeleton} />
          <skinnedMesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials['Mesh_0004.rip']} skeleton={nodes.Object_5.skeleton} />
          <skinnedMesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials['Mesh_0005.rip']} skeleton={nodes.Object_6.skeleton} />
          <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials['Mesh_0006.rip']} skeleton={nodes.Object_7.skeleton} />
          <skinnedMesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials['Mesh_0007.rip']} skeleton={nodes.Object_8.skeleton} />
          <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials['Mesh_0008.rip']} skeleton={nodes.Object_9.skeleton} />
        </group>
      </group>
    </group>
  )
}

export default Guts
// Preload the model
useGLTF.preload('./models/guts.gltf')
