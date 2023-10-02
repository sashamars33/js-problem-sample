# js-problem-sample

problem answer located in file 'test-problem.js' which includes the function along with some of the test cases that I will go over in my video.
video is linked here: 

problem prompt: 

Given a sentence with multiple lowercase words separated by spaces, write a Javascript function that finds and returns the longest word in the sentence. If there are multiple words of the same length, choose one that has the highest number of vowels. Ignore any character in the sentence that is not an English letter or a space. Find the most efficient way to achieve this.

sample: 
“Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers” (Socrates)
answer to sample: “experience”

Reasoning behind chosen test cases:

To start I would for null, undefined, and wrong type errors first. Then I would move to strings of numbers, followed by strings consisting on non-[a-z] characters and special characters/punctuation. Then strings that contain words with the same length but different amounts of vowels, then same parameters expect one without vowels, and then an instance where none of the same length string have vowels. The final test is random letters with both number and special characters. This function returns the 'word's' letters with the other characters filtered out and returns the longest.
