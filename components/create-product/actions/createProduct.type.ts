export enum State {
    INITIAL = 0,
    OK = 200,
    NOT_FOUND = 404,
    INVALID_TITLE = 405,
    INVALID_PRICE = 406,
    INVALID_TN_URL = 407,
    INVALID_CAT_ID = 408,
}

export type FormState = {
  message: string;
  state: State;
};