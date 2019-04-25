// flow-typed signature: f5c8ded4091b25e23bc26e943c13b429
// flow-typed version: 6a3fe49a8b/history_v4.x.x/flow_>=v0.25.x

declare module "history" {
  declare function Unblock(): void;

  declare export type Action = "PUSH" | "REPLACE" | "POP";

  // browser history
  declare export type BrowserLocation = {
    pathname: string,
    search: string,
    hash: string,
    // Browser and Memory specific
    state: {},
    key: string,
  };

  declare interface IBrowserHistory {
    length: number,
    location: BrowserLocation,
    action: Action,
    push(path: string, state?: {}): void,
    push(location: $Shape<BrowserLocation>): void,
    replace(path: string, state?: {}): void,
    replace(location: $Shape<BrowserLocation>): void,
    go(n: number): void,
    goBack(): void,
    goForward(): void,
    listen: Function,
    block(message: string): typeof Unblock,
    block((location: BrowserLocation, action: Action) => string): typeof Unblock,
  }

  declare export type BrowserHistory = IBrowserHistory;

  declare type BrowserHistoryOpts = {
    basename?: string,
    forceRefresh?: boolean,
    getUserConfirmation?: (
      message: string,
      callback: (willContinue: boolean) => void,
    ) => void,
  };

  declare export function createBrowserHistory(opts?: BrowserHistoryOpts): BrowserHistory;

  // memory history
  declare export type MemoryLocation = {
    pathname: string,
    search: string,
    hash: string,
    // Browser and Memory specific
    state: {},
    key: string,
  };

  declare interface IMemoryHistory {
    length: number,
    location: MemoryLocation,
    action: Action,
    index: number,
    entries: Array<string>,
    push(path: string, state?: {}): void,
    push(location: $Shape<MemoryLocation>): void,
    replace(path: string, state?: {}): void,
    replace(location: $Shape<MemoryLocation>): void,
    go(n: number): void,
    goBack(): void,
    goForward(): void,
    // Memory only
    canGo(n: number): boolean,
    listen: Function,
    block(message: string): typeof Unblock,
    block((location: MemoryLocation, action: Action) => string): typeof Unblock,
  }

  declare export type MemoryHistory = IMemoryHistory;

  declare type MemoryHistoryOpts = {
    initialEntries?: Array<string>,
    initialIndex?: number,
    keyLength?: number,
    getUserConfirmation?: (
      message: string,
      callback: (willContinue: boolean) => void,
    ) => void,
  };

  declare export function createMemoryHistory(opts?: MemoryHistoryOpts): MemoryHistory;

  // hash history
  declare export type HashLocation = {
    pathname: string,
    search: string,
    hash: string,
  };

  declare interface IHashHistory {
    length: number,
    location: HashLocation,
    action: Action,
    push(path: string, state?: {}): void,
    push(location: $Shape<HashLocation>): void,
    replace(path: string, state?: {}): void,
    replace(location: $Shape<HashLocation>): void,
    go(n: number): void,
    goBack(): void,
    goForward(): void,
    listen: Function,
    block(message: string): typeof Unblock,
    block((location: HashLocation, action: Action) => string): typeof Unblock,
    push(path: string): void,
  }

  declare export type HashHistory = IHashHistory;

  declare type HashHistoryOpts = {
    basename?: string,
    hashType: "slash" | "noslash" | "hashbang",
    getUserConfirmation?: (
      message: string,
      callback: (willContinue: boolean) => void,
    ) => void,
  };

  declare export function createHashHistory(opts?: HashHistoryOpts): HashHistory;
}
