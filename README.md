# Hot Set Styled Question Asker
This program runs a local web app where you can input a csv and and have it display a question with 4 multiple choice answers, and then display a selected answer, and a correct answer.
## To Run
You need to have node js installed https://nodejs.org/en/download/ <br>
Navigate to the hot_set_question_asker folder and run the command **npm install** <br>
Once packages are installed, run the command **npm run start** to begin

## CSV Setup
The CSV you use is expected to be in a particular format. It must contain a header row with the following information:
- Question - The question being asked
- A - What answer A will display as an option
- B - What answer B will display as an option
- C - What answer C will display as an option
- D - What answer D will display as an option
- Answer - What the correct answer is, must be "A", "B", "C" or "D"
<br><br>All information is read as strings. See "example.csv" if you need an example format.