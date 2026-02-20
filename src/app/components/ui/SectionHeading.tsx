import { twMerge } from 'tailwind-merge'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  className?: string
}

export default function SectionHeading({ 
  title, 
  subtitle, 
  align = 'center',
  className = '' 
}: SectionHeadingProps) {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }
  
  return (
    <div className={twMerge('mb-12', alignments[align], className)}>
      <h2 className="heading-secondary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
    </div>
  )
}