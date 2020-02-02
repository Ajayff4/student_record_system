import React from 'react';
import '../styles/styles.css';
import PrintTable from './PrintTable';

const SearchStudent = () => {
    return (
        <div id="searchFieldset">
            <fieldset>
                <legend>Search Student Form</legend>
                <form>
                    <select name="stdudentDetails" id="updateDetails" required>
                        <option value="">Select Field</option>
                        <option value="">Mobile</option>
                        <option value="">Email</option>
                    </select>
                    <input type="text" id="updateInfo" className="updateInfo"
                        placeholder="Enter detail to update"
                        name="updateInfo" required
                    />
                    <button type="submit">Submit</button>
                    <hr />
                    <div className="outerBox">
                        <div className="innerBox">
                            <PrintTable />
                        </div>
                    </div>
                </form>
            </fieldset >
        </div >
    )
}

export default SearchStudent;