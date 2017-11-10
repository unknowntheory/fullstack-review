import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import RepoListEntry from './components/repoListEntry.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }


  }

  search (term) {
    console.log(`${term} was searched`);
  var object = {username: term};
  console.log(object,'object');

    $.ajax({

      type: 'POST',
      url: '/repos',
      contentType: 'application/json',
      data: JSON.stringify(object)

    })
  }
  componentWillMount(){
    var orignial = this
    $.ajax({
      type:'GET',
      url:'/repos',
      contentType:'application/json',
      success:function(data){
        // console.log(data,'this is success');
        this.setState({repos:data})
      }.bind(this),
      error: function(err){
       console.log(err,'errr');
      }
    })
  }

    // witht the data store it on this.state.repos











  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
