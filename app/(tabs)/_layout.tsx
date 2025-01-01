import { Tabs } from "expo-router";

const TabLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="Home" />
            <Tabs.Screen name="Search" />
            <Tabs.Screen name="Notifications" />
            <Tabs.Screen name="Messages" />
        </Tabs>
    )
}

export default TabLayout