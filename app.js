
const express = require('express')
const app = express();

const port = process.env.PORT || 3000;


app.get('/api', (req, res) => {
    const { slack_name, track } = req.query;

      // Get the current day of the week
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getUTCDay()];

  // Calculate the +/-2 minute time window
  const now = new Date();
  const minTime = new Date(now);
  minTime.setUTCMinutes(minTime.getUTCMinutes() - 2);
  const maxTime = new Date(now);
  maxTime.setUTCMinutes(maxTime.getUTCMinutes() + 2);

  // Check if the current time is within the allowed window
  if (now < minTime || now > maxTime) {
    return res.status(500).json({ error: 'Time validation failed' });
  }

  // Get the current UTC time in the specified format
  const formattedUtcTime = now.toISOString().slice(0, 19) + 'Z';
  
   
    const response = {
      slack_name,
      current_day: currentDay,
      utc_time: formattedUtcTime,
      track,
      github_file_url: 'https://github.com/ehuntober/hngx.zuriboard/blob/master/app.js',
      github_repo_url: 'https://github.com/ehuntober/hngx.zuriboard',
      status_code: 200,
    };
  
    res.json(response);
  });
  

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

