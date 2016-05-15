import React from 'react';
import Jobs from './Jobs';

import { jobCollection } from '../horizon';

const style = {
  margin: '1rem',
  padding: '1rem',
  border: '1px solid gray',
};

export default class Company extends React.Component {
  static propTypes = {
    company: React.PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
    };
  }

  componentDidMount() {
    const { company } = this.props;

    const watcher = jobCollection
      .findAll({ company_id: company.id })
      .watch();

    this.subscription = watcher.subscribe(jobs => {
        this.setState({ jobs });
      });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    const { company: { name } } = this.props;
    const { jobs } = this.state;
    return (
      <div style={style}>
        <h3>{name}</h3>
        <Jobs jobs={jobs} />
      </div>
    );
  }
}
