import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import 'lib/supabase'

export default component$(() => {
  return <h1 class='text-xl'>Hello qwik</h1>
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
