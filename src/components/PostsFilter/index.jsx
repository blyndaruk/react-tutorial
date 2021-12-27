import React from 'react';

import BaseSelect from '../UI/BaseSelect';
import BaseInput from '../UI/Input';
import BaseButton from '../UI/Button';

import cssModule from './PostsFilter.module.scss';

const PostsFilter = ({ filter, setFilter, setModalActive }) => {
  const { sort, query } = filter

  return (
    <div className={cssModule['posts-filter']}>
      <BaseSelect
        value={sort}
        options={[
          { name: 'By Title', value: 'title' },
          { name: 'By Description', value: 'description' }
        ]}
        defaultValue="Sort By"
        onChange={(method) => setFilter({ ...filter, sort: method })}
      />
      <BaseInput
        placeholder="Search..."
        value={query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <BaseButton onClick={() => setModalActive(true)}>Add Post</BaseButton>
    </div>
  );
};

export default PostsFilter;
