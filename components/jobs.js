var CronJob = require('cron').CronJob;

function scheduleJobs() {
	new CronJob('00,10,20,30,40,50 * * * * *', function(){
		console.log('You will see this message every second ' + new Date());
	}, null, true, null);
}
