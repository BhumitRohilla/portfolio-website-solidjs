import { createSignal, onMount, type JSXElement } from 'solid-js'
import { type JSX } from 'solid-js/jsx-runtime'

interface SingleElementInetrface {
  title: string
  content: JSXElement,
  titleClass: string
}

interface HorizontalTabProps {
  elements: SingleElementInetrface[]
}

export const HorizontalTab = (props: HorizontalTabProps): JSX.Element => {
  const { elements } = props
  const [selectedCompay, setSelectedCompany] = createSignal<number>(0)
  let selectedElementRef: HTMLDivElement | undefined
  console.log(selectedCompay)
  let selectionHighlighter: HTMLDivElement | undefined;
  onMount(() => {
    console.log('test')
    console.log(selectedElementRef)
    if (selectedElementRef !== undefined) {
      console.log('selected element')
      selectedElementRef.dispatchEvent(new Event('click', {
        bubbles: true,
        cancelable: true
      }))
    }
  })
  return (
        <>
            {/* eslint-disable @typescript-eslint/no-non-null-assertion */}
            <div class='flex relative justify-start gap-2'>
                <div class='absolute top-0 w-[50px] bg-[#333232] rounded-md h-[20px] z-[5] transition-all duration-300' ref={selectionHighlighter} />
            {
                elements.map((elements, index) => {
                  return (
                        <div
                          ref={el => {
                            if (selectedElementRef === undefined) {
                              selectedElementRef = el
                            }
                          }}
                          class={`relative px-4 py-2 z-10 bg-transparent`} onclick={
                            (event) => {
                              console.log(Math.floor(event.target.getBoundingClientRect().left))
                              if (selectionHighlighter) {
                                selectionHighlighter.style.left = `${Math.floor(event.target.getBoundingClientRect().left - (event?.target?.parentElement?.getBoundingClientRect()?.left ?? 0))}px`
                                selectionHighlighter.style.width = `${Math.floor(event.target.getBoundingClientRect().width)}px`
                                selectionHighlighter.style.height = `${Math.floor(event.target.getBoundingClientRect().height)}px`
                              }
                              setSelectedCompany(index)
                            }
                        }>
                            {elements.title}
                        </div>
                  )
                })
            }
            </div>
            <div>
                {elements[selectedCompay()]?.content ?? <div>InvalidSelection</div>}
            </div>
        </>
  )
}
