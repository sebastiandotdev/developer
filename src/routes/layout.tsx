import { component$, Slot } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import type { RequestHandler } from '@builder.io/qwik-city'
import qwikSvg from '../media/svg/qwik.svg'
import githubPng from '../media/github.png'

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  })
}

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  }
})

export default component$(() => {
  return (
    <>
      <main class='min-h-[calc(100vh-var(--size))]'>
        <Slot />
      </main>
      <footer class='w-11/12 max-w-5xl mx-auto mt-24 sm:!mt-28 mb-8 flex items-center justify-between'>
        <span class='flex items-center gap-4'>
          <a
            href='https://qwik.builder.io'
            class='flex gap-2 items-center font-poppins bg-white rounded-md p-1.5'
          >
            <img src={qwikSvg} alt='Nextjs' width={20} height={20} />
            Made with Qwik
          </a>
          <a
            class='hover:underline flex gap-2 items-center font-poppins'
            href='https://github.com/network'
          >
            Source
            <img src={githubPng} alt='Github' width={20} height={20} />
          </a>
        </span>

        <a
          href='https://github.com/castrogarciajs'
          target='_blank'
          class='text-gray-600 hover:underline font-poppins'
        >
          castrogarciajs
        </a>
      </footer>
    </>
  )
})
