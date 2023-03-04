import { SearchIcon } from '@chakra-ui/icons';
import { border, Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';

type SearchInputProps = {
    // user:
};

const SearchInput: React.FC<SearchInputProps> = () => {

    return (
        <Flex flexGrow={1} mr={2} align="center">
            <InputGroup>
                <InputLeftElement pointerEvents="none">
                    <SearchIcon color="gray.400" mb={1} />
                </InputLeftElement>
                <Input placeholder='Search Reddit' fontSize='10pt' _placeholder={{ color: "gray.500" }} _hover={{ bg: "white", border: "1px solid", borderColor: "blue.500" }} _focus={{ outline: "none", border: "1px solid", borderColor: "blue.500" }} height="34px" bg="gray.50" />
            </InputGroup>
        </Flex>
    )
}
export default SearchInput;