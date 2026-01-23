import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import rootReducer from "../Reducer/rootReducer";

/**
 * Redux Toolkit Setting with Persist
 */
const persistConfig = {
  key: "root",
  storage: storage,
  timeout: 100000,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check if needed for non-serializable actions
    }),
});

const persistor = persistStore(store);

export { store, persistor };