import ClientList from '../components/clients/ClientList'
import { useContext } from "react";
import GlobalContext from "./store/globalContext"

function HomePage() {
    const globalCtx = useContext(GlobalContext)

    if (globalCtx.theGlobalObject.dataLoaded == true) {
        return <ClientList clients={globalCtx.theGlobalObject.clients} />
    }
    return <div>Loading data from database, please wait . . . </div>
}

export default HomePage;