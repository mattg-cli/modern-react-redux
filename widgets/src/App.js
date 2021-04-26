import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end JS framework'
  },
  {
    title: 'What use React?',
    content: 'React is a favorite JS library among engineers.'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components.'
  }
];

const options = [
  {
    label: 'Red',
    color: 'red'
  },
  {
    label: 'Green',
    color: 'green'
  },
  {
    label: 'Blue',
    color: 'blue'
  }
]

export default () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown options={options} />
    </div>
  )
};