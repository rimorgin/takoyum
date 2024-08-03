import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import colorSchemeSlice from './ColorSchemeSlice';
import encryptTransform from './EncryptTransform';

const rootReducer = combineReducers({
  colorScheme: colorSchemeSlice,
});

const persistConfig = {
  key: 'root',
  storage,
  transforms: [encryptTransform],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'prod',
});

export const persistor = persistStore(store);

export default store;
