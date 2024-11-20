import React, { useState } from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";

import { FocusedStatusBar, HomeHeader, NFTCard } from "../components";

import { COLORS, NFTData } from "../constants";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={({ id }) => id}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>

        {/* This view will serve as the background image of the whole home screen! */}
        <View style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
          <View style={{ backgroundColor: COLORS.primary, height: 300 }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
}
