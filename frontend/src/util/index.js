import { useToast } from "@chakra-ui/react";

export const useCustomToast = () => {
  const toast = useToast();

  return (title, status) => {
    toast({
      title: title,
      status: status,
      duration: 2000,
      isClosable: true,
    });
  };
};

export function convertDateTimeFormat(dateTimeString) {
  const dateTime = new Date(dateTimeString);

  const year = dateTime.getFullYear();
  const month = String(dateTime.getMonth() + 1).padStart(2, "0"); // Os meses começam do zero, então precisamos adicionar 1 e garantir dois dígitos
  const day = String(dateTime.getDate()).padStart(2, "0");
  const hours = String(dateTime.getHours()).padStart(2, "0");
  const minutes = String(dateTime.getMinutes()).padStart(2, "0");

  const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}:00.000Z`;

  return formattedDateTime;
}

export function checkAvailability(appointments, dateToCheck) {
  const dateToCheckFormatted = new Date(dateToCheck).getTime();

  for (const appointment of appointments) {
    const appointmentDate = new Date(appointment.date).getTime();
    const diffInMinutes = Math.abs(
      (dateToCheckFormatted - appointmentDate) / (1000 * 60)
    );

    if (diffInMinutes <= 30) {
      return false;
    }
  }

  return true;
}

export function isBetweenWorkingHours(dateTimeString) {
  const dateTime = new Date(dateTimeString);
  const hoursUTC = dateTime.getUTCHours();
  return hoursUTC >= 8 && hoursUTC < 18;
}

export function formatDate(dateString) {
  let date = new Date(dateString);

  let day = ("0" + date.getUTCDate()).slice(-2);
  let month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
  let year = date.getUTCFullYear();
  let hours = ("0" + date.getUTCHours()).slice(-2);
  let minutes = ("0" + date.getUTCMinutes()).slice(-2);

  let dateFormat =
    day + "/" + month + "/" + year + " - " + hours + ":" + minutes;

  return dateFormat;
}

export function findBarberNameById(barber_id, barbers) {
  for (let i = 0; i < barbers.length; i++) {
    if (barbers[i].id === barber_id) {
      return barbers[i].name;
    }
  }
  return null;
}

export function checkIntervalLessThanTwoHours(time) {
  // Convert the provided time to a Date object
  const providedTime = new Date(time);

  // Get the current time in São Paulo timezone
  const currentTime = new Date().toLocaleString("en-US", {
    timeZone: "America/Sao_Paulo",
  });

  // Convert the current time to a Date object
  const currentTimeInSaoPaulo = new Date(currentTime);

  // Check if the provided date is the same as the current date
  const isSameDate =
    providedTime.toDateString() === currentTimeInSaoPaulo.toDateString();

  if (!isSameDate) {
    return false; // If dates are different, interval cannot be less than 2 hours
  }

  // Calculate the difference in hours
  const timeDifferenceInHours =
    currentTimeInSaoPaulo.getHours() -
    providedTime.getHours() +
    (currentTimeInSaoPaulo.getMinutes() - providedTime.getMinutes()) / 60;

  // Check if the difference is less than 2 hours
  if (timeDifferenceInHours < 2) {
    return true;
  } else {
    return false;
  }
}

export function lessThanTwoHours(dateHours) {
  const dateHoursObj = new Date(dateHours);

  const dateHoursCurrent = new Date();

  const differenceInMilliseconds = dateHoursCurrent - dateHoursObj;

  const HoursDifference = differenceInMilliseconds / (1000 * 60 * 60);

  return HoursDifference < 2;
}

export function sortAppointments(schedules) {
  return schedules.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    if (dateA > dateB) {
      return 1;
    } else if (dateA < dateB) {
      return -1;
    }

    const hoursA = dateA.getHours() * 60 + dateA.getMinutes();
    const hoursB = dateB.getHours() * 60 + dateB.getMinutes();

    if (hoursA < hoursB) {
      return 1;
    } else if (hoursA > hoursB) {
      return -1;
    }
    return 0;
  });
}
