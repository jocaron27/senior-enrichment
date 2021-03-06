import React from 'react';
import { connect } from 'react-redux';
import { writeStudentFirstName, writeStudentLastName, writeStudentAge, writeStudentEmail, writeStudentCampus, createStudent } from '../reducers';

function AddStudent(props) {
    const { newStudentEntryFirstName, newStudentEntryLastName, newStudentEntryAge, newStudentEntryEmail, newStudentEntryCampusId, handleChangeFirstName, handleChangeLastName, handleChangeAge, handleChangeEmail, handleChangeCampusId, allCampuses, handleSubmit } = props;
    return (
        <div className="main">
            <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="name"><h2>Add a Student</h2></label>
                <input
                    value={newStudentEntryFirstName}
                    onChange={handleChangeFirstName}
                    className="form-control medium"
                    type="text"
                    name="first"
                    placeholder="Enter first name"
                    required
                />
                <input
                    value={newStudentEntryLastName}
                    onChange={handleChangeLastName}
                    className="form-control medium"
                    type="text"
                    name="last"
                    placeholder="Enter last name"
                    required
                />
                <input
                    value={newStudentEntryAge}
                    onChange={handleChangeAge}
                    className="form-control small"
                    type="text"
                    name="age"
                    placeholder="Enter age"
                    required
                />
                <input
                    value={newStudentEntryEmail}
                    onChange={handleChangeEmail}
                    className="form-control large"
                    type="text"
                    name="email"
                    placeholder="Enter email"
                    required
                />
                <label htmlFor="campusId">Choose a Campus:</label>
                <br />
                <select name="campusId" value={newStudentEntryCampusId} onChange={handleChangeCampusId}>
                    {allCampuses.map(campus => <option key={campus.id} value={campus.id}>{campus.name}</option>)}
                </select>
            </div>
            <div className="form-group">
            <button type="submit" className="button-main">Add Student</button>
            </div>
        </form>
      </div>
    )
}

const mapStateToProps = function (state) {
    return {
        allCampuses: state.allCampuses,
        newStudentEntryFirstName: state.newStudentEntryFirstName,
        newStudentEntryLastName: state.newStudentEntryLastName,
        newStudentEntryAge: state.newStudentEntryAge,
        newStudentEntryEmail: state.newStudentEntryEmail,
        newStudentEntryCampusId: state.newStudentEntryCampusId
    }
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleChangeFirstName (event) {
      dispatch(writeStudentFirstName(event.target.value));
    },
    handleChangeLastName(event) {
        dispatch(writeStudentLastName(event.target.value))
    },
    handleChangeAge(event) {
        dispatch(writeStudentAge(event.target.value))
    },
    handleChangeEmail(event) {
        dispatch(writeStudentEmail(event.target.value))
    },
    handleChangeCampusId(event) {
        dispatch(writeStudentCampus(event.target.value))
    },
    handleSubmit (event) {
      event.preventDefault();
      const first = event.target.first.value;
      const last = event.target.last.value;
      const age = event.target.age.value;
      const email = event.target.email.value;
      const campusId = event.target.campusId.value
      dispatch(createStudent({first, last, age, email, campusId}, ownProps.history));
      dispatch(writeStudentFirstName(''));
      dispatch(writeStudentLastName(''));
      dispatch(writeStudentAge(''));
      dispatch(writeStudentEmail(''));
      dispatch(writeStudentCampus(''));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent);

