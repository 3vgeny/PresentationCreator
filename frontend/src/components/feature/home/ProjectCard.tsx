import { Box, Button, Card, Flex, Heading, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import AlertDialogBox from './AlertDialogBox';
import ThumbnailPreview from './ThumbnailPreview';
import { themes } from '@/lib/constants';
import { timeAgo } from '@/lib/utils';
import { useSlideStore } from '@/store/useSlideStore';
import { ProjectT } from '@/types/projects.type';

type Props = {
  project: ProjectT
  themeName: string
}

const ProjectCard = ({ project, themeName }: Props) => {
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const { setSlides } = useSlideStore();
  const router = useRouter();

  const handleNavigation = () => {
    setSlides(JSON.parse(JSON.stringify(project.slides)));
    router.push(`/presentation/${project.id}`);
  };

  const theme = themes.find((theme) => theme.name === themeName) || themes[0];

  return (
    <Card
      width={'full'}
      display={'flex'}
      height={'250px'}
      flexDirection={'column'}
      padding={3}
      transition={'colors 0.5s ease-in-out'}
      _hover={
        !project.isDeleted ? {
          backgroundColor: 'gray.100',
        } : {}
      }
      _hidden={{
        opacity: 0,
      }}
      _focusVisible={{
        opacity: 1,
        transition: 'opacity 0.5s ease-in-out',
      }}
      gap={4}
    >
      <Box
        position={'relative'}
        overflow={'hidden'}
        cursor={'pointer'}
        height={'full'}
        onClick={handleNavigation}
      >
        <ThumbnailPreview
          theme={theme}
          slide={JSON.parse(JSON.stringify(project.slides))?.[0]}
        />
      </Box>
      <Box width={'full'}>
        <Box>
          <Heading
            as={'h3'}
            size={'sm'}
          >{project.title}</Heading>
          <Flex
            width={'full'}
            justify={'space-between'}
            align={'center'}
            gap={2}
          >
            <Text fontSize={'sm'}>
              {timeAgo(project.createdAt)}
            </Text>
            {project.isDeleted ? (
              <AlertDialogBox
                loading={loading}
                description="Вы уверены, что хотите восстановить проект?"
                open={open}
                handleOpen={(v: boolean) => setOpen(v)}
                onClick={() => null}
              >
                <Button
                  size="sm"
                  isDisabled={loading}
                  variant={'outline'}
                  onClick={() => setOpen(true)}
                >
                  Востановить
                </Button>
              </AlertDialogBox>
            ) : (
              <AlertDialogBox
                loading={loading}
                description="Вы уверены, что хотите удалить проект?"
                open={open}
                handleOpen={(v: boolean) => setOpen(v)}
                onClick={() => null}
              >
                <Button
                  size="sm"
                  isDisabled={loading}
                  variant={'outline'}
                  onClick={() => setOpen(true)}
                >
                  Удалить
                </Button>
              </AlertDialogBox>
            )}
          </Flex>
        </Box>
      </Box>
    </Card>
  );
};

export default ProjectCard;