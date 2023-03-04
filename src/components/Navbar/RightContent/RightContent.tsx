import { Flex } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import AuthModal from '../../Modal/Auth/AuthModal';
import AuthButtons from './AuthButtons';

type RightContentProps = {
    // user: any;
};

const RightContent: React.FC<RightContentProps> = () => {

    return (
        <Fragment>
            <AuthModal />
            <Flex justify="center" align="center">
                <AuthButtons />
            </Flex>
        </Fragment>
    )
}
export default RightContent;