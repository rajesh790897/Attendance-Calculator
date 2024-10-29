   function calculateAttendance() {
        const requiredAttendance = document.getElementById('requiredAttendance').value;
        const totalClasses = parseInt(document.getElementById('totalClasses').value);
        const attendedClasses = parseInt(document.getElementById('attendedClasses').value);

        if (isNaN(totalClasses) || isNaN(attendedClasses) || totalClasses <= 0 || attendedClasses < 0) {
            document.getElementById('result').textContent = "Please enter valid numbers.";
            return;
        }

        // Calculate current attendance percentage
        const currentAttendance = ((attendedClasses / totalClasses) * 100).toFixed(2);
        const requiredClasses = Math.ceil((requiredAttendance / 100) * totalClasses);

        // Display the current attendance percentage
        let resultMessage = `Your current attendance is ${currentAttendance}%. `;

        // Check if the student can bunk classes or needs more attendance
        if (currentAttendance >= requiredAttendance) {
            const extraClasses = attendedClasses - requiredClasses;
            resultMessage += `You have enough attendance! You can bunk ${extraClasses} more class(es).`;
        } else {
            const neededClasses = requiredClasses - attendedClasses;
            resultMessage += `You need to attend ${neededClasses} more class(es) to reach ${requiredAttendance}% attendance.`;
        }

        // Display the result
        document.getElementById('result').textContent = resultMessage;
    }
