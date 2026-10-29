import { ReactNode } from 'react';
import { Container, Stack, Text, Title } from '@mantine/core';
import { Reveal } from './Reveal';

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId}>
      <Container size="lg" py={{ base: 56, sm: 88 }}>
        <Reveal>
          <Stack gap={4} mb={{ base: 28, sm: 40 }}>
            <Text className="section-eyebrow">{eyebrow}</Text>
            <Title id={headingId} order={2} fz={{ base: 28, sm: 36 }}>
              {title}
            </Title>
          </Stack>
        </Reveal>
        {children}
      </Container>
    </section>
  );
}
