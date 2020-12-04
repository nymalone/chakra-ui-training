import React, { useState, useCallback } from "react";
import {
  Flex,
  Box,
  Heading,
  Input,
  Button,
  List,
  ListItem,
  Avatar,
  Divider,
  Text,
  Badge,
} from "@chakra-ui/react";

import api from '../../services/api';

const Home = () => {
  const [username, setUserName] = useState("");
  const [infoUser, setInfoUser] = useState(null);
  const [repo, setRepo] = useState(null);


  const handleSearch = useCallback(async () => {
    if(username) {
     const { data } = await api.get(`users/${username}`)
     console.log(data)
    }
  }, [username])

  return (
    <Flex flexDir="column" alignItems="center" paddingX={10} paddingY={5}>
      <Box width="480px">
        <Flex flexDir="column" alignItems="center">
          <Heading color="#000050">Listagem de repositórios</Heading>

          <Input
            type="text"
            placeholder="username"
            marginTop={4}
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Button type="button" marginTop={6} onClick={handleSearch}>
            Pesquisar
          </Button>
        </Flex>

        <Flex flexDir="column" marginTop={10}>
          <List>
            <ListItem marginBottom={4}>
              <Box bg="#f8524b" padding={6} rounded="lg" color="#000050">
                <Flex alignItems="center" marginBottom={3}>
                  <Avatar
                    size="lg"
                    marginRight={2}
                    name="Nykolle Malone"
                    src="https://github.com/nymalone.png"
                  />
                  <Heading fontSize="2xl">Nykolle Malone</Heading>
                </Flex>
                <Divider marginBottom={2} />

                <Text>Descrição</Text>
              </Box>
            </ListItem>

            <ListItem marginBottom={4}>
              <Box bg="#f8524b" padding={6} rounded="lg" color="#000050">
                <Heading fontSize="2xl" marginBottom={2}>
                  Título teste{" "}
                </Heading>
                <Divider marginBottom={2} />
                <Text marginBottom={2}>Descrição</Text>
                <Divider marginBottom={2} />
                <Badge
                  variante="solid"
                  variantColor="#fff"
                  color="#000050"
                  rounded="lg"
                  fontSize="xs"
                >
                  Javascript
                </Badge>
              </Box>
            </ListItem>
          </List>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Home;
