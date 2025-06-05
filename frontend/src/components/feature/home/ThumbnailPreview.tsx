import { Box, Flex, Image } from '@chakra-ui/react';
import { Slide, Theme } from '@/types/slide.type';

type Props = {
  slide: Slide;
  theme: Theme;
}

const ThumbnailPreview = ({ slide, theme }: Props) => {
  //WIP: add a preview of the slide

  return (
    <Box
      width={'full'}
      height={'full'}
      borderRadius={'lg'}
      overflow={'hidden'}
      transition={'all'}
      transitionDuration={'0.5s'}
      sx={{
        fontFamily: theme.fontFamily,
        color: theme.fontColor,
        backgroundColor: theme.slideBackgroundColor,
        backgroundImage: theme.gradientBackground,
      }}
    >
      {
        slide ? (
          <Box
            scale={0.5}
            width={'200%'}
            height={'200%'}
            overflow={'hidden'}
          >
            This is slide
          </Box>
        ) : (
          <Flex
            width={'100%'}
            height={'100%'}
            bg={'gray.300'}
            justify={'center'}
            align={'center'}
          >
            <Image
              width={6}
              height={6}
            />
          </Flex>
        )
      }
    </Box>
  );
};

export default ThumbnailPreview;