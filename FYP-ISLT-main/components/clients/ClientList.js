import ClientItem from './ClientItem';
import classes from './ClientList.module.css';

function ClientList(props) {
  return (
    <ul className={classes.list}>
      {props.clients.map((client) => (
        <ClientItem
          key={client._id}
          id={client.clientId}
          image={client.image}
          title={client.title}
          address={client.address}
        />
      ))}
    </ul>
  );
}

export default ClientList;