import { Affix, Button, Stack } from "@mantine/core"
import { useCharacterAnimations } from "../contexts/CharacterAnimations";

const Interface = () => {
    // Custom Context
    const context = useCharacterAnimations();
    return (
        <Affix position={{ bottom: 50, right: 20 }}>
            <Stack>
                {
                    context?.animations.map((animation, index) => (
                        <Button
                            key={animation}
                            variant={index === context?.animationIndex ? "filled" : "light"}
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