import { createDOM } from '@builder.io/qwik/testing'
import AppImage from '../src/components/AppImage'

test('[Component AppImage]: Should return 28', async () => {
  const { render, screen } = await createDOM()

  await render(
    <AppImage src='example.png' alt='description' width={28} height={28} />,
  )
  const image = screen.querySelector('img') as HTMLImageElement

  expect(image.width).toBe(28)
  expect(image.height).toBe(28)
})

test('[Component AppImage]: Should return description', async () => {
  const { render, screen } = await createDOM()

  await render(
    <AppImage src='example.png' alt='description' width={28} height={28} />,
  )
  const image = screen.querySelector('img') as HTMLImageElement

  expect(image.alt).toBe('description')
  expect(image.alt).not.toBe('description2')
})
