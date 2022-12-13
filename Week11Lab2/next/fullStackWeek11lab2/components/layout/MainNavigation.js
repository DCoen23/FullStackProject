import classes from './MainNavigation.module.css'
import { useContext } from 'react'
import GlobalContext from "../../pages/store/globalContext"
import { useRouter } from 'next/router'
import Navigation from './Navigation'



function MainNavigation() {
  const globalCtx = useContext(GlobalContext)
  const router = useRouter()

  function homeHandler() {
    router.push('/');
  }
  function toggleMenuHide() {
    globalCtx.updateGlobals({ cmd: 'hideHamMenu', newVal: false })
  }

  const contents = []
  globalCtx.theGlobalObject.clients.forEach(element => {
    contents.push({title: element.title, webAddress: '/' + element.meetingclientId })
  });

  return (
    <header className={classes.header}>
      <div className={classes.logo} onClick={homeHandler}>MiniProj</div>
      <div className={classes.mainDiv} onClick={() => props.toggleMenuHide()}></div>
      <Navigation/>
    </header>
  );
}

export default MainNavigation
