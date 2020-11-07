import React from 'react';

import { Button } from './Button';

export default {
  title: 'Design System/Button TSX',
  component: Button,
};

export const AllButtons = () => (
  <div>
    <Button types="primary">Primary</Button>
    <Button types="secondary">Secondary</Button>
    <Button types="tertiary">Tertiary</Button>
  </div>
);

AllButtons.storyName= 'all buttons';
