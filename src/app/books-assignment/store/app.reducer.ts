import { ActionReducerMap } from '@ngrx/store';
import * as fromBook from '../book-list/store/book.reducers';

export interface AppState {
    books: fromBook.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    books: fromBook.bookReducer
};
