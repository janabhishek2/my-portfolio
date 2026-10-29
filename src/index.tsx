// Only the Mantine styles this site uses (instead of the full ~190 KB bundle). Order matters: base layers first.
import '@mantine/core/styles/baseline.css';
import '@mantine/core/styles/default-css-variables.css';
import '@mantine/core/styles/global.css';
import '@mantine/core/styles/UnstyledButton.css';
import '@mantine/core/styles/Button.css';
import '@mantine/core/styles/ActionIcon.css';
import '@mantine/core/styles/Anchor.css';
import '@mantine/core/styles/Badge.css';
import '@mantine/core/styles/Burger.css';
import '@mantine/core/styles/Card.css';
import '@mantine/core/styles/Center.css';
import '@mantine/core/styles/Chip.css';
import '@mantine/core/styles/CloseButton.css';
import '@mantine/core/styles/Container.css';
import '@mantine/core/styles/Divider.css';
import '@mantine/core/styles/Drawer.css';
import '@mantine/core/styles/Group.css';
import '@mantine/core/styles/List.css';
import '@mantine/core/styles/Loader.css';
import '@mantine/core/styles/ModalBase.css';
import '@mantine/core/styles/Overlay.css';
import '@mantine/core/styles/Paper.css';
import '@mantine/core/styles/ScrollArea.css';
import '@mantine/core/styles/SimpleGrid.css';
import '@mantine/core/styles/Stack.css';
import '@mantine/core/styles/Text.css';
import '@mantine/core/styles/ThemeIcon.css';
import '@mantine/core/styles/Timeline.css';
import '@mantine/core/styles/Title.css';
import '@mantine/core/styles/Tooltip.css';
import '@mantine/core/styles/VisuallyHidden.css';
import './styles.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import { App } from './App';

const container = document.getElementById('root');
if (!container) throw new Error('Root element #root not found');

createRoot(container).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <App />
    </MantineProvider>
  </StrictMode>,
);
