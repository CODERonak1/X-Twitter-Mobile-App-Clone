import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomDrawerContent from "@/components/DrawerComponent/CustomDrawerContent";
import Ionicons from '@expo/vector-icons/Ionicons';
import XWhite from "@/components/XWhite";

const DrawerLayout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                drawerContent={(props) => <CustomDrawerContent {...props} />}
                screenOptions={{
                    drawerStyle: {
                        backgroundColor: "black",
                        borderRadius: 0,
                    },
                    drawerActiveTintColor: "white",
                    drawerInactiveTintColor: "white",
                    drawerActiveBackgroundColor: "none",
                }}
            >
                {/* Tab Navigator */}
                <Drawer.Screen
                    name="(tabs)"
                    options={{
                        headerShown: false,
                        title: "Home",
                        drawerIcon: () => (
                            <Ionicons name="home" size={24} color="white" />
                        )
                    }}
                />

                {/* Profile Screen */}
                <Drawer.Screen
                    name="Profile"
                    options={{
                        title: "Profile",
                        drawerIcon: () => (
                            <Ionicons name="person" size={24} color="white" />
                        )
                    }}
                />

                {/* Premium Screen */}
                <Drawer.Screen
                    name="Premium"
                    options={{
                        title: "Premium",
                        drawerIcon: () => (
                            <XWhite />
                        ),
                        drawerStyle: {
                            marginRight: 10
                        }
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
};

export default DrawerLayout;
