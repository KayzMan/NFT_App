import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from "react-native";
import React from "react";

import { CircleButton, FocusedStatusBar, RectButton, DetailsBid, DetailsDesc, SubInfo } from "../components";

import { COLORS, FONTS, SHADOWS, assets, SIZES } from "../constants";

const DetailsHeader = ({ data, navigation }) => {
  return (
    <View style={{ width: "100%", height: 373 }}>
      <Image source={data.image} resizeMode="cover" style={{ width: "100%", height: "100%" }} />

      <CircleButton
        handlePress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack();
          }
        }}
        imageUrl={assets.left}
        left={15}
        top={StatusBar.currentHeight + 10}
      />

      <CircleButton imageUrl={assets.heart} right={15} top={StatusBar.currentHeight + 10} />
    </View>
  );
};

export default function Details({ route, navigation }) {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar barStyle={"dark-content"} backgroundColor="transparent" translucent={true} />

      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          paddingBottom: SIZES.font * 1.5,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={
          <>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />

              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Current Bids
                </Text>
              )}
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
}
