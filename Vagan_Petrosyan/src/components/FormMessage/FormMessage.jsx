import React, {Component} from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing(4),
        padding: theme.spacing(2),
    },
});

class FormMessage extends Component {
    state = {
        author: "",
        message: "",
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {addMessage} = this.props;
        addMessage(this.state);
    };

    onChange = ({target}) => {
        const {value, name} = target;

        this.setState({
            [name]: value,
        });
    };

    render() {
        const { classes } = this.props;
        const { author, message } = this.state
        return (
            <form className={classes.root} onSubmit={this.onSubmit}>
                <TextField
                    label='author'
                    name='author'
                    onChange={this.onChange}
                    value={author}
                    autoComplete="off"
                />
                <TextField
                    label='Text message'
                    name='message'
                    onChange={this.onChange}
                    value={message}
                    autoComplete="off"
                />
                <button type="submit">Add</button>
            </form>

        );
    }
}

FormMessage.prototypes = {
    addMessage: PropTypes.func.isRequired,
    classes: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withStyles(styles)(FormMessage);
