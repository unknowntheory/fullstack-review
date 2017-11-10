import React from 'react';
import RepoListEntry from './RepoListEntry.jsx'
const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <div>
    {props.repos.map((repo)=>{
    //  console.log(repo,'adfadfa');
      return <RepoListEntry repo={repo}/>
    })}
   </div>
  </div>
)

export default RepoList;
