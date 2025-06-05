import { AddIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import React from 'react';

type Props = {
  onAddCard: () => void
}

const AddCardButton = ({ onAddCard }: Props) => {
  const [showGap, setShowGap] = React.useState(false);

  return (
    <Flex
      width={'full'}
      height={showGap ? '2rem' : '0.5rem'}
      onMouseEnter={() => setShowGap(true)}
      onMouseLeave={() => setShowGap(false)}
      transition={'height 0.5s ease-in-out'}
    >
      {
        showGap ? (
          <Flex
            width={'full'}
            gap={3}
            alignItems={'center'}
            justify={'space-between'}
          >
            <Box
              minW={'40%'}
              height={'1px'}
              backgroundColor={'blackAlpha.900'}
            ></Box>
            <IconButton
              isRound
              size={'xs'}
              backgroundColor={'blackAlpha.900'}
              color={'white'}
              aria-label="add"
              icon={<AddIcon/>}
              onClick={onAddCard}
            />
            <Box
              minW={'40%'}
              height={'1px'}
              backgroundColor={'blackAlpha.900'}
            ></Box>
          </Flex>
        ) : null
      }
    </Flex>
  );
};

export default AddCardButton;