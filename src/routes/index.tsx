import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import rocketSvg from '../media/svg/rocket.svg'
import bellSvg from '../media/svg/bell.svg'
import githubPng from '../media/github.png'

export default component$(() => {
  return (
    <>
      <header class='flex items-center justify-end h-[--size] px-4 sm:px-6 lg:px-8 max-w-7xl'>
        <a href='#' class='pt-6'>
          <img
            src={githubPng}
            alt='Github profile castrogarciajs'
            width={28}
            height={28}
          />
        </a>
      </header>
      <section class='py-24 sm:py-32 md:py-40 relative'>
        <article class='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col'>
          <div class='relative z-[1] text-center'>
            <h1 class='text-5xl font-bold tracking-tight text-black sm:text-7xl font-poppins'>
              The Intuitive
              <br />
              <span class='text-aqua block lg:inline-block'>
                Social Developer
              </span>
            </h1>
            <p class='mt-6 text-lg tracking-tight'>
              The red social Open Sources Built with love and nostalgia 🐱
            </p>
            <div class='mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center'>
              <a
                href='#'
                class='rounded-md text-md gap-x-2.5 px-4 py-2.5 shadow-sm text-white bg-aqua inline-flex items-center font-poppins'
              >
                <img src={rocketSvg} alt='rocket' width={28} height={28} />
                Sing In
              </a>
              <a
                href='#'
                class='text-base gap-x-2.5 px-4 py-2.5 shadow-md inline-flex items-center font-poppins rounded-md'
              >
                <img src={bellSvg} alt='bell' width={28} height={28} />
                Sing Up
              </a>
            </div>
          </div>
        </article>
      </section>
    </>
  )
})

export const head: DocumentHead = {
  title: 'Welcome to Social Developer',
  meta: [
    {
      name: 'description',
      content: 'The social developer red social for developer.',
    },
  ],
}
