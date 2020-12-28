import { createSelector } from '@reduxjs/toolkit';
import get from 'lodash/get';

export const sessionSliceSelector = (state) => state.session;

export const currentUserSelector = createSelector(sessionSliceSelector, (session) => {
  return get(session, 'user', undefined);
});

export const currentUserIdSelector = createSelector(sessionSliceSelector, (session) => {
  return get(session, 'user.uid', undefined);
});

export const isLoggedInSelector = createSelector(sessionSliceSelector, (sessionSlice) =>
  Boolean(sessionSlice.user.uid)
);
