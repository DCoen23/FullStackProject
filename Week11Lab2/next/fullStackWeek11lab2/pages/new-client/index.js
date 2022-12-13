// our-dimain.com/new-client
import NewClientForm from '../../components/clients/NewClientForm'
import { useRouter } from 'next/router';
import GlobalContext from "../store/globalContext"
import { useContext } from 'react'

function NewClientPage() {
    const router = useRouter()
    const globalCtx = useContext(GlobalContext)

    async function addClientHandler(enteredClientData)  {
        await globalCtx.updateGlobals({cmd: 'addClient', newVal: enteredClientData})
        router.push('/');
    }

    return <NewClientForm onAddClient={addClientHandler} />
}

export default NewClientPage