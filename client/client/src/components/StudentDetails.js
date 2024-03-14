import React from 'react';
import sampleData from '../sampleData';

const StudentDetails = () => {
  return (
    <div>
      <h2>Student Details</h2>
      {sampleData.students.map(student => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>Roll Number: {student.rollNumber}</p>
          <h4>Fees:</h4>
          <ul>
            {student.fees.map(fee => (
              <li key={fee.id}>
                {fee.month}: ${fee.amount} - {fee.status}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default StudentDetails;
