import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import authReducer from "@/redux/featured/auth/authSlice";
import {
  PERSIST,
  persistReducer,
  persistStore,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import searchStateReducer from "./featured/find-meals/searchSlice";

// Combine reducers for persistor
const rootReducer = combineReducers({
  auth: authReducer,
  search: searchStateReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

// Persisted reducers
const persistedReducers = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    combinedPersist: persistedReducers,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REHYDRATE, PERSIST, REGISTER],
      },
    }).concat(baseApi.middleware),
});

// Infering types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// exporting persistor for provider
export const persistor = persistStore(store);
