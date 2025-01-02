import { Drawer } from "expo-router/drawer";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import ProfilePic from "@/components/ProfilePic";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const DrawerLayout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer screenOptions={{
                drawerStyle: {
                    backgroundColor: 'black',
                },

                drawerActiveTintColor: 'white',
                drawerInactiveTintColor: 'white',
                drawerActiveBackgroundColor: 'none',
            }}>
                {/* Tab Navigator */}
                <Drawer.Screen
                    name="(tabs)"
                    options={{ headerShown: false, title: 'Home' }}
                />

                {/* Demo Screen */}
                <Drawer.Screen
                    name="Profile"
                />

                {/* Demo2 Screen */}
                <Drawer.Screen
                    name="Premium"
                />
            </Drawer>
        </GestureHandlerRootView>
    );
};

export default DrawerLayout;
