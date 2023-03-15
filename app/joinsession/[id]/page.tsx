import JoinSessionForm from "./JoinSessionForm";

export default async function JoinSessionWithId({params}:any) {
    const {id} = params; 

    return <>
        <JoinSessionForm sessionId={id}/>
    </>;
}