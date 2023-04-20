// import { AnimationClip } from "three";

export type CharacterAnimationsContextType = {
    animationIndex: number;
    setAnimationIndex: (index: number) => void;
    animations: string[];
    setAnimations: (animations: string[]) => void;
  };