import { Component } from "react";
import { Container } from "./FormName.styled";
import { Form } from "./FormName.styled";
import { Label } from "./FormName.styled";
import { Input } from "./FormName.styled";
import { Button } from "./FormName.styled";

export class MyFormName extends Component {

    render(){
        return(
            <Container>
                <Form>
                    <Label>Name</Label>
                    <Input 
                    type="text"
                    name="name"
                    id="nameInput"
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