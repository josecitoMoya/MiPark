import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
  Text,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { convertDateHour, isOneHourBefore } from "../utils";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CardReserve = ({ reserve }) => {
  const toast = useToast();
  const user = useSelector((state) => state.user);
  const [updateReserve, setUpdateReserve] = useState(reserve);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const address = reserve.parking.address;
  const email = user.email;
  const handlerCancel = () => {
    const date = new Date();
    const reservedDate = convertDateHour(reserve.date, reserve.hour);

    if (isOneHourBefore(reservedDate, date)) {
      axios
        .put(
          `http://localhost:8080/api/reserves/state:${reserve.id}?state=cancelled`,
          {
            withCredentials: true,
            email: email,
            address: address,
            date: reserve.date,
            hour: reserve.hour,
          }
        )
        .then(({ data }) => data)
        .then(({ message, data }) => {
          setUpdateReserve(data);
        });
      toast({
        title: "Reserve delete.",
        description: `Email sent with info: ${user.email}`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Can't delete reservation",
        description: "You can only cancel an hour before",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      m={"40px"}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody di>
          <Heading size="md">{updateReserve.parking.address}</Heading>
          <Text>Date:{updateReserve.date}</Text>
          <Text>Time: {updateReserve.hour} hs </Text>
        </CardBody>

        <CardFooter>
          {updateReserve.state === "reserved" && (
            <>
              <Button onClick={onOpen}>Cancelar Reserva</Button>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Cancelar reserva</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text>¿Estas seguro de cancelar la reserva?</Text>
                    <Text>
                      Nos complace informarte que se realizará un reembolso por
                      el importe de tu compra. En breve, recibirás un correo
                      electrónico a {user.email} con los detalles sobre el
                      proceso de reembolso y los pasos a seguir. Asegúrate de
                      revisar tu bandeja de entrada y, si no encuentras el
                      correo electrónico, verifica tu carpeta de spam.
                    </Text>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Close
                    </Button>
                    <Button onClick={handlerCancel}>Confirm</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </>
          )}
          {updateReserve.state === "cancelled" && (
            <Popover>
              <PopoverTrigger>
                <Button color={"red"}>Cancelled</Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Reserve Cancelled</PopoverHeader>
                <PopoverBody>The reservation was canceled</PopoverBody>
              </PopoverContent>
            </Popover>
          )}
        </CardFooter>
      </Stack>
    </Card>
  );
};
export default CardReserve;
