import { auth } from '@/src/firebase/clientApp';
import { Button, Flex } from '@chakra-ui/react';
import { signOut } from 'firebase/auth';
import React, { Fragment } from 'react';
import AuthModal from '../../Modal/Auth/AuthModal';
import AuthButtons from './AuthButtons';

type RightContentProps = {
    user: any;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {

    return (
        <Fragment>
            <AuthModal />
            <Flex justify="center" align="center">
                {user ? <Button onClick={() => signOut(auth)}>Logout</Button> : <AuthButtons />}
            </Flex>
        </Fragment>
    )
}
export default RightContent;