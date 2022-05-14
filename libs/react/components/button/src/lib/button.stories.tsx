import React from 'react';
import './foo.css';

export default {
  title: 'Story',
};

const Template = () => (
  <button className="foo">
    <span className="bar">Dummy </span>content
  </button>
);

export const Default = Template.bind({});

Default.args = {};
