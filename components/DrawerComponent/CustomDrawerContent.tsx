import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import Ionicons from '@expo/vector-icons/Ionicons';
import XWhite from "@/components/XWhite";
import { useRouter } from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

// Custom drawer
const CustomDrawerContent = (props: any) => {

    // for navigating to the other screens 
    const router = useRouter()

    return (
        // Drawer content content scroll view o make the drawer items or content scrollable
        <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
            {/* Profile Section */}
            {/* Profile pic, name and username */}
            <View style={styles.profileSection}>
                <Image
                    source={{ uri: 'https://p6.focus.de/img/wissen/diverses/id_260334382/elon-musk-will-in-zwei-jahren-fuenf-unbemannte-missionen-zum-mars-schicken.-archivbild-.jpg?im=Resize%3D%28800%2C532%29&impolicy=perceptual&quality=mediumHigh&hash=db9a709ddeed554fab887833b4f6938665d1859233ee4401418d4114a2d0c6a4' }}
                    style={{ width: 35, height: 35, borderRadius: 50, marginBottom: 10 }}
                />
                {/* Name */}
                <Text style={styles.profileName}>Elon Musk</Text>
                {/* Username */}
                <Text style={styles.greyText}>@elonmusk</Text>

                {/* container of showing followers and following */}
                <View style={styles.followContainer}>
                    <Text style={styles.followNum}> 80 <Text style={styles.greyText}> Following </Text> </Text>
                    <Text style={styles.followNum}> 80000 <Text style={styles.greyText}> Followers</Text> </Text>
                </View>
            </View>

            {/* Drawer Items */}
            <View style={styles.drawerItems}>
                <DrawerItemList {...props} />

                {/* Profile drawer item */}
                <DrawerItem
                    label="Profile"
                    icon={() => <Ionicons name="person-outline" size={24} color="white" />}
                    labelStyle={styles.labelStyle}
                    onPress={() => router.push("/Profile")}
                />

                {/* Premium drawer item */}
                <DrawerItem
                    label="Premium"
                    icon={() => <XWhite />}
                    labelStyle={styles.labelStyle}
                    onPress={() => router.push("/Premium")}
                />

                {/* Bookmarks drawer item */}
                <DrawerItem
                    label="Bookmarks"
                    icon={() => <Ionicons name="bookmark-outline" size={24} color="white" />}
                    labelStyle={styles.labelStyle}
                    onPress={() => router.push("/Bookmarks")}
                />

                {/* Jobs drawer item */}
                <DrawerItem
                    label="Jobs"
                    icon={() => <Ionicons name="briefcase-outline" size={24} color="white" />}
                    labelStyle={styles.labelStyle}
                    onPress={() => router.push("/Jobs")}
                />

                {/* Lists drawer item */}
                <DrawerItem
                    label="Lists"
                    icon={() => <FontAwesome5 name="list-alt" size={24} color="white" />}
                    labelStyle={styles.labelStyle}
                    onPress={() => router.push("/Lists")}
                />

                {/* settings drawer item */}
                <DrawerItem
                    label="Settings"
                    icon={() => <Ionicons name="settings-outline" size={24} color="white" />}
                    labelStyle={styles.labelStyle}
                    onPress={() => router.push("/Settings")}
                />

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