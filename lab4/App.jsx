"use strict";

// import './App.css';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: true };
  }
  render() {
    return (
      <>
        <div className="search-input">
          <input
            type="text"
            name="searchTag"
            id="search-tag"
            placeholder="Search in tags"
          />
        </div>
        <div className="search-input">
          <input
            type="text"
            name="searchDesc"
            id="search-desc"
            placeholder="Search in description"
          />
        </div>
        <div style={{ clear: "both" }} />
      </>
    );
  }
}

class AddStudent extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <>
        <div className="student-input">
          <input
            type="text"
            name="studentName"
            id="student-name"
            placeholder="Your name"
            onChange={this.props.onNameChange}
            onKeyDown={this.props.handleEnter}
          />
        </div>
        <div className="student-input">
          <input
            type="text"
            name="studentDesc"
            id="student-desc"
            placeholder="Your description"
            onChange={this.props.onDescChange}
            onKeyDown={this.props.handleEnter}
          />
        </div>
        <div className="student-input">
          <input
            type="text"
            name="studentMail"
            id="student-mail"
            placeholder="Your e-mail"
            onChange={this.props.onMailChange}
            onKeyDown={this.props.handleEnter}
          />
        </div>
        <div className="student-input">
          <input
            type="text"
            name="studentTags"
            id="student-tags"
            placeholder="Your tags"
            onChange={this.props.onTagsChange}
            onKeyDown={this.props.handleEnter}
          />
        </div>
        <div style={{ clear: "both" }} />
      </>
    );
  }
}

const StudentTile = (props) => {
  return (
    <li className="student-tile">
      <p>{props.name}</p>
      <p>{props.desc}</p>
      <p>{props.mail}</p>
      <p>{props.tags}</p>
    </li>
  );
};

const StudentCount = (props) => {
  return <p>Found {props.count} students.</p>;
};

class App extends React.Component {
  constructor(props){
    super(props);
    // this.handleNameChange = this.handleNameChange.bind(this);
    // this.handleDescChange = this.handleDescChange.bind(this);
    // this.handleMailChange = this.handleMailChange.bind(this);
    // this.handleTagsChange = this.handleTagsChange.bind(this);
    // this.handleEnter = this.handleEnter.bind(this);
  }
  state = {
    newStudent: {
      name: null,
      desc: null,
      mail: null,
      tags: null,
    },
    students: [
      {
        name: "Arek",
        desc: "I like trains",
        mail: "arek@gmail.com",
        tags: "Docker, Python",
      },
      {
        name: "Marek",
        desc: "I like carrots",
        mail: "marek@gmail.com",
        tags: "Docker, Python",
      },
      {
        name: "Robert Lewandowski",
        desc: "I like Germany",
        mail: "robertlewandowski@gmail.com",
        tags: "Docker, Python, Bayern Munich",
      },
    ],
  };

  handleNameChange = (event) => {
    this.setState({
      newStudent: {
        name: event.target.value,
        desc: newStudent.desc,
        mail: newStudent.mail,
        tags: newStudent.tags,
      },
    });
  };

  handleDescChange = (event) => {
    this.setState({
      newStudent: {
        name: newStudent.name,
        desc: event.target.value,
        mail: newStudent.mail,
        tags: newStudent.tags,
      },
    });
  };

  handleMailChange = (event) => {
    this.setState({
      newStudent: {
        name: newStudent.name,
        desc: newStudent.desc,
        mail: event.target.value,
        tags: newStudent.tags,
      },
    });
  };

  handleTagsChange = (event) => {
    this.setState({
      newStudent: {
        name: newStudent.name,
        desc: newStudent.desc,
        mail: newStudent.mail,
        tags: event.target.value,
      },
    });
  };

  handleEnter = (event) => {
    if (event.code === "Enter") {
      if (
        this.state.newStudent.name === "" ||
        this.state.newStudent.desc === "" ||
        this.state.newStudent.mail === "" ||
        this.state.newStudent.tags === ""
      ) {
        alert("Please enter valid data about yourself.");
      } else {
        this.setState({
          students: this.state.students.concat({
            name: this.state.newStudent.name,
            desc: this.state.newStudent.desc,
            mail: this.state.newStudent.mail,
            tags: this.state.newStudent.tags,
          }),
          newStudent: {
            name: null,
            desc: null,
            mail: null,
            tags: null,
          },
        });
      }
    }
  };

  render() {
    const students = this.state.students.map((student) => (
      <StudentTile
        name={student.name}
        desc={student.desc}
        mail={student.mail}
        tags={student.tags}
      />
    ));
    //! I have zero idea why the AddStudent doesn't work...
    return (
      <>
        <SearchBox />
        <AddStudent    
          onNameChange={this.handleNameChange}
          onDescChange={this.handleDescChange}
          onMailChange={this.handleMailChange}
          onTagsChange={this.handleTagsChange}
          handleEnter={this.handleEnter}
        />
        <StudentCount count={this.state.students.length} />
        <ul>{students}</ul>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
