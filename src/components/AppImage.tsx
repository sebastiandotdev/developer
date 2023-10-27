import { component$ } from '@builder.io/qwik'

interface Source {
  src: string
  alt: string
  width: number
  height: number
}

export default component$<Source>((props) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  )
})
