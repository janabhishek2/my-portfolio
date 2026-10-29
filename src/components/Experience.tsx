import { Group, List, Paper, Text, ThemeIcon, Timeline, Title } from '@mantine/core';
import { IconBriefcase, IconCheck } from '@tabler/icons-react';
import { experience } from '../data/resume';
import { Reveal } from './Reveal';
import { Section } from './Section';

export function Experience() {
  return (
    <Section id="experience" eyebrow="03 / experience" title="Where I've worked">
      <Timeline active={0} bulletSize={32} lineWidth={2}>
        {experience.map((role) => (
          <Timeline.Item key={role.company} bullet={<IconBriefcase size={16} aria-hidden />}>
            <Reveal>
              <Paper withBorder p={{ base: 'md', sm: 'xl' }} radius="lg" ml={{ base: 0, sm: 'xs' }}>
                <Group justify="space-between" align="flex-start" gap="xs">
                  <div>
                    <Title order={3} fz="xl">
                      {role.title}
                    </Title>
                    <Text fw={600} c="indigo.5">
                      {role.company}{' '}
                      <Text span c="dimmed" fw={400}>
                        · {role.location}
                      </Text>
                    </Text>
                  </div>
                  <Text ff="monospace" fz="sm" c="dimmed">
                    {role.start} — {role.end}
                  </Text>
                </Group>

                <List
                  mt="lg"
                  spacing="sm"
                  size="sm"
                  icon={
                    <ThemeIcon size={18} radius="xl" variant="light" aria-hidden>
                      <IconCheck size={12} />
                    </ThemeIcon>
                  }
                >
                  {role.points.map((p) => (
                    <List.Item key={p}>{p}</List.Item>
                  ))}
                </List>
              </Paper>
            </Reveal>
          </Timeline.Item>
        ))}
      </Timeline>
    </Section>
  );
}
