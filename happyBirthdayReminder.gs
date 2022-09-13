function happyBirthdayReminder() {
	var birthdays = SpreadsheetApp.getActive()
		.getSheetByName('Sheet1')
		.getRange('birthdays')
		.getValues()

	var today = new Date()

	birthdays.forEach(function (date, index) {
		// Get date of birthday
		const date1 = new Date(date[0])
		// Get birthday person's name
		var name = SpreadsheetApp.getActive()
			.getSheetByName('Sheet1')
			.getRange(index + 2, 1)
			.getValue()

		// Calculate the time difference
		var Difference_In_Milliseconds = date1 - today

		// Calculate the number of days
		var Days = Math.ceil(Difference_In_Milliseconds / (1000 * 3600 * 24))

		// If their birthday is today send myself an email reminder
		if (Days == 0) {
			MailApp.sendEmail({
				to: 'email@gmail.com',
				subject: name + 'Birthday Reminder',
				body: 'Today is ' + name + "'s birthday"
			})
		}

		Logger.log(name + Days)
	})
}
