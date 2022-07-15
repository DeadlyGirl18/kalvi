import { useState } from 'react'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

const tableOfContents = {
  'Getting started': {
    'What is Angular ?': '00:03',
    'Try Angular': '00:15',
    'Setting up': '00:23',
  },
  Fundamentals: {
    'Components': "00:21",
    'Templates': "00:22",
    'Directives': "00:26",
    'Dependency Injection': "00:31",
    'DI Providers': "00:45",
  },
  'Boolean operations': {
    'Combining shapes': 50,
    'Subtracting shapes': 57,
    'Intersecting shapes': 66,
    Flattening: 78,
  },
  'Optimizing for production': {
    'Preparing for SVG': 82,
    'Configuring your export settings': 88,
    'Minifying and removing metadata': 95,
  },
}

export function TableOfContents() {
  let [isExpanded, setIsExpanded] = useState(false)

  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32 bg-base-300"
    >
      <Container>
        <SectionHeading number="1" id="table-of-contents-title">
          Table of contents
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-white">
        The topics in this section explain these features and concepts, and how you can use them.
        </p>
        <p className="mt-4 text-lg tracking-tight text-white-600">
        Interested in making your own Native Component or Module? Making modules for your own use case and sharing them with others on NPM and GitHub helps grow the React Native ecosystem and community! Read the guides to making your own Native Modules (Android, iOS) and Native Components (Android, iOS).
        </p>
        <ol className="mt-16 space-y-10 sm:space-y-16">
          {Object.entries(tableOfContents)
            .slice(0, isExpanded ? undefined : 2)
            .map(([title, pages]) => (
              <li key={title}>
                <h3 className="font-display text-3xl font-bold tracking-tight text-white">
                  {title}
                </h3>
                <ol className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-gray-900 py-3 px-6 text-base tracking-tight sm:py-7 sm:px-8">
                  {Object.entries(pages).map(([title, pageNumber]) => (
                    <li key={title} className="flex justify-between py-3">
                      <span className="font-medium text-white">
                       {title}
                      </span>
                      <span className="font-mono text-white-600">
                        <span className="sr-only">on page {pageNumber}</span>
                        <span aria-hidden="true">{pageNumber}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </li>
            ))}
        </ol>
        {!isExpanded && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              className="flex items-center text-base font-medium tracking-tight text-white-900 hover:text-slate-700"
              onClick={() => setIsExpanded(true)}
            >
              See more
              <svg aria-hidden="true" className="ml-2 h-6 w-6">
                <path
                  d="m17 14-5 5-5-5M12 18.5V5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </Container>
    </section>
  )
}
