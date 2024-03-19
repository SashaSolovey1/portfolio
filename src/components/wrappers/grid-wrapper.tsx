import { cn } from '@/utils/cn'
import { ReactNode } from 'react'

export const GridWrapper = ({
	children,
	className,
}: Readonly<{ children: ReactNode; className: string }>) => {
	return <div className={cn('bg-grid-white/[0.05]', className)}>{children}</div>
}
