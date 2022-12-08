import Popup from "./Popup"

const NavLinks= (props) =>{ 
  
  let popupHide

    return(
        
        <ul>
           <Popup hide={popupHide}/>
          <li onclick={()=> props.isNav&&props.closeNavMenu()}>
            <a href='/'>All Clients</a>            
          </li>
          <li onclick={()=> props.isNav&&props.closeNavMenu()}>
            <a href='/new-client'>Add New Client</a>
          </li>
          <li onclick={()=> props.isNav&&props.closeNavMenu()}>
            <a href='/isl-signs'>Sign Language</a>            
          </li>
        </ul>
         
    );
}

export default NavLinks;