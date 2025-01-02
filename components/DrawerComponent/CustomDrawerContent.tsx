import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
            {/* Profile Section */}
            <View style={styles.profileSection}>
                <Text style={styles.profileName}>Elon Musk</Text>
            </View>

            {/* Drawer Items */}
            <View style={styles.drawerItems}>
                <DrawerItemList {...props} />
            </View>
        </DrawerContentScrollView>
    );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    profileSection: {
        alignItems: "center",
        paddingVertical: 20,
        backgroundColor: "#1a1a1a",
    },
    profileName: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
    },
    drawerItems: {
        marginTop: 10,
    },
});
