import React from 'react';
import students from '../../server/studentData';

class PrintTable extends React.Component {
    createTable = () => {
        let table = [];
        table.push(
            <tr style={{ textAlign: "left", height: "3em", backgroundColor: "#3E444A" }} key={"header"}>
                <th>#</th>
                <th>FullName</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Course</th>
                <th>DOB</th>
                <th>Pincode</th>
                <th><center>Status</center></th>
            </tr>
        )
        students.forEach(function (student, i) {
            let row = [];
            for (let props in student) {
                row.push(<td key={i + props}>{student[props]}</td>);
            }
            row.push(<td key={"status" + i}><center><button id="editButton">Edit</button><button id="stateButton">Delete</button></center></td>)
            if (i % 2 === 0)
                table.push(<tr style={{ height: "3em", backgroundColor: "#343A40" }} key={i}>{row}</tr>);
            else
                table.push(<tr style={{ height: "3em", backgroundColor: "#3E444A" }} key={i}>{row}</tr>);
        })
        return table;
    }
    render() {
        return (
            <table id="darkStriped">
                <tbody>
                    {this.createTable()}
                </tbody>
            </table>
        )
    }
}

export default PrintTable;