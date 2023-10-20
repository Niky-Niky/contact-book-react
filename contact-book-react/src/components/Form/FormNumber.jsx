import { Component } from "react";
import { Container } from "./FormNumber.styled";
import { Form } from "./FormNumber.styled";
import { Label } from "./FormNumber.styled";
import { Input } from "./FormNumber.styled";
import { Button } from "./FormNumber.styled";

export class MyFormNumber extends Component {

    render(){
        return(
            <Container>
                <Form>
                    <Label>Phone number</Label>
                    <Input 
                    type="text"
                    name="name"
                    id="numberInput"
                    // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
                    {/* <Button type="submit" onClick={this.props.bySubmit}>Add</Button> */}
                </Form>
            </Container>
        )
    }

}