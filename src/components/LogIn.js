import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { handleSetAuthedUser } from "../actions/authedUser";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";

const styles = () => ({
  formControl: {
    margin: "20px",
    minWidth: "70%",
  },
  root: {
    margin: "50px auto",
    padding: "40px 20px",
    maxWidth: "80%",
    textAlign: "center",
  },
  button: {
    marginTop: "25px",
    width: "140px",
    height: "50px",
    margin: "auto",
    backgroundColor: "#3f51b5",
   
  },
  select: {
    display: "flex",
    justifyContent: "space-between",
    lineHeight: "63px",
    verticalAlign: "middle",
  },
  menuItem: {
    background: "#3f51b5",
    display: "flex",
    justifyContent: "space-between",
  },

  selectImg: {
    maxWidth: "60px",
    maxHeight: "60px",
    borderRadius: "50%",
  },
});
/***************** end Variables   ******* */
class LogIn extends React.Component {
  state = {
    val: "",
  };

  handleChange = (e) => {
    this.setState(
      {
        val: e.target.value,
      },
      () => console.log(this.state.val)
    );
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    console.log(this.state.val);
    dispatch(handleSetAuthedUser(this.state.val));
  };
  render() {
    const options = [
      { value: "", label: "None" },
      { value: "sarahedo", label: "Sarah Edo", avatar: "../images/sara.jpg" },
      {
        value: "tylermcginnis",
        label: "Tyler McGinnis",
        avatar: "../images/tyler.jpg",
      },
      { value: "johndoe", label: "John Doe", avatar: "../images/john.jpg" },
    ];
    const { classes } = this.props;
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="would-you-rather"
            height="400px"
            image="../images/bg.jpg"
            title="would-you-rather"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Would You Rather
            </Typography>
            <Typography variant="body2" component="h4">
              Pick A user And Sign In To Play
            </Typography>
          </CardContent>
          <FormControl
            component="form"
            onSubmit={this.handleSubmit}
            className={classes.formControl}
          >
            <InputLabel htmlFor="grouped-select">Users</InputLabel>
            <Select
              classes={{ select: classes.select }}
              value={this.state.val}
              onChange={this.handleChange}
              id="grouped-select"
            >
              {options.map((op) => (
                <MenuItem
                  key={op.value}
                  value={op.value}
                  className={classes.menuItem}
                >
                  {op.avatar && (
                    <img
                      src={op.avatar}
                      className={classes.selectImg}
                      alt={op.value}
                    />
                  )}
                  <div>{op.label}</div>
                </MenuItem>
              ))}
            </Select>

            <Button
              component='button'
              type="submit"
              className={classes.button}
              disabled={this.state.val === ''}
              variant="contained"
              color="secondary" 
            >Sign In</Button>
          </FormControl>
        </CardActionArea>
      </Card>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    state,
  };
};
export default connect(mapStateToProps)(withStyles(styles)(LogIn));
