import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import CreateAI from '@/components/feature/create-page/CreateAI';
import CreatePage from '@/components/feature/create-page/CreatePage';
import ScratchPage from '@/components/feature/create-page/ScratchPage';
import AppLayout from '@/components/layout/AppLayout';
import usePropmtStore from '@/store/usePropmtStore';

const Page = () => {
  const { page, setPage } = usePropmtStore();
  const router = useRouter();

  const handleBack = () => {
    setPage('create');
  };

  const handleSelectOption = (option: string) => {
    if (option === 'teplate') {
      router.push('/templates');
    } else if (option === 'create-scratch') {
      setPage('create-scratch');
    } else {
      setPage('creative-ai');
    }
  };

  const renderStep = () => {
    switch (page) {
    case 'create':
      return <CreatePage onSelectption={handleSelectOption}/>;
    case 'creative-ai':
      return <CreateAI onBack={handleBack}/>;
    case 'create-scratch':
      return <ScratchPage onBack={handleBack}/>;
    default:
      return null;
    }
  };

  useEffect(() => {
    setPage('create');
  }, [setPage]);

  return (
    <AppLayout>
      <Box
        width={'full'}
        height={'full'}
      >{renderStep()}</Box>
    </AppLayout>
  );
};

export default Page;