import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { CUSTOM_VIEWPORTS } from './viewports';
import { withStory, loadStories } from './story';
import './custom.css';

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...CUSTOM_VIEWPORTS
    }
  }
});

// Global Decorators
addDecorator(withKnobs);
addDecorator(withStory);

configure(loadStories, module);
