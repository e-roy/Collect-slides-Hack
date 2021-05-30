import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "70ch",
    },

    "& .MuiButton-root": {
      margin: theme.spacing(2),
    },
    margin: theme.spacing(1),
  },
});

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "DIYversity",
      product: "Collect It Presenter",
      industry: "Startups",
      mission: "We help other startups focus more on important work while our AI takes care of their Slide Decks.",
      problem: "It's hard to come up with ideas and takes too long to make slides.",
      solution: "Make Pitch Decks and Case Study Slides fast, easier, and smarter.",
      teamCount: 2,
      linkedinUrls: ["Rene", "Danielle", "Eric", "Mr T"],
    };
  }

  handleCompany(e) {
    this.setState({ company: e.target.value });
  }

  handleProduct(e) {
    this.setState({ product: e.target.value });
  }

  handleMission(e) {
    this.setState({ mission: e.target.value });
  }

  handleIndustry(e) {
    this.setState({ industry: e.target.value });
  }

  handleProblem(e) {
    this.setState({ problem: e.target.value });
  }

  handleSolution(e) {
    this.setState({ solution: e.target.value });
  }

  handleUrls(e) {
    let urls = [...this.state.linkedinUrls];
    urls[e.target.name] = e.target.value;
    this.setState({ linkedinUrls: urls });
  }

  addTeamMember() {
    this.setState({ linkedinUrls: [...this.state.linkedinUrls, ""] });
  }

  handleSubmit() {
    let data = {
      company: this.state.company,
      product: this.state.product,
      industry: this.state.industry,
      mission: this.state.mission,
      problem: this.state.problem,
      solution: this.state.solution,
      linkedinUrls: this.state.linkedinUrls,
    };
    this.props.submit(data);
  }

  render() {
    const { classes } = this.props;
    let teamMemebers = this.state.linkedinUrls.map((item, index) => (
      <TextField
        required
        key={index}
        id="standard-required"
        label={"Team Member " + index}
        defaultValue={item}
        // name={index}
        onChange={this.handleUrls.bind(this)}
      />
    ));
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            required
            id="company-id"
            label="Company"
            defaultValue={this.state.company}
            onChange={this.handleCompany.bind(this)}
          />
          <TextField
            required
            id="product-id"
            label="Product"
            defaultValue={this.state.product}
            onChange={this.handleProduct.bind(this)}
          />
          <TextField
            required
            id="industry-id"
            label="Industry"
            defaultValue={this.state.industry}
            onChange={this.handleIndustry.bind(this)}
          />
          <TextField
            required
            id="mission-id"
            label="Mission"
            defaultValue={this.state.mission}
            onChange={this.handleMission.bind(this)}
          />
          <TextField
            required
            id="problem-id"
            label="Problem"
            defaultValue={this.state.problem}
            onChange={this.handleProblem.bind(this)}
          />
          <TextField
            required
            id="solution-id"
            label="Solution"
            defaultValue={this.state.solution}
            onChange={this.handleSolution.bind(this)}
          />
        </div>
        <div>
          {teamMemebers}
          <IconButton
            aria-label="add Member"
            onClick={this.addTeamMember.bind(this)}
          >
            <AddIcon />
          </IconButton>
        </div>
        <Button
          variant="contained"
          color="primary"
          href="#contained-buttons"
          onClick={this.handleSubmit.bind(this)}
        >
          Submit
        </Button>
        {/* <button className={styles.submitBtn}>SUBMIT</button> */}
      </form>
    );
  }
}

export default withStyles(styles, { withTheme: true })(InputForm);
