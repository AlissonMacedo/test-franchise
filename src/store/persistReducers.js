import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'franchise-analyst',
      storage,
      whitelist: ['auth', 'chart'],
    },
    reducers,
  );
  return persistedReducer;
};
