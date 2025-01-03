// imports
import { Tabs, useRouter, useNavigation } from "expo-router";
import { View, Pressable } from "react-native";

// components
import ProfilePic from "@/components/ProfilePic";
import XWhite from "@/components/XWhite";
// icons
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const TabLayout = () => {

    const navigation = useNavigation()
    // const router = useRouter();

    const handlePic = () => {
        navigation.openDrawer()
    }

    const HeaderLeft = () => (
        <Pressable onPress={handlePic}>
            <ProfilePic />
        </Pressable>
    );

    return (
        <Tabs
            screenOptions={{
                tabBarLabel: "",
                tabBarStyle: {
                    backgroundColor: "black",
                    borderWidth: 0,
                    paddingVertical: 10,
                },
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "white",
                headerStyle: {
                    backgroundColor: "black",
                },
            }}
        >
            <Tabs.Screen
                name="Feed"
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name={focused ? "home" : "home-outline"}
                            size={size}
                            color={color}
                        />
                    ),

                    headerLeft: () => <HeaderLeft />,
                    headerTitle: () => <XWhite />,
                    headerTitleAlign: 'center',
                }}
            />

            <Tabs.Screen
                name="Search"
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name={focused ? "search" : "search-outline"}
                            size={size}
                            color={color}
                        />
                    ),
                    headerLeft: () => <HeaderLeft />
                }}
            />

            <Tabs.Screen
                name="Notifications"
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name={focused ? "notifications" : "notifications-outline"
                            }
                            size={size}
                            color={color}
                        />
                    ),
                    headerLeft: () => <HeaderLeft />
                }}
            />

            <Tabs.Screen
                name="Messages"
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <FontAwesome
                            name={focused ? "envelope" : "envelope-o"}
                            size={size}
                            color={color}
                        />
                    ),
                    headerLeft: () => <HeaderLeft />
                }}
            />
        </Tabs>
    );
};

export default TabLayout;