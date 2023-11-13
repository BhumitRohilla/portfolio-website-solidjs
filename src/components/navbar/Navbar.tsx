import { type JSX } from 'solid-js/jsx-runtime'
import blackSun from '../../assets/black-sun.svg'
import whiteSun from '../../assets/white-sun.svg'
interface navbarProps {
  class?: string
  style?: Record<string, string>
}

export const Navbar = (props: navbarProps): JSX.Element => {
  return (
        <div class={props.class}>
            <div class='flex justify-between w-full h-[126px] items-center'>
                <div>
                    <h1 class='text-[24px]'>BR.</h1>
                </div>
                <div class='flex flex-row min-w-fit justify-evenly gap-5 items-center text-[18px]'>
                  <div>Pojects</div>
                  <div>Resume</div>
                  <div>Contact</div>
                  <div class='w-full hidden'>
                    <img class='block' src={blackSun} alt="Black Sun" width="24" height="24" />
                  </div>
                  <div class='w-full pr-3'>
                    <img class='block' src={whiteSun} alt="White Sun" width="24" height="24" />
                  </div>
                </div>
            </div>
        </div>
  )
}
