import Element from "./Element";

const MyComponent = ( value ) => 
{
    const { array } = value;
    return (
        <ul>
        {
            array.map( 
                ( index, element ) =>
                    <li><div key={ index }><Element value={ element }/></div></li>
                )
        }
        </ul>
    );
}

export default MyComponent;