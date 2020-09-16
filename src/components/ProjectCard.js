import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        borderTop: '.5px solid rgba(100,100,100,0.2)',
        borderLeft: '.5px solid rgba(100,100,100,0.2)',
        borderRight: '.5px solid rgba(100,100,100,0.2)',
        height: '100%'
    },
    media: {
        height: 0,
        paddingTop: '85%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));
const ProjectCard = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <React.Fragment>
            <Card className={classes.root}>
                <CardHeader
                    // avatar={
                    //     <Avatar aria-label="recipe" className={classes.avatar}>
                    //         {props.avatar}
                    //     </Avatar>
                    // }
                    action={
                        <IconButton aria-label="settings">
                            <img src={props.action} style={{ width: `${props.width}` }} />
                        </IconButton>
                    }
                    title={props.header}
                    subheader={props.makedate}
                />
                <CardMedia
                    className={classes.media}
                    image={props.cover}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <h5><strong>{props.title}</strong></h5>
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <button className="btn btn-primary" onClick={() => props.show(props.avatar)}>
                        <i className="fas fa-list-ul mr-2"></i>
                        專案詳細
                        </button>
                </CardActions>
            </Card>

        </React.Fragment>
    );
}

export default ProjectCard;