import { Container } from "./registerBarber.styles";
import Header from "../../components/header";
// import { useForm, Controller } from 'react-hook-form';
// import DatePicker from 'react-datepicker';

function RegisterBarber() {
  // const { control, handleSubmit } = useForm();

  return(
    <Container>
      <Header/>
      <input type="date"></input>
    </Container>
  )
}

export default RegisterBarber;