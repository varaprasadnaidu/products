import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import UserService from '../../shared/services/user-service';
import Axios from 'axios';
const styles = theme => ({
  root: {
    width: '58%',
    margin:' 0 auto'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class ControlledExpansionPanels extends React.Component {
  constructor (){
    super()
  }
  state = {
    expanded: null,
    products: []
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };
  componentDidMount=()=>{
    Axios.get("http://demo3399368.mocable.io/testpdf")
    .then((res)=>{
        console.log("test dada",res.data);
        this.setState({
            selectedData:res.data
        })
    })
    .catch((err)=>{
        console.log(err);
    })
}
  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>  
            Phone :
            </Typography>
            <Typography className={classes.secondaryHeading}>
              Phone Details
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            Phone Number:91 80 09001000 <br/>
            Customer Name: Prasad<br />
            Status: Active<br/>
            Address: Bangalore<br/>
            Expire Date:25/06/2018<br/>
            Bill Amount:200<br/>
            <button className="ui blue button" onClick="">ViewBill</button>
            <button className="ui blue button" onClick="">Download Bill</button>
            <button className="ui blue button" onClick="">Support</button>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>BradBand</Typography>
            <Typography className={classes.secondaryHeading}>
              Abc Telcom Service
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            BradBand Address:101.98.6<br/>
            Customer Name: Siva<br />
            Status: Active<br/>
            Address: Bangalore<br/>
            Expire Date:29/06/2018<br/>
            Bill Amount:500<br/>
            <button className="ui blue button" onClick="">View Bill</button>
            <button className="ui blue button" onClick="">Download Bill</button>
            <button className="ui blue button" onClick="">Support</button>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Digital Tv</Typography>
            <Typography className={classes.secondaryHeading}>
              Fell Digital Tv Services
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            Digital Tv Model:LED12823483 <br/>
            Customer Name: Anjali<br />
            Status: Active<br/>
            Address: Bangalore<br/>
            Expire Date:28/06/2018<br/>
            Bill Amount:400<br/>
            <button className="ui blue button" onclik="">View Bill</button>
            <button className="ui blue button" onClick="">Download Bill</button>
            <button className="ui blue button" onClick="">Support</button>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        
      </div>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);
