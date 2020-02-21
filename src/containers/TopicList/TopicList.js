import React, { Component } from 'react';
import classes from './TopicList.module.scss';
import { NavLink } from 'react-router-dom';
import Loader from '../../components/UI/Loader/Loader';
import { fetchTopicList } from '../../store/actions/topicList';
import { connect } from 'react-redux';

class TopicList extends Component {

  state = []


  renderTopicList() {
    return (this.props.topics.map(topic => {
      console.dir(topic);
      return (
        <li key={topic.id}>
          <NavLink to={'/topics/' + topic.id}>{topic.name}</NavLink>
        </li>
      )
    }))
  }

  componentDidMount() {
    this.props.fetchTopicList()
  }

  render() {
    return (
      <div className={classes.TopicList}>
        <div className={classes.center}>
          <h1>Topic List</h1>
          {this.props.loading && this.props.topics.length > 0
            ? <Loader />
            : <ul> {this.renderTopicList()} </ul>
          }
          
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    topics: state.topicList.topics,
    loading: state.topicList.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTopicList: () => dispatch(fetchTopicList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicList);
