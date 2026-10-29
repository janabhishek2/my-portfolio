import { Group, Paper, SimpleGrid, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { IconCertificate, IconSchool } from '@tabler/icons-react';
import { certifications, education } from '../data/resume';
import { Reveal } from './Reveal';
import { Section } from './Section';

export default function Education() {
  return (
    <Section id="education" eyebrow="05 / education" title="Education & certifications">
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
        <Reveal>
          <Paper withBorder p="xl" radius="lg" h="100%">
            <Group gap="sm" mb="md">
              <ThemeIcon variant="light" size={40} radius="md" aria-hidden>
                <IconSchool size={22} />
              </ThemeIcon>
              <Title order={3} fz="lg">
                {education.degree}
              </Title>
            </Group>
            <Text fw={600}>{education.field}</Text>
            <Text c="dimmed" fz="sm" mt={4}>
              {education.school}
            </Text>
            <Group gap="md" mt="md">
              <Text ff="monospace" fz="sm">
                {education.grade}
              </Text>
              <Text ff="monospace" fz="sm" c="dimmed">
                {education.years}
              </Text>
            </Group>
          </Paper>
        </Reveal>

        <Reveal delay={80}>
          <Paper withBorder p="xl" radius="lg" h="100%">
            <Group gap="sm" mb="md">
              <ThemeIcon variant="light" size={40} radius="md" aria-hidden>
                <IconCertificate size={22} />
              </ThemeIcon>
              <Title order={3} fz="lg">
                Certifications
              </Title>
            </Group>
            <Stack gap="md">
              {certifications.map((c) => (
                <div key={c.name}>
                  <Text fw={600}>{c.name}</Text>
                  <Text c="dimmed" fz="sm">
                    {c.issuer}
                  </Text>
                </div>
              ))}
            </Stack>
          </Paper>
        </Reveal>
      </SimpleGrid>
    </Section>
  );
}
