import { Container } from "./styles";

import { FiPlus, FiX} from "react-icons/fi";

export function NoteItem({ isNew, value, onClick, ...res }){
    return(
        <Container isNew={isNew}>
            <input 
                type="text" 
                value={value}
                readOnly={!isNew}
                {...res}
            />

            <button 
                type="button"
                onClick={onClick}
                className={isNew ? 'button-add' : 'button-delete'}
            >
                { isNew ? <FiPlus /> : <FiX/>} 
            </button>       
        </Container>
    )
}