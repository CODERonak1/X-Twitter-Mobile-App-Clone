import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomDrawerContent from "@/components/DrawerComponent/CustomDrawerContent";

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
