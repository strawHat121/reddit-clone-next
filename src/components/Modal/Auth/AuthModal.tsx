import { auth } from '@/src/firebase/clientApp';
import { Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react';
import React, { Fragment, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';
import AuthInputs from './AuthInputs';
import OAuthButtons from './OAuthButtons';
import ResetPassword from './ResetPassword';


const AuthModal: React.FC = () => {
    const [modalState, setModalState] = useRecoilState(authModalState);
    const [user, loading, error] = useAuthState(auth)

    const handleClose = () => {
        setModalState((prev) => ({
            ...prev,
            open: false,
        }));
    };

    useEffect(() => {
        if (user) handleClose();
    }, [user]);

    return <Fragment>
        <Modal isOpen={modalState.open} onClose={handleClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textAlign="center">
                    {modalState.view === "login" && "Login"}
                    {modalState.view === "signup" && "Sign Up"}
                    {modalState.view === "resetPassword" && "Reset Password"}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody display="flex" flexDirection="column" alignItems="center" justifyContent="center" pb={6}>
                    <Flex direction="column" align="center" justify="center" width="70%">
                        {modalState.view === "login" || modalState.view === "signup" ? (
                            <Fragment>
                                <OAuthButtons />
                                <Text color="gray.500" fontWeight="700">OR</Text>
                                <AuthInputs />
                            </Fragment>
                        ) : <ResetPassword />}
                        {/* <ResetPassword /> */}
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    </Fragment>
}
export default AuthModal;