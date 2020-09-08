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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        borderTop:'.5px solid rgba(100,100,100,0.2)',
        borderLeft:'.5px solid rgba(100,100,100,0.2)',
        borderRight:'.5px solid rgba(100,100,100,0.2)',
    },
    media: {
        height: 0,
        paddingTop: '65%', // 16:9
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
    const [expanded, setExpanded] = React.useState(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <React.Fragment>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {props.avatar}
                        </Avatar>
                    }
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
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <ol>
                            {props.text.map(el => <li>{el}</li>)}
                        </ol>
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>說明:</Typography>
                        <Typography paragraph>
                            {props.title}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>

        </React.Fragment>
    );
}

export default ProjectCard;