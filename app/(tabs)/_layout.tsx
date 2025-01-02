// imports
import { Tabs, useRouter } from "expo-router";
import { View, Pressable } from "react-native";

// components
import ProfilePic from "@/components/ProfilePic";
import XWhite from "@/components/XWhite";
// icons
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const TabLayout = () => {

    const router = useRouter();

    // const handlePic = () => {
    //     router.push("/drawer");
    // }

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

                    headerTitle: () => (
                        <View
                            style={{
                                flex: 1,
                                alignItems: "center",
                                flexDirection: "row",
                            }}
                        >
                            {/* Pressable to open the drawer */}
                            <Pressable >
                                <ProfilePic />
                            </Pressable>

                            {/* x logo which appears in the center */}
                            <XWhite />
                        </View>
                    ),
                    // headerTitleAlign: 'center',
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

                    headerTitle: () => (
                        <View
                            style={{
                                flex: 1,
                                alignItems: "center",
                                flexDirection: "row",
                            }}
                        >
                            <ProfilePic />
                        </View>
                    ),
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

                    headerTitle: () => (
                        <View
                            style={{
                                flex: 1,
                                alignItems: "center",
                                flexDirection: "row",
                            }}
                        >
                            <ProfilePic />
                        </View>
                    ),
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

                    headerTitle: () => (
                        <View
                            style={{
                                flex: 1,
                                alignItems: "center",
                                flexDirection: "row",
                            }}
                        >
                            <ProfilePic />
                        </View>
                    ),
                }}
            />
        </Tabs>
    );
};

export default TabLayout;
