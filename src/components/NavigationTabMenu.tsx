import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import AdminView from "../views/AdminView";
import HomeView from "../views/HomeView";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

interface TabScreenProps {
  name: string;
  component: (props?: any) => JSX.Element;
  iconName: string;
}

const Tab = createMaterialBottomTabNavigator();

const NavigationTabMenu = () => {
  const tabs: TabScreenProps[] = [
    { name: "Home", component: HomeView, iconName: "home" },
    { name: "Configuracíon", component: AdminView, iconName: "cog-outline" },
  ];

  return (
    <Tab.Navigator
      id="bottom-tab-navigator"
      initialRouteName="home"
      barStyle={{ backgroundColor: "white" }}
    >
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          {...tab}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name={tab.iconName}
                color={color}
                size={26}
              />
            ),
          }}
        ></Tab.Screen>
      ))}
    </Tab.Navigator>
  );
};

export default NavigationTabMenu;
