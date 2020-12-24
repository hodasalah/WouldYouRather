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
        padding: "20px",
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
        width: "60px",
        height: "60px",
        borderRadius: "50%",
    },
});
/***************** end Variables   ******* */
class LogIn extends React.Component {
    state = {
        val: "",
    };

    handleChange = (e) => {
        this.setState({
            val: e.target.value,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        dispatch(handleSetAuthedUser(this.state.val));
    };
    render() {
        const { classes, users } = this.props;
        return (
            <Card className={classes.root}>
                <CardContent>
                    <CardMedia
                        component="img"
                        alt="would-you-rather"
                        height="500px"
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
                            <MenuItem value="" className={classes.menuItem}>
                                <div> None </div>
                            </MenuItem>
                            {Object.keys(users).map((id) => (
                                <MenuItem
                                    key={id}
                                    value={id}
                                    className={classes.menuItem}
                                >
                                    {users[id].avatarURL && (
                                        <img
                                            src={`./${users[id].avatarURL}`}
                                            className={classes.selectImg}
                                            alt={users[id].name}
                                        />
                                    )}
                                    <div>{users[id].name}</div>
                                </MenuItem>
                            ))}
                        </Select>
                        <Button
                            variant="contained"
                            className={classes.button}
                            color="secondary"
                            type="submit"
                            disabled={this.state.val === ""}
                        >
                            Submit
                        </Button>
                    </FormControl>
                </CardContent>
            </Card>
        );
    }
}
const mapStateToProps = ({ users }) => {
    return {
        users,
    };
};
export default connect(mapStateToProps)(withStyles(styles)(LogIn));
