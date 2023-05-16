import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {persistReducer, createTransform} from 'redux-persist';
import examSlice from './exam.slice';

// import JSOG from 'jsog';

// export const JSOGTransform = createTransform(
//   (inboundState, key) => JSOG.encode(inboundState),
//   (outboundState, key) => JSOG.decode(outboundState),
// );

export const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['questionsRef', 'navigatorRef'],
  // transforms: [JSOGTransform],
};

export const rootReducer = combineReducers({
  exam: persistReducer(
    {
      ...rootPersistConfig,
      key: 'exam',
    },
    examSlice.reducer,
  ),
});
