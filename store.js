import { configureStore } from '@reduxjs/toolkit';

import SaveReducer from './SavedUser';

export default configureStore({
  reducer: {
    booking: SaveReducer,
  },
});
