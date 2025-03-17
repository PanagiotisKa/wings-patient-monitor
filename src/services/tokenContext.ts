import { createContext, Dispatch, SetStateAction } from "react";

type tokenContextType = {
    memoryToken: string
    setMemoryToken: Dispatch<SetStateAction<string>>
    }

const TokenContext = createContext<tokenContextType>({memoryToken: "", setMemoryToken: () => {}})

export default TokenContext