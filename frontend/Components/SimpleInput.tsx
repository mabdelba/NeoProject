
type newType = {

    type: string;
    value: string;

}

function SimpleInput(props: newType){

    return(
        <input type={props.type} value={props.value} className="min-h-16 min-w-20 bg-pallette-yellow border border-black outline-none rounded-xl"/>
    );
}


export default SimpleInput;