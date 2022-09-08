import { getAllQuestions} from "../services/questionServices"; 
import QuestionCard from "../src/QuestionCard";

export async function getServerSideProps() {
  const questions = await getAllQuestions(); 

  return {
    props: {questions: questions,
    },
  };
}

export default function IndexPage({questions}) {
  return (
    <main>
      <h1>All questions</h1>
      <ul>
        {
          questions.map(({question, answer, options, id}) => {
            return(
          
          <QuestionCard
          key={id}
          question={question}
          options={options}
          answer={answer}/>
          )
        })
        }
      </ul>
    </main>
  );
}
