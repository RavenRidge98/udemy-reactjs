<<<<<<< Updated upstream
import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className;
  
  return <div className={classes}>{props.children}</div>;
}
=======
import classes from './Card.module.css';

const Card = props => {
  return <div className={classes.card}>{props.children}</div>
};
>>>>>>> Stashed changes

export default Card;