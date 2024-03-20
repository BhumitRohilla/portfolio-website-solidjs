import { type JSX } from 'solid-js/jsx-runtime'
import './App.css'
import { Navbar } from '../src/components/navbar'
import { TabElement } from './components/tab-element/tab-element'
import { HorizontalTab } from './components/horizontal-tab'
import { ContactButton } from './components/contact-button'
import githubSvg from './assets/Contacts/github.svg'
import linkedinSvg from './assets/Contacts/linkedIn.svg'
import mailSvg from './assets/Contacts/mail.svg'

const experience: Array<{ title: string, company: string, points: { title: string, details: string[] }[], startDate: Date, endDate: Date | null }> = [
	{
		title: 'Trainee',
		company: 'CodeQuotient',
		startDate: new Date('1 June 2023'),
		endDate: new Date('31 Dec  2023'),
		points: [
			{
				title: 'Express.js',
				details: [
					'Worked on different micro services'
				]
			}
		]
	}
	,
	{
		title: 'Software Development Engineer',
		company: 'CodeQuotient',
		startDate: new Date('1/1/2023'),
		endDate: null,
		points: [
			{
				title: 'Express.js',
				details: [
					'Worked on login micro service (session management for all other services)',
					'Worked on electron created a app where user can give tests.',
					'Worked on ci/cd for the app through github actions',
				]
			}
		]
	}
]
const App = (): JSX.Element => {
	return (
		<div class=' bg-[#111111]'>
			<div class='text-[white] h-full h-[100vh] xl:px-28' id='container'>
				<section id='intro' class='text-[16px] min-h-[100vh]'>
					<Navbar class='xl:h-[123px]' />
					<div>
						<p class='text-xl lg:mt-48'>Hay, I'm</p>
						<h3 class='colored-text'>Bhumit Rohilla</h3>
						<p class='text-xl'>
							I'm a dedicated Full Stack Developer with a year of hands-on experience,
							and this is where my coding journey unfolds.
							From building web applications to honing my skills and tackling real-world challenges,
							I'm on a mission to keep growing in the dynamic and ever-evolving world of programming.
						</p>
					</div>
					<div class='grid grid-cols-4 gap-4 flex-grow-[100%]'>
						<p class='flex-auto'>CONTACT</p>
						<ContactButton colors={['#000', '#fff']} src={mailSvg} title='Email' />
						<ContactButton colors={['red', 'green']} src={linkedinSvg} title='LinkedIn' />
						<ContactButton colors={['red', 'green']} src={githubSvg} title='Github' />
					</div>
				</section>
				<section id='experience' class='min-h-[100vh] p-3 pt-28'>
					<p class='text-4xl pb-7'>EXPERIENCE</p>
					<HorizontalTab elements={
						experience.map(element => {
							return {
								title: element.company,
								titleClass: '',
								content: <TabElement className='px-9 pt-6' {...element} />
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
					</div>
				</section>
			</div>
		</div>
	)
}

export default App
