import { Component } from "react";
// import { nanoid } from "nanoid";
import { List } from "./ContactList.styled";
// import { BulletPoints } from "./ContactList.styled";


export class MyContactList extends Component{

    render(){
        return(
            <>
            <List>
                {/* <BulletPoints key={nanoid()}>{this.props.newContact}</BulletPoints> */}
                {/* {this.props.newContact} */}
                
            </List>
            </>
        )
    }

}