// @flow

import type { OutputSelector } from 'reselect';

import type { StateType } from 'resources/types';

export type Selector<TResult> = OutputSelector<StateType, void, TResult>; // eslint-disable-line
