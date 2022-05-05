import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import NoteListContainer from "../../pages/NotesList/NoteListContainer";
import DoneListContainer from "../../pages/DoneList/DoneListContainer";
import InProgressListContainer from "../../pages/InProgessList/InProgessListContainer";
import GraphListContainer from "../../pages/GraphList/GraphListContainer";
import { fullList,doneList,inProgressList  } from "../../reduxApi/notesList/notesSelectors";
import badgeCounter from "../../helpers/smallHelpers/badgeCounter";


const Tab = createBottomTabNavigator();
export default function TabsNavigator() {
  const doneNotesListData = useSelector(doneList)
  const inProgressListData = useSelector(inProgressList)

  const InProgressBadgeCount = badgeCounter(inProgressListData)
  const DoneBadgeCount = badgeCounter(doneNotesListData)

  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false, // Скроем хэдер для более красивого внешнего вида
    }}
  >
    <Tab.Screen name="NoteL ist" component={NoteListContainer} />
    <Tab.Screen
      name="In Progress List"
      component={InProgressListContainer}
      options={{ tabBarBadge: InProgressBadgeCount() }} // Можно добавлять баджеты к иконкам
    />
    <Tab.Screen
      name="Done List"
      component={DoneListContainer}
      options={{ tabBarBadge: DoneBadgeCount() }} // Можно добавлять баджеты к иконкам
    />
    <Tab.Screen
      name="Graph List"
      component={GraphListContainer}
    />
  </Tab.Navigator>
  )
}
