import React from 'react'
import { Square3Stack3DIcon, ClipboardDocumentCheckIcon, GlobeAltIcon } from '@heroicons/react/20/solid';
import { FeatureBanner } from '../images';

const features = [
  {
    name: 'AI-Native Test Automation',
    description:
      'Qualitia Boson automates Salesforce flows with a single click, simplifying and accelerating your testing process.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Instant Updates & Total Control',
    description:
      'Maintain end-to-end test oversight and instantly update automation after every Salesforce release.',
    icon: Square3Stack3DIcon,
  },
  {
    name: 'Accelerate & Reduce Defects',
    description:
      'Achieve up to 80% defect reduction and 40% faster release cycles, enabling reliable and efficient delivery.',
    icon: ClipboardDocumentCheckIcon,
  },
];

export default function Features() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">AI-Powered Test Automation</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Revolutionize Salesforce Testing</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Qualitia’s AI-native platform empowers QA teams with rapid, reliable, and scalable Salesforce automation—no scripting required.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={FeatureBanner}
            alt="AI automation illustration"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 flex self-center ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
