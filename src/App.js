import React from 'react';
import './App.css';
import GithubRepos from './GithubRepos.js';
import {  Card, CardHeader,CardBody } from 'reactstrap';

function App() {
  return (
    <Card>
      <CardHeader>Javascript Repositories</CardHeader>
      <CardBody>
        <GithubRepos />
      </CardBody>
    </Card>
  );
}

export default App;
