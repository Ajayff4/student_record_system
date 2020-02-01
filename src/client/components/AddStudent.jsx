import React from 'react';
import '../styles/styles.css';

const AddStudent = () => {
    return (
        <div className="formDiv">
            <fieldset>
                <legend>Add Student Form</legend>
                <form>
                    <p id="notice">* Date field is for DOB</p>
                    <hr />
                    <input type="tel" id="mobile"
                        placeholder="Enter mobile number"
                        name="mobile" pattern="[0-9]" required
                    /><br />
                    <select name="course" id="course" required>
                        <option value="">Select Course</option>
                        <option value="MCA">MCA</option>
                        <option value="MBA">MBA</option>
                        <option value="MTech">M Tech</option>
                    </select>
                    <input type="date" id="dob"
                        placeholder="Enter date of birth"
                        name="dob" required
                    /><br />
                    <input type="text" id="pincode"
                        placeholder="Enter pincode"
                        name="pincode" pattern="[0-9]" required
                    /><hr />
                    <button type="submit">Submit</button>
                </form>
            </fieldset >
        </div >
    )
}

export default AddStudent;