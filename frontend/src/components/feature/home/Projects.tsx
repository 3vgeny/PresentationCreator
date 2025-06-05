import { Grid, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import ProjectCard from './ProjectCard';
import { ProjectT } from '@/types/projects.type';

type Props = {
  projects: ProjectT[]
}

const Projects = ({ projects }: Props) => {
  return (
    <SimpleGrid
      width={'full'}
      columns={[1,2,4]}
      minChildWidth={'300px'}
      gap={4}
      _hidden={{
        opacity: 0,
      }}
      _visited={{
        opacity: 1,
        transition: 'opacity 0.5s ease-in-out',
      }}
    >
      {
        projects.map((project) => (<ProjectCard
          key={project.id}
          project={project}
          themeName={project.themeName}
        />))
      }
    </SimpleGrid>
  );
};

export default Projects;