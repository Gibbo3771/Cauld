export default class View {
  constructor(props) {
    this.props = props;
    this.parent = this.props.parent;
  }

  destroy = () => {
    while (this.parent.firstChild) {
      this.parent.removeChild(this.parent.firstChild);
    }
  };

  appendChild = child => {
    this.parent.appendChild(child);
  };
}
