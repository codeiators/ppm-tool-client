import React, { Component } from "react";
import { getProject, createProject } from "../../actions/projectActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class UpdateProject extends Component {
  //set state
  constructor() {
    super();

    this.state = {
      id: "",
      projectName: "",
      projectIdentifier: "",
      description: "",
      start_date: "",
      end_date: "",
     
      
    };
    

  }

  componentDidUpdate(prevProps) {

    if (this.props.project && prevProps.project !== this.props.project) {

      const { 
        id,
        projectName,
        projectIdentifier,
        description,
        start_date,
        end_date,
        updated_At,
        created_At} = this.props.project;

        this.setState({
          id,
        projectName,
        projectIdentifier,
        description,
        start_date,
        end_date,
        updated_At,
        created_At

        })

    }


  }
 

  componentDidMount() {
     const { projectId } = this.props.match.params;
    this.props.getProject(projectId, this.props.history);
     
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }



  onSubmit = (e) => {
    e.preventDefault();

    const updateProject = {
      id: this.state.id,
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      description: this.state.description,
      start_date: this.state.start_date,
      end_date: this.state.end_date
    };

    console.log(updateProject)
    this.props.createProject(updateProject, this.props.history);

    this.setState({id: "",
    projectName: "",
    projectIdentifier: "",
    description: "",
    start_date: "",
    end_date: ""})

  }

  render() {
    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Update Project form</h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg "
                    placeholder="Project Name"
                    name="projectName"
                    value={this.state.projectName}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Unique Project ID"
                    name="projectIdentifier"
                    value={this.state.projectIdentifier}
                    onChange={this.onChange}
                    disabled
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Project Description"
                    name="description"
                    onChange={this.onChange}
                    value={this.state.description}
                  />
                </div>
                <h6>Start Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="start_date"
                    value={this.state.start_date}
                    onChange={this.onChange}
                  />
                </div>
                <h6>Estimated End Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="end_date"
                    value={this.state.end_date}
                    onChange={this.onChange}
                  />
                </div>

                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UpdateProject.propTypes = {
  getProject: PropTypes.func.isRequired,
  createProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  project: state.project.project,
  errors:state.errors
});

export default connect(
  mapStateToProps,
  { getProject, createProject }
)(UpdateProject);