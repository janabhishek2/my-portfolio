import { useEffect, useState } from 'react';
import {
  ActionIcon,
  Anchor,
  Burger,
  Container,
  Drawer,
  Group,
  Stack,
  Text,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { profile } from '../data/resume';

export const NAV_ITEMS = [
  { id: 'impact', label: 'Impact' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const navIds = NAV_ITEMS.map((n) => n.id);

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { setColorScheme } = useMantineColorScheme();
  const computed = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const active = useActiveSection(navIds);

  const links = NAV_ITEMS.map((item) => (
    <a
      key={item.id}
      href={`#${item.id}`}
      className="nav-link"
      aria-current={active === item.id ? 'true' : undefined}
      onClick={close}
    >
      {item.label}
    </a>
  ));

  return (
    <header className="header">
      <Container size="lg" h={64}>
        <Group h="100%" justify="space-between">
          <Anchor href="#top" underline="never" c="inherit" fw={700} aria-label={`${profile.name}, back to top`}>
            <Text span fw={800} fz="lg">
              AJ<Text span c="indigo.5" inherit>.</Text>
            </Text>
          </Anchor>

          <Group gap={4} visibleFrom="sm" component="nav" aria-label="Primary">
            {links}
          </Group>

          <Group gap="xs">
            <ActionIcon
              variant="default"
              size="lg"
              aria-label={`Switch to ${computed === 'dark' ? 'light' : 'dark'} mode`}
              onClick={() => setColorScheme(computed === 'dark' ? 'light' : 'dark')}
            >
              {computed === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />}
            </ActionIcon>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" aria-label="Toggle navigation" />
          </Group>
        </Group>
      </Container>

      <Drawer opened={opened} onClose={close} size="xs" position="right" title="Navigate" hiddenFrom="sm">
        <Stack component="nav" aria-label="Mobile" gap="xs">
          {links}
        </Stack>
      </Drawer>
    </header>
  );
}
