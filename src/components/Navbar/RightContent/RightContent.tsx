import { auth } from '@/src/firebase/clientApp';
import { Button, Flex } from '@chakra-ui/react';
import { signOut, User } from 'firebase/auth';
import React, { Fragment } from 'react';
import AuthModal from '../../Modal/Auth/AuthModal';
import AuthButtons from './AuthButtons';
import Icons from './Icons';
import UserMenu from './UserMenu';

type RightContentProps = {
    user?: User | null;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {

    return (
        <Fragment>
            <AuthModal />
            <Flex justify="center" align="center">
                {user ? <Icons /> : <AuthButtons />}
                <UserMenu user={user} />
            </Flex>
        </Fragment>
    )
}
export default RightContent;