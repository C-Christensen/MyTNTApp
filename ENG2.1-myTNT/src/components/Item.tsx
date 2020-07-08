import React from 'react'; 

interface ItemProps {
    name: string;
    team?: number;
    email: any;
}

const Item = (props: ItemProps) => (
    <aside className="Item" >
        <ul>
            <li><b>Name:</b> {props.name}, Teams:{props.team}</li>
            <li><b>Email:</b> {props.email}</li>
        </ul>
       {/* Student Comment: We put in <ul><li></li></ul>unordered list to make Name and Email bullet 
       points and used <b>/<b> for bold fonts */}
    </aside>
)

export default Item

//HINT: use Card as a model to build the Item Component

//TODO: create the interface as a blueprint for the Item properties

//TODO: create the Item Component as a function using the arrow function syntax

//TODO: Don't forget to export the component so that it is available to import into the Card component

//Usage sample: <Item name="Zara Thomas" email="zthomas@home.com" team={16}/>