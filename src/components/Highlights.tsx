import { Badge, Card, Group, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import {
  IconAccessible,
  IconActivityHeartbeat,
  IconBolt,
  IconComponents,
  IconUsers,
  IconUsersGroup,
  type Icon,
} from '@tabler/icons-react';
import { highlights } from '../data/resume';
import { Reveal } from './Reveal';
import { Section } from './Section';

// Order matches `highlights` in data/resume.ts
const ICONS: Icon[] = [IconUsers, IconComponents, IconBolt, IconActivityHeartbeat, IconAccessible, IconUsersGroup];

export function Highlights() {
  return (
    <Section id="work" eyebrow="02 / selected work" title="What I've built and owned">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        {highlights.map((h, i) => {
          const ItemIcon = ICONS[i % ICONS.length];
          return (
            <Reveal key={h.title} delay={(i % 2) * 80}>
              <Card component="article" withBorder padding="xl" radius="lg" className="highlight-card">
                <Group gap="sm" mb="md" wrap="nowrap">
                  <ThemeIcon variant="light" size={40} radius="md" aria-hidden>
                    <ItemIcon size={22} />
                  </ThemeIcon>
                  <Title order={3} fz="lg">
                    {h.title}
                  </Title>
                </Group>
                <Text c="dimmed" fz="sm" lh={1.65}>
                  {h.summary}
                </Text>
                <Group gap={6} mt="lg">
                  {h.tags.map((t) => (
                    <Badge key={t} variant="default" radius="sm" tt="none" fw={500}>
                      {t}
                    </Badge>
                  ))}
                </Group>
              </Card>
            </Reveal>
          );
        })}
      </SimpleGrid>
    </Section>
  );
}
