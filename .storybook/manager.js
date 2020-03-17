import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';
import '@storybook/addon-a11y/register';
import '@storybook/addon-viewport/register';
import 'storybook-addon-material-ui/register';

import { addons } from '@storybook/addons';
import theme from './theme';

addons.setConfig({
  theme
});

