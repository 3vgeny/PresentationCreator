import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import DndProvider from 'react-dnd';
import Layout from '@/components/feature/presentation/layout';
import { useSlideStore } from '@/store/useSlideStore';

const PresentationPage = () => {
  const { currentThema, setCurrentThema, project, setProject, slides, setSlides } = useSlideStore();

  const params = useParams();
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {

  }, []);

  return (
    <DndProvider>index</DndProvider>
  );
};

export default PresentationPage;