import React from 'react';


class RepoListEntry extends React.Component {
  constructor(props){
    super(props);
    this.state = {}

  }



  render() {
    console.log(this.props.repo.name)
    return(
      <div>
        {this.props.repo.name}
         {/* {console.log(this.props.repo.name,'nammme')}
        <div>{this.props.repo.stargazer}</div>
        <div>{this.props.repo.url}</div> */}
      </div>
    )
  }
}
export default RepoListEntry;
