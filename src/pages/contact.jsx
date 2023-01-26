import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import {
  Bars3Icon,
  EnvelopeIcon,
  PhoneIcon,
  XMarkIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'

import { Fragment, useState } from 'react'
import { Transition } from '@headlessui/react'

import { Container } from '@/components/Container'

function Notification() {
  const [show, setShow] = useState(true)

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0  z-50 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon
                      className="h-6 w-6 text-green-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">
                      Email sent successfully!
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      I will get back to you as soon as I can.
                    </p>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => {
                        setShow(false)
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}

export default function Contact() {
  const form = useRef()
  //variable to check if the email was sent using state
  const [sent, setSent] = useState(false)

  const sendEmail = (e) => {
    setSent(false)
    e.preventDefault()

    emailjs
      .sendForm(
        'service_jbm05pr',
        'template_0a6lqw7',
        form.current,
        'T_jObDLdYUHgOv9mI'
      )
      .then(
        (result) => {
          console.log(result.text)
          setSent(true)
          //reset the form
          form.current.reset()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <>
      {sent && <Notification />}
      <Container className="overflow-hidden">
        {/* Header */}
        <div className="bg-warm-gray-50">
          <div className="py-24 lg:py-32">
            <div className="relative z-10 mx-auto max-w-7xl pl-4 pr-8 sm:px-6 lg:px-8">
              <h1 className="text-warm-gray-900 text-4xl font-bold tracking-tight dark:text-zinc-100 sm:text-5xl lg:text-6xl">
                Get in touch
              </h1>
              <p className="text-warm-gray-500 mt-6 max-w-3xl text-xl dark:text-zinc-400">
                Vel nunc non ut montes, viverra tempor. Proin lectus nibh
                phasellus morbi non morbi. In elementum urna ut volutpat.
                Sagittis et vel et fermentum amet consequat.
              </p>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <section className="relative " aria-labelledby="contact-heading">
          <div
            className="bg-warm-gray-50 absolute h-1/2 w-full"
            aria-hidden="true"
          />
          {/* Decorative dot pattern */}
          <div className="relative mx-6 max-w-7xl lg:mx-8"></div>
          <div className=" mx-6 max-w-7xl lg:mx-8">
            <div className="relative border bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
              <h2 id="contact-heading" className="sr-only">
                Contact us
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Contact information */}
                <div className=" relative overflow-hidden bg-gradient-to-b from-blue-500 to-blue-600 py-10  px-6 dark:from-zinc-100 dark:to-zinc-300 sm:px-10 xl:p-12">
                  {/* Decorative angle backgrounds */}
                  <div
                    className="pointer-events-none absolute inset-0 sm:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 h-full w-full"
                      width={343}
                      height={388}
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                        fill="url(#linear1)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear1"
                          x1="254.553"
                          y1="107.554"
                          x2="961.66"
                          y2="814.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 h-full w-full"
                      width={359}
                      height={339}
                      viewBox="0 0 359 339"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                        fill="url(#linear2)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear2"
                          x1="192.553"
                          y1="28.553"
                          x2="899.66"
                          y2="735.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 h-full w-full"
                      width={160}
                      height={678}
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                        fill="url(#linear3)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear3"
                          x1="192.553"
                          y1="325.553"
                          x2="899.66"
                          y2="1032.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white dark:text-zinc-900">
                    Contact information
                  </h3>
                  <p className="mt-6 max-w-3xl text-base text-blue-50 dark:text-zinc-900">
                    Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                    volutpat massa dictumst amet. Sapien tortor lacus arcu.
                  </p>
                  <dl className="mt-8 space-y-6">
                    <dt>
                      <span className="sr-only dark:text-zinc-900">
                        Phone number
                      </span>
                    </dt>
                    <dd className="flex text-base text-blue-50 dark:text-zinc-900">
                      <PhoneIcon
                        className="h-6 w-6 flex-shrink-0 text-blue-200 dark:text-zinc-900"
                        aria-hidden="true"
                      />
                      <span className="ml-3 dark:text-zinc-900">
                        +1 (555) 123-4567
                      </span>
                    </dd>
                    <dt>
                      <span className="sr-only dark:text-zinc-900">Email</span>
                    </dt>
                    <dd className="flex text-base text-blue-50 dark:text-zinc-900">
                      <EnvelopeIcon
                        className="h-6 w-6 flex-shrink-0 text-blue-200 dark:text-zinc-900"
                        aria-hidden="true"
                      />
                      <span className="ml-3 dark:text-zinc-900">
                        support@workcation.com
                      </span>
                    </dd>
                  </dl>
                  <ul role="list" className="mt-8 flex space-x-12">
                    <li>
                      <a
                        className="text-blue-200 hover:text-blue-100 dark:text-zinc-900"
                        href="#"
                      >
                        <span className="sr-only dark:text-zinc-900">
                          Facebook
                        </span>
                        <svg
                          className="h-7 w-7"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blue-200 hover:text-blue-100 dark:text-zinc-900"
                        href="#"
                      >
                        <span className="sr-only dark:text-zinc-900">
                          GitHub
                        </span>
                        <svg
                          className="h-7 w-7"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blue-200 hover:text-blue-100 dark:text-zinc-900"
                        href="#"
                      >
                        <span className="sr-only">Twitter</span>
                        <svg
                          className="h-7 w-7"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact form */}
                <div className="py-10 px-6 dark:border-zinc-700/40 sm:px-10 lg:col-span-2 xl:p-12 ">
                  <h3 className="text-warm-gray-900 text-lg font-medium dark:text-zinc-100">
                    Send me a message
                  </h3>
                  <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                  >
                    <div>
                      <label
                        htmlFor="first-name"
                        className="text-warm-gray-900 block text-sm font-medium dark:text-zinc-100"
                      >
                        First name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="user-name"
                          required
                          id="first-name"
                          autoComplete="given-name"
                          className="border-warm-gray-300 text-warm-gray-900 block w-full rounded-md py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-zinc-200"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="text-warm-gray-900 block text-sm font-medium dark:text-zinc-200"
                      >
                        Last name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="user-last-name"
                          required
                          id="last-name"
                          autoComplete="family-name"
                          className="border-warm-gray-300 text-warm-gray-900 block w-full rounded-md py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-warm-gray-900 block text-sm font-medium dark:text-zinc-100"
                      >
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="user-email"
                          required
                          type="email"
                          autoComplete="email"
                          className="border-warm-gray-300 text-warm-gray-900 block w-full rounded-md py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <label
                          htmlFor="phone"
                          className="text-warm-gray-900 block text-sm font-medium dark:text-zinc-100"
                        >
                          Phone
                        </label>
                        <span
                          id="phone-optional"
                          className="text-warm-gray-500 text-sm dark:text-zinc-100"
                        >
                          Optional
                        </span>
                      </div>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="user-phone"
                          id="phone"
                          autoComplete="tel"
                          className="border-warm-gray-300 text-warm-gray-900 block w-full rounded-md py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          aria-describedby="phone-optional"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="subject"
                        className="text-warm-gray-900 block text-sm font-medium dark:text-zinc-100"
                      >
                        Subject
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="subject"
                          required
                          id="subject"
                          className="border-warm-gray-300 text-warm-gray-900 block w-full rounded-md py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label
                          htmlFor="message"
                          className="text-warm-gray-900 block text-sm font-medium dark:text-zinc-100"
                        >
                          Message
                        </label>
                        <span
                          id="message-max"
                          className="text-warm-gray-500 text-sm dark:text-zinc-100"
                        >
                          Max. 500 characters
                        </span>
                      </div>
                      <div className="mt-1">
                        <textarea
                          id="message"
                          required
                          name="message"
                          rows={4}
                          className="border-warm-gray-300 text-warm-gray-900 block w-full rounded-md py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          aria-describedby="message-max"
                          defaultValue={''}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2 sm:flex sm:justify-end">
                      <button
                        type="submit"
                        className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}
