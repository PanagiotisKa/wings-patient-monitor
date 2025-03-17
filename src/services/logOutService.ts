import { useContext} from 'react';
import TokenContext from '../services/tokenContext';

export default function LoginOutService() {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id')

    const memoryToken = useContext(TokenContext)
    memoryToken.setMemoryToken('')

    return true
}
