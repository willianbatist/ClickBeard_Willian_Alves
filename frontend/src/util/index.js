import { useToast } from "@chakra-ui/react";

export const useCustomToast = () => {
  const toast = useToast();

  return (title, status) => {
    toast({
      title: title,
      status: status,
      duration: 9000,
      isClosable: true,
    });
  };
};

