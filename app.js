
const express = require('express')
const app = express();

const port = process.env.PORT || 3000;


app.get('/api', (req, res) => {
    const { slack_name, track } = req.query;

 const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 const currentDate = new Date();
 const currentDay = daysOfWeek[currentDate.getUTCDay()];


 const now = new Date();
 const formattedUtcTime = now.toISOString().slice(0, 19) + 'Z';

 const response = {
   slack_name,
   current_day: currentDay,
   utc_time: formattedUtcTime,
   track,
   github_file_url: 'https://github.com/username/repo/blob/main/file_name.ext',
   github_repo_url: 'https://github.com/username/repo',
   status_code: 200,
 };

 res.json(response);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});