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


export function convertDateTimeFormat(dateTimeString) {
  const dateTime = new Date(dateTimeString);

  const year = dateTime.getFullYear();
  const month = String(dateTime.getMonth() + 1).padStart(2, '0'); // Os meses começam do zero, então precisamos adicionar 1 e garantir dois dígitos
  const day = String(dateTime.getDate()).padStart(2, '0');
  const hours = String(dateTime.getHours()).padStart(2, '0');
  const minutes = String(dateTime.getMinutes()).padStart(2, '0');

  const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}:00.000Z`;

  return formattedDateTime;
}

export function checkAvailability(appointments, dateToCheck) {
  const dateToCheckFormatted = new Date(dateToCheck).getTime();

  for (const appointment of appointments) {
    const appointmentDate = new Date(appointment.date).getTime();
    const diffInMinutes = Math.abs((dateToCheckFormatted - appointmentDate) / (1000 * 60));

    if (diffInMinutes <= 30) {
      return false;
    }
  }

  return true;
}

export function isBetweenWorkingHours(dateTimeString) {
  const dateTime = new Date(dateTimeString);

  // Obtendo a hora do objeto Date ajustada para UTC
  const hoursUTC = dateTime.getUTCHours();
  console.log("hoursUTC", hoursUTC);
  // Verificando se a hora ajustada está entre 8:00h e 18:00h
  return hoursUTC >= 8 && hoursUTC < 18;
}

