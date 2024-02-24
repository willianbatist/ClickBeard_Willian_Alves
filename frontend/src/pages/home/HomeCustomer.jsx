/* eslint-disable react-hooks/exhaustive-deps */
import HeaderCustomer from "../../components/header/HeaderCustomer";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/contextProvider";
import { useNavigate } from "react-router-dom";
import { ContainerCustomer, ContainerSchedule } from "./homeCustomer.styles.js";
import { Select, Input, Button } from "@chakra-ui/react";
import { sendRequest, requestToken } from "../../services/index.js";
import { useForm } from "react-hook-form";
import {
  convertDateTimeFormat,
  checkAvailability,
  isBetweenWorkingHours,
} from "../../util/index.js";
import { useCustomToast } from "../../util";

function HomeCustomer() {
  const { user } = useContext(AppContext);
  const [customer, setCustomer] = useState();
  const [specialties, setSpecialties] = useState();
  const [specialty, setSpecialty] = useState("w");
  const [barbers, setBarbers] = useState();
  const [filterBarbers, setFilterBarbers] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingFilter, setIsLoadingFilter] = useState(true);
  const navigate = useNavigate();
  const customToast = useCustomToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function extractUniqueSpecialties(barbers) {
    const specialtiesSet = new Set();

    if (Array.isArray(barbers)) {
      barbers.forEach((barber) => {
        barber.specialties.forEach((specialty) => {
          specialtiesSet.add(specialty);
        });
      });
    }

    return Array.from(specialtiesSet);
  }

  const handleSpecialties = async () => {
    requestToken(user?.token);
    const getBarbers = await sendRequest("get", "/barber");
    setBarbers(getBarbers);
    const arraySpecialties = extractUniqueSpecialties(getBarbers);
    setSpecialties(arraySpecialties);
  };

  function filterBarbersBySpecialty(barbers, specialty) {
    const filteredBarbers = barbers.filter((barber) => {
      return barber.specialties.includes(specialty);
    });
    return filteredBarbers;
  }

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    if (user) {
      setCustomer(user);
    }
  }, []);

  useEffect(() => {
    handleSpecialties();
    setIsLoading(false);
  }, [customer]);

  useEffect(() => {
    if (specialty.length > 2) {
      const filt = filterBarbersBySpecialty(barbers, specialty);
      setFilterBarbers(filt);
      setIsLoadingFilter(false);
    }
  }, [specialty.length > 2 && specialty]);

  const onSubmit = async (data) => {
    try {
      const getScheduled = await sendRequest(
        "get",
        `/scheduledAppointment/${data.barber_id}`
      );
      if (getScheduled.length >= 1) {
        const convertedDateTime = convertDateTimeFormat(data.date);
        const isAvailable = checkAvailability(getScheduled, convertedDateTime);
        if (isAvailable && isBetweenWorkingHours(convertedDateTime)) {
          await sendRequest("post", `/scheduledAppointment`, {
            date: convertedDateTime,
            user_id: customer.id,
            barber_id: data.barber_id,
          });
          customToast("Agendado com sucesso", "success");
          navigate("/my-schedules");
        } else {
          customToast("Horário indisponível", "error");
        }
      }
      if (getScheduled.length < 1) {
        const convertedDateTime = convertDateTimeFormat(data.date);
        if (isBetweenWorkingHours(convertedDateTime)) {
          console.log("if 5");
          const getScheduled = await sendRequest(
            "post",
            `/scheduledAppointment`,
            {
              date: convertedDateTime,
              user_id: customer.id,
              barber_id: data.barber_id,
            }
          );
          customToast("Agendado com sucesso", "success");
          navigate("/my-schedules");
          console.log(getScheduled);
        } else {
          customToast("Horário indisponível", "error");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <HeaderCustomer />
      <ContainerCustomer>
        <ContainerSchedule>
          <h1>Agendar corte</h1>
          <h2>Aberto todos os dias das 8:00h às 18:00h</h2>
          <span>Horário:</span>
          <Input
            placeholder="Selecione Data e Hora"
            size="md"
            {...register("date", { required: "Horário é obrigatório" })}
            type="datetime-local"
          />
          {errors.date && <p>{errors.date.message}</p>}
          <span>Especialidade:</span>
          <Select
            placeholder="Selecione uma opção"
            {...register("specialty", {
              required: "Especialidade é obrigatório",
            })}
            onClick={(e) => {
              setSpecialty(e.target.value);
            }}
          >
            {!isLoading &&
              specialties?.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
          </Select>
          {errors.specialty && <p>{errors.specialty.message}</p>}
          <span>Barbeiro:</span>
          <Select
            {...register("barber_id", {
              required: "Escolher um barbeiro é obrigatório",
            })}
            placeholder="Selecione uma opção"
          >
            {!isLoadingFilter &&
              filterBarbers?.map((barber) => (
                <option value={barber.id} key={barber.id}>
                  {barber.name}
                </option>
              ))}
          </Select>
          {errors.barber_id && <p>{errors.barber_id.message}</p>}
          <Button
            type="submit"
            backgroundColor="#18382d"
            color="white"
            width={"100px"}
            onClick={handleSubmit(onSubmit)}
          >
            Cadastrar
          </Button>
        </ContainerSchedule>
      </ContainerCustomer>
    </>
  );
}

export default HomeCustomer;
