import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import LoginTab from './LoginTab';
import RegisTab from './RegisTab';

type Props = {
  isDisplay?: boolean
}

const AuthModal = ({ isDisplay }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {isDisplay ? (
        <Button
          onClick={onOpen}
          colorScheme="blue"
        >Войти</Button>
      ) : null}

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="scale"
      >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(3px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalBody padding={8}>
            <Tabs>
              <TabList border={'none'}>
                <Tab
                  width={'50%'}
                  _selected={{ color: 'white', bg: 'blue.500' }}
                >Войти</Tab>
                <Tab
                  width={'50%'}
                  _selected={{ color: 'white', bg: 'blue.500' }}
                >Регистрация</Tab>
              </TabList>

              <TabPanels>
                <TabPanel p={0}>
                  <LoginTab/>
                </TabPanel>
                <TabPanel p={0}>
                  <RegisTab/>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;