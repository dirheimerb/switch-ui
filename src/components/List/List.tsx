import React from 'react';
import Item from './Item';

export interface ListProps {
  list: Array<{
    objectID: string;
    url: string;
    title: string;
    author: string;
    num_comments: number;
    points: number;
  }>;
  onRemoveItem: (item: ListProps['list'][number]) => void;
}

const List = ({ list, onRemoveItem }: ListProps) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
    ))}
  </ul>
);

export default List;
