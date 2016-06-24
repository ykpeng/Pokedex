const React = require('react');
const ToyIndexItem = require('./toys_index_item');

const ToysIndex = React.createClass({
  render(){
    let content = <div></div>;
    if (this.props.toys !== undefined ) {
      content = (
        this.props.toys.map((toy)=>{
          return <ToyIndexItem toy={toy} />;
        })
      );
    }
    return content;
  }
});

module.exports = ToysIndex;
