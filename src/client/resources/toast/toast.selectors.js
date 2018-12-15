// @flow

import { createSelector } from 'reselect';

import type { StateType } from 'resources/types';
import type {
  MessageType,
  StateType as ToastStateType,
} from './toast.types';

const toastSelector = (state: StateType): ToastStateType => state.toast;

export const allMessagesSelector = createSelector(
  toastSelector,
  (toast: ToastStateType): Array<MessageType> => toast.messages,
);
