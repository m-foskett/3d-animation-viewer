import { Affix, Button, Stack } from "@mantine/core"
import { useCharacterAnimations } from "../contexts/CharacterAnimations";

const Interface = () => {
    // Custom Context
    const context = useCharacterAnimations();
    return (
        // Mantine UI
        <Affix position={{ bottom: 50, right: 20 }}>
            {/* Stack Component */}
            <Stack>
                {
                    // Map each animation to a unique button
                    context?.animations.map((animation, index) => (
                        <Button
                            color="red"
                            radius="lg"
                            key={animation}
                            gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
                            variant={index === context?.animationIndex ? "gradient" : "light"}
                            onClick={() => context?.setAnimationIndex(index)}
                        >
                            {animation}
                        </Button>
                    ))
                }
            </Stack>
        </Affix>
    )
}

export default Interface;