import { PhilosophicalSchool } from '../types/philosophy';
import { PhilosophyCard } from './PhilosophyCard';

interface PhilosophyGridProps {
  schools: PhilosophicalSchool[];
}

export function PhilosophyGrid({ schools }: PhilosophyGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
      {schools.map((school) => (
        <PhilosophyCard key={school.id} school={school} />
      ))}
    </div>
  );
}
