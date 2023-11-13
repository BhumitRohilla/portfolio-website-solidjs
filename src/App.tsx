import { type JSX } from 'solid-js/jsx-runtime'
import './App.css'
import { Navbar } from '../src/components/navbar'
import { changeTheme, store } from './store'
// import { HorizontalTab } from './components/horizontal-tab'
// import { TabElement } from './components/tab-element/tab-element'
// import { ContactButton } from './components/contact-button'
// import githubSvg from './assets/Contacts/github.svg'
// import linkedinSvg from './assets/Contacts/linkedIn.svg'
// import mailSvg from './assets/Contacts/mail.svg'

const experience: Array<{ title: string, company: string, points: string[], startDate: Date, endDate: Date }> = [{
  title: 'Full Stack Web Developer',
  company: 'CodeQuotient',
  startDate: new Date('1/1/2023'),
  endDate: new Date('1/4/2023'),
  points: ['Test', 'Test2', 'Test3']
}]
const App = (): JSX.Element => {
  return (
    <div class=' xl:px-28 h-full'>
      <div class='text-[white] w-full h-full'>
        <section id='intro' class='text-[16px] min-h-[100vh]'>
          <Navbar class='xl:h-[123px]'/>
          <p class='text-xl lg:mt-48'>Hay, I'm</p>
          <h3 class='colored-text'>Bhumit Rohilla</h3>
          <p class='text-xl'>
            I'm a dedicated Full Stack Developer with a year of hands-on experience,
            and this is where my coding journey unfolds.
            From building web applications to honing my skills and tackling real-world challenges,
            I'm on a mission to keep growing in the dynamic and ever-evolving world of programming.
          </p>
          <div class='text-4xl mt-11'>Say hi
          </div>
        </section>
        {/* <section id='experience' class='h-full'>
          <p>EXPERIENCE</p>
          <HorizontalTab elements={
            experience.map(element => {
              return {
                title: element.company,
                content: <TabElement {...element}/>
              }
            })
          }
          />
        </section>
        <div class='w-full h-[1px] bg-[#c6c6c6]'></div>
        <section id='projects'>
          <h3>FEATURED PROJECTS</h3>
        </section>
        <div class='w-full h-[1px] bg-[#c6c6c6]'></div>
        <section>
          <div>
            <div class='grid grid-cols-4 gap-4'>
              <p class='flex-auto'>CONTACT</p>
              <ContactButton src={mailSvg} title='Email'/>
              <ContactButton src={linkedinSvg} title='LinkedIn'/>
              <ContactButton src={githubSvg} title='Github'/>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  )
}

export default App
