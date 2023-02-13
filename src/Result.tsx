import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { displayTime } from "./util";
// print the lap time
function Result({ results }: { results?: number[] }) {
  
  return (
    <ScrollView style={{ paddingTop: 0 }}>
      <View style={styles.result} />
        {results?.map((item, index) => (
          <View key={index} style={styles.resultItem}>
            <Text style={styles.resultItemText}>
              Lap {results.length - index}
            </Text>
            <Text style={styles.resultItemText}>{displayTime(item)}</Text>
          </View>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  result: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  resultItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#313131",
    height: 50,
    paddingHorizontal: 15,
  },
  resultItemText: {
    color: "#fff"
  },
});
export default React.memo(Result);