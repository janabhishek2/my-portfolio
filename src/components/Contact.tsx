import { Anchor, Button, CopyButton, Divider, Group, Paper, Stack, Text, Title, Tooltip } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconCheck, IconCopy, IconMail } from '@tabler/icons-react';
import { profile } from '../data/resume';
import { Section } from './Section';

export default function Contact() {
  return (
    <>
      <Section id="contact" eyebrow="06 / contact" title="Let's talk">
        <Paper withBorder radius="lg" p={{ base: 'lg', sm: 48 }}>
          <Stack gap="lg" align="flex-start">
            <Title order={3} fz={{ base: 'xl', sm: 28 }} maw={640}>
              Looking for a senior frontend engineer who cares about architecture, performance and the people using the
              product?
            </Title>
            <Text c="dimmed" maw={600}>
              I&apos;m open to senior frontend roles. The fastest way to reach me is email.
            </Text>

            <Group gap="sm">
              <Button component="a" href={`mailto:${profile.email}`} size="md" leftSection={<IconMail size={18} />}>
                {profile.email}
              </Button>
              <CopyButton value={profile.email} timeout={2000}>
                {({ copied, copy }) => (
                  <Tooltip label={copied ? 'Copied' : 'Copy email'} withArrow>
                    <Button
                      variant="default"
                      size="md"
                      onClick={copy}
                      aria-label="Copy email address"
                      leftSection={copied ? <IconCheck size={18} /> : <IconCopy size={18} />}
                    >
                      {copied ? 'Copied' : 'Copy'}
                    </Button>
                  </Tooltip>
                )}
              </CopyButton>
            </Group>

            <Group gap="lg">
              <Anchor href={profile.linkedin} target="_blank" rel="noopener noreferrer" c="dimmed">
                <Group gap={6}>
                  <IconBrandLinkedin size={18} aria-hidden /> LinkedIn
                </Group>
              </Anchor>
              <Anchor href={profile.github} target="_blank" rel="noopener noreferrer" c="dimmed">
                <Group gap={6}>
                  <IconBrandGithub size={18} aria-hidden /> GitHub
                </Group>
              </Anchor>
            </Group>
          </Stack>
        </Paper>
      </Section>

      <footer>
        <Divider />
        <Group justify="space-between" maw={1140} mx="auto" px="md" py="lg">
          <Text fz="sm" c="dimmed">
            © {new Date().getFullYear()} {profile.name}
          </Text>
          <Text fz="sm" c="dimmed">
            Built with React, TypeScript, Mantine & Webpack
          </Text>
        </Group>
      </footer>
    </>
  );
}
