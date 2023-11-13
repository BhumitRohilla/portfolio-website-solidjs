import { type JSX } from 'solid-js'

interface ContactButtonInterface {
  src: string
  title: string
}

export const ContactButton = (props: ContactButtonInterface): JSX.Element => {
  const { src, title } = props
  return (
        <button class='border-2 w-full h-full rounded-sm flex items-center'>
            <img src={src} alt="" />
            <p class='flex-grow-[1]'>{title}</p>
        </button>
  )
}
