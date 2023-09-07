
const express = require('express')
const app = express();

const port = process.env.PORT || 3000;


app.get('/api', (req, res) => {
    const { slack_name, track } = req.query;

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getUTCDay()];
  

    const now = new Date();
    now.setMinutes(now.getMinutes() + Math.floor(Math.random() * 5) - 2);
    const utc_time = now.toISOString();
  
   
    const response = {
      slack_name,
      current_day: currentDay,
      utc_time,
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

