'use client';

import React, { useState } from 'react';

const TutorAttendance = () => {
    const [attendanceData, setAttendanceData] = useState([
        { id: 1, name: 'Patrick G. Chinedo', status: '' },
        { id: 2, name: 'John B. De', status: '' },
        { id: 3, name: 'Cal D. Ro', status: '' },
        { id: 4, name: 'Roy H. Penalo', status: '' },
    ]);

    const handleAttendance = (id, status) => {
        setAttendanceData((prev) =>
            prev.map((student) =>
                student.id === id ? { ...student, status } : student
            )
        );
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <div style={styles.buttonContainer}>
                    <button style={styles.navButton}>Gradebook</button>
                    <button style={styles.navButton}>Attendance</button>
                </div>
                <input type="date" style={styles.dateInput} />
            </div>

            <div style={styles.card}>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.columnHeader}>Name</th>
                            <th style={styles.columnHeader}>Status</th>
                            <th style={styles.columnHeader}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendanceData.map((student) => (
                            <tr key={student.id}>
                                <td style={styles.centerText}>{student.name}</td>
                                <td style={styles.centerText}>{student.status || 'Not Marked'}</td>
                                <td style={styles.centerText}>
                                    <button
                                        style={{ ...styles.button, backgroundColor: 'green' }}
                                        onClick={() => handleAttendance(student.id, 'Present')}
                                    >
                                        Present
                                    </button>
                                    <button
                                        style={{ ...styles.button, backgroundColor: 'red' }}
                                        onClick={() => handleAttendance(student.id, 'Absent')}
                                    >
                                        Absent
                                    </button>
                                </td>
                            </tr>
                        ))}

                        {/* Row for Cancel and Save buttons */}
                        <tr>
                            <td colSpan={3} style={{
                                ...styles.actionRow,
                                transform: 'translateX(-50px)',
                                textAlign: 'center', // Make sure this is a valid alignment string
                                padding: '10px',
                                borderTop: '1px solid #ccc'
                            }}>
                                <button style={{ ...styles.button, backgroundColor: 'gray' }}>
                                    Cancel
                                </button>
                                <button style={{ ...styles.button, backgroundColor: 'teal' }}>
                                    Save
                                </button>
                            </td>
                        </tr>



                    </tbody>
                </table>
            </div>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        minHeight: '100vh',
        backgroundColor: '#f0f4f8',
        padding: '20px',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
    },
    buttonContainer: {
        display: 'flex',
        gap: '10px',
    },
    navButton: {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
    dateInput: {
        padding: '10px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    card: {
        backgroundColor: '#ffffff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        textAlign: 'center',
    },
    columnHeader: {
        padding: '10px',
        fontWeight: 'bold',
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid #dee2e6',
    },
    centerText: {
        padding: '10px',
        textAlign: 'center',
    },
    button: {
        color: 'white',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '0 5px',
    },
    actionRow: {
        textAlign: 'center',
        padding: '15px 0',
        borderTop: '1px solid #dee2e6',
    },
};

export default TutorAttendance;
