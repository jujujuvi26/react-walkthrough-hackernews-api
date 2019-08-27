/*
 * List.tsx
 * DEFAULT DESCRIPTION. EDIT OR DELETE THIS.
 *
 * Author: Juvita Muksin (juvita.muksin@gdplabs.id)
 * Created at: August 27th 2019
 * -----
 * Last Modified: August 27th 2019
 * Modified By: Juvita Muksin (juvita.muksin@gdplabs.id)
 * -----
 * Copyright (c) 2019 GDP LABS. All rights reserved.
 */

import * as React from 'react';
import { ResultHits } from './Home';

interface Props {
  list: ResultHits[];
  onRemoveItem: (item: string) => () => void;
}

export const List = (props: Props) => {
  const { list, onRemoveItem } = props;

  return (
    <div>
      {list.map(item => (
        <div key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
          <button onClick={onRemoveItem(item.objectID)}>Remove</button>
        </div>
      ))}
    </div>
  );
};
