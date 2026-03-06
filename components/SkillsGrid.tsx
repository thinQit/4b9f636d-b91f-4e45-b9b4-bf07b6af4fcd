"use client";

interface SkillCategory {
  category: string
  skills: string[]
}

interface SkillsGridProps {
  items: SkillCategory[]
}

export default function SkillsGrid({
  items = [
    { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', skills: ['Node.js', 'Express', 'PostgreSQL', 'Prisma'] },
    { category: 'Tools', skills: ['Figma', 'Vercel', 'GitHub Actions', 'Analytics'] },
  ],
}: Partial<SkillsGridProps>) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <div key={item.category} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-[#1A1A2E]">{item.category}</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {item.skills.map((skill) => (
              <li key={skill}>• {skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
