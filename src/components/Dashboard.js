import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/core/styles";
import { a11yProps, TabPanel } from "./TabPanel";
import { connect } from "react-redux";
import Poll from './Poll';

const styles = (theme) => ({
  root: {
    flexGrow: 2,
    
    backgroundColor: theme.palette.background.paper,
  },
  tabs:{
    justifyContent:'space-between',
  }
});
class Dashboard extends Component {
  state = {
    value: 0,
  };
  handleChange = (e, newVal) => {
    this.setState({ value: newVal });
  };
  render() {
    const { value } = this.state;
    const { classes ,users ,questions ,unAnswered ,answered } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={this.handleChange}
            aria-label="simple tabs example"
            className={classes.tabs}
          >
            <Tab label="Un Answered Questions" {...a11yProps(0)} />
            <Tab label="Answered Questions" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <div className="content">
            {unAnswered.map((id) => (
              <Poll 
                key={id}
                id={id}
                content='Answer Poll'
                name={users[questions[id].author].name}
                avatar={`/${users[questions[id].author].avatarURL}`}
                firstOption={questions[id].optionOne.text}
                secondOption={questions[id].optionTwo.text}/>
              
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          {answered.map(id=>(
            <Poll 
            key={id}
            id={id}
            content='View Answer'
            name={users[questions[id].author].name}
            avatar={`/${users[questions[id].author].avatarURL}`}
            firstOption={questions[id].optionOne.text}
            secondOption={questions[id].optionTwo.text}/>
          ))}
        </TabPanel>
      </div>
    );
  }
}

const mapStateToProps = ({ users, questions, authedUser }) => {
  const answered = Object.keys(users[authedUser].answers).sort(
    (a, b) =>
      users[authedUser].answers[b].timeStamp -
      users[authedUser].answers[a].timeStamp
  );
  const unAnswered = Object.keys(questions)
    .filter((id) => !answered.includes(id))
    .sort((a, b) => a.timeStamp - b.timeStamp)
    
  return {
    answered,
    unAnswered,
    users,
    questions,
    authedUser,
  };
};

export default connect(mapStateToProps)(
  withStyles(styles, { theme: true })(Dashboard)
);
