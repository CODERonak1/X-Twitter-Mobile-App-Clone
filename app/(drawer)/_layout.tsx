import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomDrawerContent from "@/components/DrawerComponent/CustomDrawerContent";

// Drawer layout
const DrawerLayout = () => {
    return (
        // Gesture handler root view to open the drawer with gestures
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
            // drawer default styles
                drawerContent={(props) => <CustomDrawerContent {...props} />}
                screenOptions={{
                    drawerStyle: {
                        backgroundColor: "black",
                        borderRadius: 0,
                        width: '85%'
                    },
                    drawerActiveTintColor: "white",
                    drawerInactiveTintColor: "white",
                    drawerActiveBackgroundColor: "none",
                }}
            >
                {/* Tab Navigator */}
                {/* for hiding the tabs stack  */}
                <Drawer.Screen
                    name="(tabs)"
                    options={{
                        headerShown: false,
                        title: "",
                        // drawerIcon: () => (
                        //     <Ionicons name="home" size={24} color="white" />
                        // )
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
};

export default DrawerLayout;
