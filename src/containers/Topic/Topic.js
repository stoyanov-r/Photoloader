import React from 'react'
import { connect } from 'react-redux'
import Loader from '../../components/UI/Loader/Loader'
import { fetchTopic, saveTask } from '../../store/actions/topicList'
import classes from './Topic.module.scss'
import Task from '../../components/Task/Task'
import Button from '../../components/UI/Button/Button'

class Topic extends React.Component {

  taskTemplate = {
    photoUrls: ['https://image.shutterstock.com/image-vector/no-image-vector-isolated-on-260nw-1481369594.jpg'],
    topic: 'Enter topic',
    task: 'Enter task',
  }

  componentDidMount() {
    this.props.fetchTopicById(this.props.match.params.id)
  }

  addHandler = () => {
    this.props.addTask(this.props.match.params.id, this.taskTemplate);
  }

  render() {
    return (
      <div className={classes.Topic}>
        <div className={classes.TopicWrapper}>
          <h1>Topic</h1>

          {
            this.props.loading || !this.props.topic
              ? <Loader />
              : <div>
                {this.props.topic.map((task, index) => (
                  <Task
                    topicId={this.props.match.params.id}
                    index={index}
                    task={task || this.taskTemplate}
                    taskTemplate={this.taskTemplate}
                    key={task + index} />
                ))}
              </div>
          }
          {!this.props.isEdit && <Button type='success' onClick={this.addHandler}>Add</Button>}

        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.topicList.loading,
    topic: state.topicList.topic,
    isEdit: state.topicList.isEdit,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTopicById: id => dispatch(fetchTopic(id)),
    addTask: (topicId, newTask) => dispatch(saveTask(topicId, newTask))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic)