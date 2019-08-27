/*
 * Home.tsx
 * DEFAULT DESCRIPTION. EDIT OR DELETE THIS.
 *
 * Author: Juvita Muksin (juvita.muksin@gdplabs.id)
 * Created at: August 26th 2019
 * -----
 * Last Modified: August 27th 2019
 * Modified By: Juvita Muksin (juvita.muksin@gdplabs.id)
 * -----
 * Copyright (c) 2019 GDP LABS. All rights reserved.
 */

import * as React from 'react';
import { Search } from './Search';
import { List } from './List';

const DEFAULT_QUERY = 'redux';
const DEFAULT_PAGE = 0;
const DEFAULT_HPP = 100;

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
const PARAM_HPP = 'hitsPerPage=';

export interface ResultHits {
  author: string;
  comment_text: string | null;
  created_at: string;
  created_at_i: number;
  num_comments: number;
  objectID: string;
  parent_id: string | null;
  points: number;
  relevancy_score: number;
  story_id: string | null;
  story_text: string | null;
  story_title: string | null;
  story_url: string | null;
  title: string;
  url: string;
}

interface Result {
  hits: ResultHits[];
  page: number;
}

interface State {
  result: Result | null;
  searchTerm: string;
}

export const Home = () => {
  const [data, setData] = React.useState<Result>({ hits: [], page: 0 });
  const [query, setQuery] = React.useState<string>(DEFAULT_QUERY);

  const setSearchTopStories = (result: Result) => {
    const { hits, page } = result;
    const oldHits = page !== DEFAULT_PAGE ? data.hits : [];
    const newHits = [...oldHits, ...hits];
    setData({ hits: newHits, page });
  };

  const fetchSearchTopStories = (query: string, page: number = 0) => {
    const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${query}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`;
    return fetch(url)
      .then(response => response.json())
      .then(data => setSearchTopStories(data))
      .catch(error => console.error(error));
  };

  const page = (data && data.page) || DEFAULT_PAGE;

  React.useMemo(() => fetchSearchTopStories(query, page), [query, page]);

  if (!data) return null;

  const onRemoveItem = (id: string) => {
    return () => {
      const updatedHits = data.hits.filter(item => item.objectID !== id);
      console.log(updatedHits);
      setData({ ...data, hits: updatedHits });
    };
  };

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const onSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    fetchSearchTopStories(query);
    event.preventDefault();
  };

  return (
    <div>
      <div>
        <Search
          value={query}
          onChange={onSearchChange}
          onSubmit={onSearchSubmit}
        >
          Search
        </Search>
      </div>
      <List list={data.hits} onRemoveItem={onRemoveItem} />
      <div>
        <button onClick={() => fetchSearchTopStories(query, page + 1)}>
          More
        </button>
      </div>
    </div>
  );
};
