import Projects from '@/components/feature/home/Projects';
import AppLayout from '@/components/layout/AppLayout';
import { projects } from '@/mocks/project.mocks';

export default function Home() {
  return (
    <AppLayout>
      <Projects projects={projects}/>
    </AppLayout>
  );
}
