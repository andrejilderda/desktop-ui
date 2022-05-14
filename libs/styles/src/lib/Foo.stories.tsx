import React from 'react';
import './foo.css';

export default {
  title: 'Story',
};

const Template = () => <button>Foobar</button>;

export const Default = Template.bind({});

Default.args = {};
