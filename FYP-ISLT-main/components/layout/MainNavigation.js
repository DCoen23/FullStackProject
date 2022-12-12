import classes from './MainNavigation.module.css'
import Navigation from './Navigation'
import { useRouter } from 'next/router';

function MainNavigation() {

 // setInterval(() => {testTest++; console.log(testTest)}, 1000);
  const router = useRouter();

  function homeHandler() {
    router.push('/');
  }


  return (
    
    <header className={classes.header}>
      <div className={classes.logo} onClick={homeHandler}>MiniProj</div>
      <div className={classes.mainDiv} onClick={() => props.toggleMenuHide()}></div>
      <Navigation/>
    </header>
  );
}

export default MainNavigation