import {ReactNode} from "react";
import {Pressable, StyleSheet, Text, useWindowDimensions, View} from "react-native";

//* Allows us to pass properties into the box
interface BoxProps
{
    children: ReactNode,
    onPress?: () => void;
}
export default function Box({children, onPress} : BoxProps) {
    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.box,
                isLandscape ? styles.landscapeBox : styles.portraitBox,
                pressed && styles.boxPressed
            ]}
            android_ripple={{color: "rgba(0, 33, 128, 0.3)"}}
        > {/*/ boxPressed will be activated if pressed is true/*/}

            <Text style={styles.boxText}>{children}</Text>
        </Pressable> //* Putting anything in the inner tag counts as children
    )
}

const styles = StyleSheet.create({
    box: {
        aspectRatio: 1, //* Height and width should always match
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgray",
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: "darkslategrey",
        margin: 10
    },
    portraitBox: {
        width: "25%"
    },
    landscapeBox: {
        height: "25%"
    },
    boxPressed: {
        backgroundColor: "gray"
    },
    boxText: {
        color: "darkslategray",
        fontWeight: "bold",
    },
});