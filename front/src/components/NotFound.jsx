import { Box, Heading, Text } from "@chakra-ui/layout";
import React from "react";

const NotFound = () => {
  return (
    <Box textAlign="center" py="10">
      <Heading as="h2" size="xl" mb="4">
        Página no encontrada
      </Heading>
      <Text fontSize="lg" color="gray.600">
        Lo sentimos, la página que estás buscando no existe.
      </Text>
    </Box>
  );
};

export default NotFound;
