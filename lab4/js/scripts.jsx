"use strict";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: true };
  }
  render() {
    return (
      <>
        <input
          type="text"
          name="searchTag"
          id="search-tag"
          placeholder="Search in tags"
        />
        <br />
        <input
          type="text"
          name="searchDesc"
          id="search-desc"
          placeholder="Search in description"
        />
        <br />
        <br />
      </>
    );
  }
}

class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: true };
  }
  render() {
    return (
      <>
        <input
          type="text"
          name="studentName"
          id="student-name"
          placeholder="Enter your name"
        />
        <br />
        <input
          type="text"
          name="studentDesc"
          id="student-desc"
          placeholder="Write something about yourself"
        />
        <br />
        <input
          type="text"
          name="studentMail"
          id="student-mail"
          placeholder="Your e-mail"
        />
        <br />
        <input
          type="text"
          name="studentTags"
          id="student-tags"
          placeholder="Your tags"
        />
        <br />
      </>
    );
  }
}

const StudentTile = (props) => {
  // todo image?
  return (
    <li class="student-tile">
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
  state = {
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

  render() {
    //todo
    const students = this.state.students.map((student) => (
      <StudentTile
        name={student.name}
        desc={student.desc}
        mail={student.mail}
        tags={student.tags}
      />
    ));
    return (
      <>
        <SearchBox />
        <AddStudent />
        <ul>{students}</ul>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
