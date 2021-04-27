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
  constructor(props) {
    super(props);
  }
  state = {
    newStudentName: "",
    newStudentDesc: "",
    newStudentMail: "",
    newStudentTags: "",
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
      newStudentName: event.target.value,
    });
  };

  handleDescChange = (event) => {
    this.setState({
      newStudentDesc: event.target.value,
    });
  };

  handleMailChange = (event) => {
    this.setState({
      newStudentMail: event.target.value,
    });
  };

  handleTagsChange = (event) => {
    this.setState({
      newStudentTags: event.target.value,
    });
  };

  handleEnter = (event) => {
    if (event.code === "Enter") {
      if (
        this.state.newStudentName === "" ||
        this.state.newStudentDesc === "" ||
        this.state.newStudentMail === "" ||
        this.state.newStudentTags === ""
      ) {
        alert("Please enter valid data about yourself.");
      } else {
        this.setState({
          students: this.state.students.concat({
            name: this.state.newStudentName,
            desc: this.state.newStudentDesc,
            mail: this.state.newStudentMail,
            tags: this.state.newStudentTags,
          }),
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
          onNameChange={this.handleNameChange.bind(this)}
          onDescChange={this.handleDescChange.bind(this)}
          onMailChange={this.handleMailChange.bind(this)}
          onTagsChange={this.handleTagsChange.bind(this)}
          handleEnter={this.handleEnter.bind(this)}
        />
        <StudentCount count={this.state.students.length} />
        <ul>{students}</ul>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
