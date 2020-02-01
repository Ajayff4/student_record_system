import React from 'react';
import '../styles/styles.css';

const UpdateStudent = () => {
    return (
        <div className="formDiv">
            <fieldset>
                <legend>Update Student Form</legend>
                <form>
                    <p id="notice">* Select a field to update</p>
                    <hr />
                    <select name="stdudentDetails" id="updateDetails" required>
                        <option value="">Select Field</option>
                        <option value="">Mobile</option>
                        <option value="">Email</option>
                    </select>
                    <input type="text" id="updateInfo"
                        placeholder="Enter detail to update"
                        name="updateInfo" required
                    /><hr />
                    <button type="submit">Submit</button>
                </form>
            </fieldset >
        </div >
    )
}

export default UpdateStudent;