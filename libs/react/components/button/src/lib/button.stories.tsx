import React from 'react';
import './foo.scss';

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
