import { createContext, useContext, useState } from "react"
import { CharacterAnimationsContextType } from "../../types";
import PropTypes from 'prop-types';
// import { AnimationClip } from "three";

const CharacterAnimationsContext = createContext<CharacterAnimationsContextType | null>(null);

export const CharacterAnimationsProvider = ({ children }) => {
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // State Variables
    const [animationIndex, setAnimationIndex] = useState<number>(0);
    const [animations, setAnimations] = useState<string[]>([]);

    return (
        <CharacterAnimationsContext.Provider
            value={{
                animationIndex,
                setAnimationIndex,
                animations,
                setAnimations
            }}
        >
            {children}
        </CharacterAnimationsContext.Provider>
    )
};

CharacterAnimationsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useCharacterAnimations = () => {
    return useContext(CharacterAnimationsContext);
}