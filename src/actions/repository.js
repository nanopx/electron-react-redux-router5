import { createAction } from 'redux-actions';
import {
  REPOSITORY_SEARCH,
  REPOSITORY_STOP_SEARCH,
  REPOSITORY_START_SEARCH,
} from '../constants';
import { searchRepository } from '../lib/githubApi';

export const repositoryStartSearch = createAction(REPOSITORY_START_SEARCH);

export const repositoryStopSearch = createAction(REPOSITORY_STOP_SEARCH);

export const repositorySearch = createAction(REPOSITORY_SEARCH, async () => {
  const repositories = await searchRepository();
  return { repositories };
});
