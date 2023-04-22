import { Affix, Button, Group, Stack } from "@mantine/core"
import { useCharacterAnimations } from "../contexts/CharacterAnimations";

const Interface = () => {
    // Custom Context
    const context = useCharacterAnimations();
    return (
        window.screen.width > 768 ? (
            // Mantine UI: Position Elements
            <Affix position={{ bottom: 50, right: 20 }}>
                {/* Stack Component */}
                <Stack>
                    {/* Map each animation to a unique button */}
                    {context?.animations.map((animation, index) => (
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
        ): (
            // Mantine UI: Position Elements
            <Affix position={{ bottom: 50, left: 20 }}>
                {/* Group Component */}
                <Group>
                    {/* Map each animation to a unique button */}
                    {context?.animations.map((animation, index) => (
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
                </Group>
            </Affix>
        )
    )
}

export default Interface;