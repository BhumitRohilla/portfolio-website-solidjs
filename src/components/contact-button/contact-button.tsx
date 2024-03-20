import { type JSX } from 'solid-js'

interface ContactButtonInterface {
  src: string
  title: string
  colors: [string, string]
}

export const ContactButton = (props: ContactButtonInterface): JSX.Element => {
  const { src, title, colors } = props;
  const gradient = `from-[${colors[0]}] to-[${colors[1]}]`;
  console.log(gradient);
  return (
        <button class={`contact-button relative rounded-md w-full h-full items-center bg-gradient-to-tr  ${gradient}`}>
            <div class='	absolute left-[2px] top-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)] z-0 bg-black rounded-md'></div>
            <div class='z-10 flex relative p-2'>
              <img src={src} alt="" />
              <p class='flex-grow-[1]'>{title}</p>
            </div>
        </button>
  )
}
