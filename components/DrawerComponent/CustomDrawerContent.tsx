import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import Ionicons from '@expo/vector-icons/Ionicons';
import XWhite from "@/components/XWhite";
import { useRouter } from "expo-router";

const CustomDrawerContent = (props) => {

    const router = useRouter()

    return (
        <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
            {/* Profile Section */}
            <View style={styles.profileSection}>
                <Image
                    source={{ uri: 'https://p6.focus.de/img/wissen/diverses/id_260334382/elon-musk-will-in-zwei-jahren-fuenf-unbemannte-missionen-zum-mars-schicken.-archivbild-.jpg?im=Resize%3D%28800%2C532%29&impolicy=perceptual&quality=mediumHigh&hash=db9a709ddeed554fab887833b4f6938665d1859233ee4401418d4114a2d0c6a4' }}
                    style={{ width: 35, height: 35, borderRadius: 50, marginBottom: 10 }}
                />
                <Text style={styles.profileName}>Elon Musk</Text>
                <Text style={styles.greyText}>@elonmusk</Text>

                <View style={styles.followContainer}>
                    <Text style={styles.followNum}> 80 <Text style={styles.greyText}> Following </Text> </Text>
                    <Text style={styles.followNum}> 80000 <Text style={styles.greyText}> Followers</Text> </Text>
                </View>
            </View>

            {/* Drawer Items */}
            <View style={styles.drawerItems}>
                <DrawerItemList {...props} />

                {/* Profile */}
                <DrawerItem
                    label="Profile"
                    icon={() => <Ionicons name="person" size={24} color="white" />}
                    labelStyle={styles.labelStyle}
                    onPress={() => router.push("/Profile")} />

                {/* Premium */}

                <DrawerItem
                    label="Premium"
                    icon={() => <XWhite />}
                    style={{ marginRight: 10 }} // Custom style for Premium
                    labelStyle={styles.labelStyle} onPress={() => router.push("/Premium")} />
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
        alignItems: "flex-start",
        paddingVertical: 20,
        marginLeft: 20,
        borderBottomColor: 'grey',
        borderWidth: 1,
    },

    profileName: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },

    greyText: {
        color: "grey",
        fontSize: 14,
        fontWeight: 'normal'
    },

    followContainer: {
        flexDirection: "row",
        marginTop: 10,
    },

    followNum: {
        color: "white",
        fontSize: 14,
        marginRight: 10,
        fontWeight: 'bold'
    },

    drawerItems: {
        marginTop: 10,
    },

    labelStyle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
});
