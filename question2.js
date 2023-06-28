SELECT c.customerId, c.name, GROUP_CONCAT(s.subjectName ORDER BY s.subjectName) AS subjects
FROM customers AS c
JOIN subject_student_mapping AS m ON c.customerId = m.customerId
JOIN subjects AS s ON m.subjectId = s.subjectId
GROUP BY c.customerId, c.name
ORDER BY c.customerId;
