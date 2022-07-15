import clsx from 'clsx';
import React, {Fragment} from 'react'
import { Hero } from './';
import Navig from "./Navig";
import Prose from "./Prose";
import Highlight, { defaultProps } from 'prism-react-renderer'


const TextCourse = () => {
    const tabs = [
        { name: 'cache-advance.config.js', isActive: true },
      ]
    const codeLanguage = 'javascript';
    const code = `export default {
  strategy: 'predictive',
  engine: {
    cpus: 12,
    backups: ['./storage/cache.wtf'],
  },
}`;
    const navigation = [
        {
            title: 'Introduction',
            links: [
                { title: 'Try React', href: '/' },
                { title: 'Installation', href: '/docs/installation' },
            ],
        },
        {
            title: 'Core concepts',
            links: [
                { title: 'Hello World', href: '/docs/understanding-caching' },
                {
                    title: 'Introducing JSX',
                    href: '/docs/predicting-user-behavior',
                },
                { title: 'Basics of time-travel', href: '/docs/basics-of-time-travel' },
                {
                    title: 'Rendering Elements',
                    href: '/docs/introduction-to-string-theory',
                },
                { title: 'Components and Props', href: '/docs/the-butterfly-effect' },
                { title: 'Quiz', href: '/docs/the-butterfly-effect' },
            ],
        },
        {
            title: 'Advanced guides',
            links: [
                { title: 'Accessibility', href: '/docs/writing-plugins' },
                { title: 'Code-Splitting', href: '/docs/neuralink-integration' },
                { title: 'Context', href: '/docs/temporal-paradoxes' },
                { title: 'Error Boundaries', href: '/docs/testing' },
                { title: 'Forwarding Refs', href: '/docs/compile-time-caching' },
                {
                    title: 'Fragments',
                    href: '/docs/predictive-data-generation',
                },
            ],
        },
        {
            title: 'API reference',
            links: [
                { title: 'React.Component', href: '/docs/cacheadvance-predict' },
                { title: 'ReactDOM', href: '/docs/cacheadvance-flush' },
                { title: 'ReactDOMClient', href: '/docs/cacheadvance-revert' },
                { title: 'ReactDOMServer', href: '/docs/cacheadvance-regret' },
            ],
        },
        {
            title: 'Contributing',
            links: [
                { title: 'How to contribute', href: '/docs/how-to-contribute' },
                { title: 'Architecture guide', href: '/docs/architecture-guide' },
                { title: 'Design principles', href: '/docs/design-principles' },
            ],
        },
    ]
    return (
        <>
            <section className="bg-gray-900 ">
      <div className="py-8 pb-0 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white fonts">
          Getting Started With React
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 fonts">
          This page is an overview of react documentation.
        </p>
        <p className="w-full text-lg flex items-end justify-end font-normal text-gray-500 lg:text-md sm:px-16 xl:px-48 dark:text-gray-400 fonts">
          A course by <strong className='ml-2'>P Yogesh</strong>
        </p>
      </div>
            </section>


            <div className="bg-gray-900 max-h-fit relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12">
                <div className="hidden lg:relative lg:block lg:flex-none">
                    <div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" />
                    <div className="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-16 pl-0.5">
                        <div className="absolute top-16 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" />
                        <div className="absolute top-28 bottom-0 right-0 hidden w-px bg-slate-800 dark:block" />
                        <Navig
                            navigation={navigation}
                            className="w-64 pr-8 xl:w-72 xl:pr-16"
                        />
                    </div>
                </div>
                <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
                    <article>
                        <header className="mb-9 space-y-1">
                            <p className="font-display text-sm font-medium text-sky-500">
                                Introduction
                            </p>
                            <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white">
                                Try React
                            </h1>
                        </header>
                        <p>React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.</p>
                    </article>
                    <dl className="mt-12 flex flex-col border-t border-slate-200 pt-6 dark:border-slate-800">
                        <h1 className="font-display text-2xl tracking-tight text-slate-900 dark:text-white">
                            Online Playgrounds
                        </h1>
                        <p className='mt-4'>If you’re interested in playing around with React, you can use an online code playground. Try a Hello World template on CodePen, CodeSandbox, or Stackblitz.</p>
                        <p>If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos</p>
                    </dl>
                    <dl className="mt-12 flex flex-col border-t border-slate-200 pt-6 dark:border-slate-800">
                        <h1 className="font-display text-2xl tracking-tight text-slate-900 dark:text-white">
                            Sample Code
                        </h1>
                        <div className="mt-4 flex space-x-2 text-xs">
                    {tabs.map((tab) => (
                      <div
                        key={tab.name}
                        className={clsx('flex h-6 rounded-full', {
                          'bg-gradient-to-r from-sky-400/30 via-sky-400 to-sky-400/30 p-px font-medium text-sky-300':
                            tab.isActive,
                          'text-slate-500': !tab.isActive,
                        })}
                      >
                        <div
                          className={clsx(
                            'flex items-center rounded-full px-2.5',
                            { 'bg-slate-800': tab.isActive }
                          )}
                        >
                          {tab.name}
                        </div>
                      </div>
                    ))}
                  </div>
                        <div className="mt-6 flex items-start px-1 text-sm">
                            <div
                                aria-hidden="true"
                                className="select-none border-r border-slate-300/5 pr-4 font-mono text-slate-600"
                            >
                                {Array.from({
                                    length: code.split('\n').length,
                                }).map((_, index) => (
                                    <Fragment key={index}>
                                        {(index + 1).toString().padStart(2, '0')}
                                        <br />
                                    </Fragment>
                                ))}
                            </div>
                            <Highlight
                                {...defaultProps}
                                code={code}
                                language={codeLanguage}
                                theme={undefined}
                            >
                                {({
                                    className,
                                    style,
                                    tokens,
                                    getLineProps,
                                    getTokenProps,
                                }) => (
                                    <pre
                                        className={clsx(
                                            className,
                                            'flex overflow-x-auto pb-6'
                                        )}
                                        style={style}
                                    >
                                        <code className="px-4">
                                            {tokens.map((line, index) => (
                                                <div key={index} {...getLineProps({ line })}>
                                                    {line.map((token, index) => (
                                                        <span
                                                            key={index}
                                                            {...getTokenProps({ token })}
                                                        />
                                                    ))}
                                                </div>
                                            ))}
                                        </code>
                                    </pre>
                                )}
                            </Highlight>
                        </div>
                    </dl>
                    <dl className="mt-12 flex border-t border-slate-200 pt-6 dark:border-slate-800">
                        {/* <div>
                            <dt className="font-display text-sm font-medium text-slate-900 dark:text-white">
                                <span className='flex flex-row gap-1 justify-start'><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
</svg>Previous</span>
                            </dt>
                            <dd className="mt-1">
                                <a className="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300">
                                    Getting started
                                </a>
                            </dd>
                        </div> */}
                        <div className="ml-auto text-right">
                            <dt className="font-display text-sm font-medium text-slate-900 dark:text-white">
                                <span className='flex flex-row gap-1 justify-end'>Next<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
</svg></span>
                            </dt>
                            <dd className="mt-1">
                                <a className="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300">
                                    Installation
                                </a>
                            </dd>
                        </div>
                    </dl>
                </div>
                <div className="hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
                    <nav aria-labelledby="on-this-page-title" className="w-56">
                        <>
                            <h2
                                id="on-this-page-title"
                                className="font-display text-sm font-medium text-slate-900 dark:text-white"
                            >
                                On this page
                            </h2>
                            <ul className="mt-4 space-y-3 text-sm">
                                <li>
                                    <h3>
                                        <a
                                            className='text-sky-500'
                                        >
                                            Try React
                                        </a>
                                    </h3>
                                </li>
                                <li>
                                    <h3>
                                        <a
                                        className={clsx(
                                                'font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
                                            )}

                                        >
                                            Online Playgrounds
                                        </a>
                                    </h3>
                                </li>
                                <li>
                                    <h3>
                                        <a
                                            className={clsx(
                                                'font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
                                            )}
                                        >
                                            Sample Code
                                        </a>
                                    </h3>
                                </li>
                            </ul>
                        </>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default TextCourse
