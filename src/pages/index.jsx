/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import Spline from '@splinetool/react-spline'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
} from '@/components/SocialIcons'
import logoGitCheatsheet from '@/images/logos/gitProject.svg'
import logoDolceriaFatur from '@/images/logos/dolceriaFatur.png'
import logoImageCars from '@/images/logos/imageCars.svg'
import logoRegesta from '@/images/logos/regesta.svg'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import curriculum from '@/images/curriculum.jpg'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-700/40 ">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Contattami!</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Per qualsiasi domanda o dubbio non esitare a
        <br /> contattarmi via e-mail.
      </p>
      <div className="mt-2 flex">
        <a href="mailto:baldi.filippo@icloud.com">
          {' '}
          <h2 className="text-md cursor-pointer font-semibold text-zinc-900 dark:text-zinc-100">
            baldi.filippo@icloud.com
          </h2>
        </a>
      </div>
    </div>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Regesta',
      title: 'Student Intern',
      url: 'https://www.regestaitalia.eu/',
      logo: logoRegesta,
      start: '2022',
      end: '2022',
    },
    {
      company: 'Cars&Quality ( Demo )',
      url: 'https://carsnadquality.vercel.app/',
      title: 'Full stack Developer',
      logo: logoImageCars,
      start: '2022',
      end: '2023',
    },
    {
      company: 'Git Cheatsheet',
      url: 'https://progettogit.pages.dev',
      title: 'Full stack Developer',
      logo: logoGitCheatsheet,
      start: '2020',
      end: '2021',
    },

    {
      company: 'Dolceria Fatur',
      url: 'https://dolceriafatur.it/',
      title: 'Web Developer',
      logo: logoDolceriaFatur,
      start: '2021',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
  ]

  return (
    <div className=" rounded-2xl border border-zinc-200 p-6 dark:border-zinc-700/40 ">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Progetti / Esperienze Lavorative</span>
      </h2>
      <ol className="mt-6 space-y-4 ">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex}>
            <a href={role.url} className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={role.logo}
                  alt=""
                  className="h-7 w-7 text-red-500"
                  unoptimized
                />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {role.company}
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  {role.title}
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label={`${role.start.label ?? role.start} until ${
                    role.end.label ?? role.end
                  }`}
                >
                  <time dateTime={role.start.dateTime ?? role.start}>
                    {role.start.label ?? role.start}
                  </time>{' '}
                  <span aria-hidden="true">—</span>{' '}
                  <time dateTime={role.end.dateTime ?? role.end}>
                    {role.end.label ?? role.end}
                  </time>
                </dd>
              </dl>
            </a>
          </li>
        ))}
      </ol>
      <a href="@/images/curriculum.jpg" download="CurriculumBaldiFilippo">
        <Button variant="secondary" className="group mt-6 w-full">
          Download CV
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </a>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Filippo Baldi - Software designer.</title>
        <meta
          name="description"
          content="I’m Filippo, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="flex flex-col lg:flex-row">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Baldi Filippo
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              Mi chiamo Filippo, ho 19 anni e ho appena conseguito la maturità
              nel campo dell'informatica. Sono un appassionato di sviluppo web e
              mi dedico con entusiasmo alla creazione di siti web moderni e
              user-friendly. Ho acquisito esperienza con diversi linguaggi di
              programmazione e framework, inclusi HTML, CSS, JavaScript e React.
              Sono una persona veloce nell'apprendimento e sono fiducioso nella
              mia capacità di eccellere in qualsiasi progetto di sviluppo. Nel
              mio Portfolio potrai conoscere meglio i dettagli su di me come il
              mio background educativo e il mio interesse per lo sviluppo web.
              Ti parlerò anche delle mie ambizioni e della mia passione per
              creare esperienze utente innovative
            </p>
            <div className="mt-6 flex gap-6">
              <SocialLink
                href="https://twitter.com/baldifilippo_"
                aria-label="Seguimi suTwitter"
                icon={TwitterIcon}
              />
              <SocialLink
                href="https://instagram.com/Baldifilippo_"
                aria-label="Seguimi suInstagram"
                icon={InstagramIcon}
              />
              <SocialLink
                href="https://github.com/BaldiFilippo"
                aria-label="Seguimi suGitHub"
                icon={GitHubIcon}
              />
            </div>
          </div>
          <div className=" hidden w-full justify-center md:flex  md:w-full ">
            <Spline
              scene="https://prod.spline.design/j8DGyxGXYk0RWzHX/scene.splinecode"
              className=" splinehidden overflow-hidden md:block lg:block"
            />
          </div>
        </div>
      </Container>

      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
            <Newsletter />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
