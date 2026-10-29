import { lazy, Suspense } from 'react';
import { Center, Loader } from '@mantine/core';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { Highlights } from './components/Highlights';
import { Experience } from './components/Experience';

// Below-the-fold sections ship as separate chunks so the first paint only needs the hero and above.
const Skills = lazy(() => import(/* webpackChunkName: "skills" */ './components/Skills'));
const Education = lazy(() => import(/* webpackChunkName: "education" */ './components/Education'));
const Contact = lazy(() => import(/* webpackChunkName: "contact" */ './components/Contact'));

export function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Metrics />
        <Highlights />
        <Experience />
        <Suspense
          fallback={
            <Center py="xl">
              <Loader size="sm" aria-label="Loading section" />
            </Center>
          }
        >
          <Skills />
          <Education />
          <Contact />
        </Suspense>
      </main>
    </>
  );
}
