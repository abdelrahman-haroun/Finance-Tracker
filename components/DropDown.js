import React, { useState, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const SelectDropdown = ({ data, defaultButtonText, onSelect }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultButtonText);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setIsDropdownOpen(false);
    onSelect(item);
  };

  return (
    <View style={styles.dropdownContainer}>
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={handleToggleDropdown}
      >
        <Text style={styles.Text}>{selectedItem}</Text>
      </TouchableOpacity>

      {isDropdownOpen && (
        <FlatList
          style={styles.dropdownList}
          data={data}
          keyExtractor={(index) => index}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.dropdownListItem}
              onPress={() => handleSelectItem(item)}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    marginTop: 2,
    marginBottom: 10,
  },
  Text: {
    color: "#666",
  },
  dropdownButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
  },
  dropdownList: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
  dropdownListItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default SelectDropdown;
