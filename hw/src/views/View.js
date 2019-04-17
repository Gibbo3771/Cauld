export default class View {
  constructor(props) {
    this.props = props;
    this.parent = this.props.parent;
  }

  appendChild = child => {
    this.parent.appendChild(child);
  };
}
