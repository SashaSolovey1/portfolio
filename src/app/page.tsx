import { ContactsSection } from '@/components/sections/contacts'
import { HeroSection } from '@/components/sections/hero'
import { NavigationSection } from '@/components/sections/navigation'
import { ProjectsSection } from '@/components/sections/projects'
import { SkillsSection } from '@/components/sections/skills'
import { GridWrapper } from '@/components/wrappers/grid-wrapper'

export default function Home() {
	return (
		<main className='min-h-screen bg-black overflow-x-hidden'>
			<GridWrapper className='relative'>
				<div className='max-w-7xl mx-auto w-full px-2'>
					<NavigationSection />
					<HeroSection />
				</div>
			</GridWrapper>

			<SkillsSection />
			<ProjectsSection />
			<ContactsSection />
		</main>
	)
}
