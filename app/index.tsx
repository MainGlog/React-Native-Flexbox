import {Platform, StatusBar, StyleSheet, Text, View} from "react-native";
import Box from "@/app/Box";
import {Stack} from "expo-router";
/*/ IMPORTANT!! npm expo install expo-screen-orientation
 * GO TO APP.JSON
 * REMOVE ORIENTATION FIELD
/*/

const boxes = 10;

export default function Index() {
    return (
        <>
            {/*/ removes the header with the file name from the top of the screen/*/}
            <Stack.Screen options={{
                title: "My Custom Title",
                headerTitleStyle: {
                    fontSize: 24,
                    fontWeight: "bold",
                    color: "darkblue",
                },
                headerTitleAlign: "center",
                headerStyle: {
                    backgroundColor: "lightgray"
                }
            }}/>
            <StatusBar hidden={false}/>

            <View style={styles.container}>
                {Array.from({ length: boxes })
                    .map((_, i) => (
                        <Box
                            onPress={() => alert(`Box #${i} clicked!`)}
                            key={i}>
                            #{i}
                        </Box>
                    ))} {/*/ Creates an array of length boxes and assigns a number to each of them/*/}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "ghostwhite",

        //* Returns different styles based on the platform of the mobile device
        //* Ensures that what we render isn't underneath the status bar
        ...Platform.select({
            ios: {paddingTop: 20},
            android: {paddingTop: StatusBar.currentHeight}
        })
    }
});