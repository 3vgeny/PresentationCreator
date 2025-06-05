import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';
import React from 'react';

type Props = {
  children: React.ReactNode
  className?: string;
  description?: string
  loading?: boolean
  onClick?: () => void
  open: boolean
  handleOpen?: (v: boolean) => void
}

const AlertDialogBox = ({ children, className, description, loading, onClick, open, handleOpen }: Props) => {
  //  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef(null);

  return (
    <>
      {children}

      <AlertDialog
        isOpen={open}
        leastDestructiveRef={cancelRef}
        onClose={() => null}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader
              fontSize="lg"
              fontWeight="bold"
            >
              Вы уверены?
            </AlertDialogHeader>

            <AlertDialogBody>
              {description}
            </AlertDialogBody>

            <AlertDialogFooter
              flexDir={'column'}
              gap={2}
            >
              <Button
                width={'full'}
                isLoading={loading}
                onClick={onClick}
                colorScheme="blue"
              >
                Сохранить
              </Button>
              <Button
                width={'full'}
                onClick={() => handleOpen?.(false)}
              >
                Отменить
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default AlertDialogBox;