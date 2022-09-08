import dbConnect from "../dbConnect";
import Question from "../models/Question";

export async function getAllQuestions() {
  await dbConnect(); // Connect to database

  const questions = await Question.find(); 

  const questionsArray = questions.map(
    ({ id, question, answer, options }) => {
      return {id, question, answer, options };
    }
  );

  return questionsArray;
}

