import { Badge, Button, Container, Group, Stack, Text, Title } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconMapPin } from '@tabler/icons-react';
import { profile } from '../data/resume';

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <Container size="lg" pt={{ base: 64, sm: 120 }} pb={{ base: 48, sm: 96 }}>
        <Stack gap="lg" maw={760} pos="relative">
          <Group gap="xs">
            <Badge variant="light" size="lg" radius="sm">
              {profile.role}
            </Badge>
            <Badge variant="outline" color="gray" size="lg" radius="sm" leftSection={<IconMapPin size={14} />}>
              {profile.location}
            </Badge>
          </Group>

          <Title id="hero-heading" order={1} fz={{ base: 40, sm: 64 }} lh={1.05} fw={800}>
            Hi, I&apos;m {profile.name.split(' ')[0]}.
            <br />
            <span className="gradient-text">I build fast, accessible frontends at scale.</span>
          </Title>

          <Text fz={{ base: 'md', sm: 'lg' }} c="dimmed" maw={640}>
            {profile.tagline}
          </Text>
          <Text fz={{ base: 'md', sm: 'lg' }} c="dimmed" maw={640}>
            {profile.focus}
          </Text>

          <Group gap="sm" mt="sm">
            <Button component="a" href={`mailto:${profile.email}`} size="md" leftSection={<IconMail size={18} />}>
              Get in touch
            </Button>
            <Button
              component="a"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              size="md"
              variant="default"
              leftSection={<IconBrandLinkedin size={18} />}
            >
              LinkedIn
            </Button>
            <Button
              component="a"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              size="md"
              variant="default"
              leftSection={<IconBrandGithub size={18} />}
            >
              GitHub
            </Button>
          </Group>
        </Stack>
      </Container>
    </section>
  );
}
