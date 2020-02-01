import React from 'react';
import '../styles/styles.css';

const SearchStudent = () => {
    return (
        <div>
            <fieldset id="searchFieldset">
                <legend>Search Student Form</legend>
                <form>
                    <select name="stdudentDetails" id="updateDetails" required>
                        <option value="">Select Field</option>
                        <option value="">Mobile</option>
                        <option value="">Email</option>
                    </select>
                    <input type="text" id="updateInfo"
                        placeholder="Enter detail to update"
                        name="updateInfo" required
                    />
                    <button type="submit">Submit</button>
                    <hr />
                    <div class="outerBox">
                        <div class="innerBox">
                            <p>enwednwledijowe</p>
                            <p>enwednwledijowe</p>
                            <p>enwednwledijowe</p>
                            <p>enwednwledijowe</p>
                            <p>enwednwledijowe</p>
                            <p>enwednwledijowe</p>
                            <p>enwednwledijowe</p>
                            <p>enwednwledijowe</p>
                            <p>enwednwledijowe</p>
                            <p>enwednwledijowe</p>
                            <p>enwednwledijowe</p>
                            <p>enwednwledijowe</p>
                        </div>
                    </div>
                </form>
            </fieldset >
        </div >
    )
}

export default SearchStudent;