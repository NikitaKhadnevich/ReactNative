import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet, FlatList, Animated } from 'react-native';
import ListRenderedTodos from './ListRenderedTodos';

import {
  SET_DONE_LIST,
  SET_IN_PROGRESS_LIST,
  UPDATE_FULL_LIST,
} from '../../reduxApi/notesList/notesToolkit';
import { fullList } from '../../reduxApi/notesList/notesSelectors';

import useDeleteNote from '../../helpers/useDeleteNote';
import useUpdateNote from '../../helpers/useUpdateNote';

const doneNoteListData = [
  {
    id: 1,
    title: 'EEEE',
    inProgess: false,
    date: '123123123',
  },
];

function GraphListContainer() {
  return (
    <View style={styles.renderBlock}>
      {doneNoteListData.length ? (
        <FlatList
          contentContainerStyle={listStyle.containerStyle}
          data={doneNoteListData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <ListRenderedTodos item={item} index={index} />
          )}
        />
      ) : (
        <View style={styles.greetingView}>
          <Text style={styles.greetingText}>Add Note...</Text>
        </View>
      )}
    </View>
  );
}

export default GraphListContainer;

const listStyle = {
  containerStyle: {
    paddingBottom: '65%',
  },
};

const styles = StyleSheet.create({
  renderBlock: {
    marginTop: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    width: '100%',
  },
  greetingView: {
    display: 'flex',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 20,
  },
  greetingText: {
    fontSize: 16,
    fontWeight: '200',
    color: 'rgba(135, 135, 135, 1)',
  },
});
