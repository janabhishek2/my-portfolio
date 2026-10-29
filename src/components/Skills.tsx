import { useState } from 'react';
import { Badge, Chip, Group, Paper, SimpleGrid, Text } from '@mantine/core';
import { skills } from '../data/resume';
import { Reveal } from './Reveal';
import { Section } from './Section';

const ALL = 'All';

export default function Skills() {
  const [filter, setFilter] = useState(ALL);
  const groups = filter === ALL ? skills : skills.filter((g) => g.name === filter);

  return (
    <Section id="skills" eyebrow="04 / skills" title="Toolbox">
      <Chip.Group multiple={false} value={filter} onChange={setFilter}>
        <Group gap="xs" mb="xl" role="group" aria-label="Filter skills by category">
          {[ALL, ...skills.map((g) => g.name)].map((name) => (
            <Chip key={name} value={name} variant="light" size="sm">
              {name}
            </Chip>
          ))}
        </Group>
      </Chip.Group>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" aria-live="polite">
        {groups.map((g) => (
          <Reveal key={g.name}>
            <Paper withBorder p="lg" radius="lg" h="100%">
              <Text fw={700} mb="sm">
                {g.name}
              </Text>
              <Group gap={6}>
                {g.items.map((s) => (
                  <Badge key={s} variant="light" radius="sm" tt="none" fw={500}>
                    {s}
                  </Badge>
                ))}
              </Group>
            </Paper>
          </Reveal>
        ))}
      </SimpleGrid>
    </Section>
  );
}
