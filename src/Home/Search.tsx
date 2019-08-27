/*
 * Search.tsx
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

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

export const Search = (props: Props) => {
  const { value, onChange, onSubmit, children } = props;

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange} />
      <button type="submit">{children}</button>
    </form>
  );
};
