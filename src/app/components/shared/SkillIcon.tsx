import Card from '../../components/ui/Card'
import { Skill } from '../../data/skills'

interface SkillIconProps {
  skill: Skill
}

export default function SkillIcon({ skill }: SkillIconProps) {
  const Icon = skill.icon
  
  return (
    <Card className="text-center hover:scale-105 transition-transform">
      <div className="flex flex-col items-center">
        <div className="text-4xl mb-3 text-primary">
          <Icon />
        </div>
        <h3 className="font-semibold">{skill.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {skill.level}
        </p>
      </div>
    </Card>
  )
}