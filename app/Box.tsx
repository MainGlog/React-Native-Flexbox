import {ReactNode} from "react";
import {StyleSheet, Text, View} from "react-native";

//* Allows us to pass properties into the box
interface BoxProps
{
    children: ReactNode;
}
export default function Box({children} : BoxProps) {
    return (
        <View style={styles.box}>
            <Text style={styles.boxText}>{children}</Text>
        </View> //* Putting anything in the inner tag counts as children
    )
}

const styles = StyleSheet.create({
    box: {
        width: 100,
        justifyContent: "center",
        alignSelf: "stretch",
        alignItems: "center",
        backgroundColor: "lightgray",
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: "darkslategrey"
    },
    boxText: {
        color: "darkslategray",
        fontWeight: "bold",
    },
});