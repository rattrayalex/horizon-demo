import React from 'react';
import Companies from './Companies';

import { companyCollection } from '../horizon';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
    };
  }

  componentDidMount() {
    this.subscription = companyCollection.watch().subscribe(companies => {
      this.setState({ companies });
    });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    const { companies } = this.state;
    return (
      <div>
        Hello World.
        <Companies companies={companies} />
      </div>
    );
  }
}
