import { Tabs } from "expo-router";
import XWhite from "@/components/XWhite";
// icons
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const TabLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarLabel: '',
            tabBarStyle: {
                backgroundColor: 'black',
                borderWidth: 0,
                paddingVertical: 10
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'white',
            headerStyle: {
                backgroundColor: 'black',
            }

        }}>
            <Tabs.Screen name="Home"
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
                    ),

                    headerTitle: () => <XWhite />,
                    headerTitleAlign: 'center'
                }}
            />

            <Tabs.Screen name="Search"
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons name={focused ? 'search' : 'search-outline'} size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen name="Notifications"
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons name={focused ? 'notifications' : 'notifications-outline'} size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen name="Messages"
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <FontAwesome name={focused ? 'envelope' : 'envelope-o'} size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    )
}

export default TabLayout