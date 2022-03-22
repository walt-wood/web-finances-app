import "./Card.css";

const Card = (props) => {
  // This allows for transfering css classnames to nested components, so the css can be custom for every card.
  const classes = "card " + props.className;
  // Card is a wrapper component so we need to send props.children to get to the nested component's props
  return <div className={classes}>{props.children}</div>;
};

export default Card;
