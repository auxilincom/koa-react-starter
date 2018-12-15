// @flow

import { createSelector } from 'reselect';

import type { StateType } from '../types';
import type { StateType as UserType } from './user.types';

const userSelector = (state: StateType): UserType => state.user;

export const firstNameSelector = createSelector(
  userSelector,
  (user: UserType): string => user.firstName,
);

export const lastNameSelector = createSelector(
  userSelector,
  (user: UserType): string => user.lastName,
);

export const userNameSelector = createSelector(
  userSelector,
  (user: UserType): string => {
    return `${user.firstName || ''} ${user.lastName || ''}`.trim();
  },
);

export const emailSelector = createSelector(
  userSelector,
  (user: UserType): string => user.email,
);
