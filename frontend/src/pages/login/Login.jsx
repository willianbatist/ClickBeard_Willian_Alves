import { Container, LoginContainer, GroupButton, Logo } from "./login.styles";
import { useForm } from "react-hook-form";
import { Button, useToast, InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import { requestLogin } from "../../services";
import { useContext, useState } from "react";
import { AppContext } from "../../contexts/contextProvider";
import { useNavigate } from "react-router-dom";

function Login() {
  const toast = useToast();
  const { setUser } = useContext(AppContext);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const dataUser = await requestLogin("/login", data);
    if (!dataUser.email) {
      console.log("login deu errado");
      toast({
        title: "Email e/ou senha inválidos.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
    if (dataUser.email) {
      setUser(dataUser);
      navigate("/");
    }
  };

  return (
    <Container>
      <LoginContainer onSubmit={handleSubmit(onSubmit)}>
        <Logo>
          <img src={logo} alt="logo de uma barbearia" />
          <h1>CLICK BEARD</h1>
        </Logo>
        <Input
          focusBorderColor='#18382d'
          width={"80%"}
          {...register("email", {
            required: "Endereço de email invalido",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Endereço de email invalido",
            },
          })}
          placeholder="email"
        />
        {errors.email && <p>{errors.email.message}</p>}
        <InputGroup size="md" width={"80%"}>
          <Input
            focusBorderColor='#18382d'
            pr="4.5rem"
            type={show ? "text" : "password"}
            {...register("password", { required: "senha obrigatória"})}
            placeholder="senha"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Esconder" : "Mostrar"}
            </Button>
          </InputRightElement>
        </InputGroup>
        {errors.password && <p>{errors.password.message}</p>}
        <GroupButton>
          <Button colorScheme="#18382d" variant="link">
            Criar conta
          </Button>
          <Button
            backgroundColor="#18382d"
            color="white"
            type="submit"
            width={"100px"}
          >
            Entra
          </Button>
        </GroupButton>
      </LoginContainer>
    </Container>
  );
}

export default Login;
