import { createContext, useContext, useState, ReactNode } from "react"
import { CharacterAnimationsContextType } from "../../types";
import PropTypes from 'prop-types';

const CharacterAnimationsContext = createContext<CharacterAnimationsContextType | null>(null);

interface ProviderProps {
    children?: ReactNode
}

export const CharacterAnimationsProvider = ({ children}: ProviderProps) => {
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

// eslint-disable-next-line react-refresh/only-export-components
export const useCharacterAnimations = () => {
    return useContext(CharacterAnimationsContext);
}