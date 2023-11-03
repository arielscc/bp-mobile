import {SearchIcon} from 'lucide-react-native';
import React, {FC} from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import {Colors} from '../../ui/colors';

interface SearchProps extends TextInputProps {}

const Search: FC<SearchProps> = props => {
  return (
    <View style={SearchStyles.container}>
      <TextInput
        {...props}
        placeholder="Buscar..."
        style={SearchStyles.input}
      />
      <View style={SearchStyles.icon}>
        <SearchIcon width={18} height={18} color={Colors.blue} />
      </View>
    </View>
  );
};

export default Search;

const SearchStyles = StyleSheet.create({
  container: {
    borderColor: Colors.gray,
    borderRadius: 8,
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    height: 46,
    justifyContent: 'space-between',
    marginBottom: 16,
    overflow: 'hidden',
  },
  input: {
    borderColor: Colors.gray,
    flex: 1,
    height: '100%',
    paddingHorizontal: 10,
  },
  icon: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    width: 40,
  },
});
