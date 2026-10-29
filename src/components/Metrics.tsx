import { Paper, SimpleGrid, Text } from '@mantine/core';
import { metrics } from '../data/resume';
import { Reveal } from './Reveal';
import { Section } from './Section';

export function Metrics() {
  return (
    <Section id="impact" eyebrow="01 / impact" title="Numbers from production">
      <SimpleGrid cols={{ base: 1, xs: 2, md: 3 }} spacing="lg" component="ul" style={{ listStyle: 'none', padding: 0 }}>
        {metrics.map((m, i) => (
          <li key={m.label}>
            <Reveal delay={i * 60}>
              <Paper withBorder p="xl" radius="lg" className="metric-card">
                <Text className="metric-value gradient-text" fz={40} fw={800} lh={1.1}>
                  {m.value}
                </Text>
                <Text fw={600} mt={6}>
                  {m.label}
                </Text>
                <Text fz="sm" c="dimmed" mt={4}>
                  {m.detail}
                </Text>
              </Paper>
            </Reveal>
          </li>
        ))}
      </SimpleGrid>
    </Section>
  );
}
