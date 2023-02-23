import { faker } from "@faker-js/faker";
import Refresh from "./components/Refresh";
import Result from "./components/Result";
import { UserTyping } from "./components/UserTyping";
const words = faker.random.words(10);
const App = () => {
  return (
    <>
      <TimeLefts leftTime={30} />
      <WordContainer>
        <GeneretedWords word={words} />
        <UserTyping userInput={words} />
      </WordContainer>
      <Refresh classNames={""} onRestart={() => null} />
      <Result accuracyPercentage={100} Errors={10} Total={1000} />
    </>
  );
};

const GeneretedWords = ({ word }) => {
  return <div className="text-slate-400 ">{word}</div>;
};

const TimeLefts = ({ leftTime }) => {
  return <h2 className="text-primary font-medium">Time: {leftTime}</h2>;
};
const WordContainer = ({ children }) => {
  return (
    <div className="relative max-w-xl mt-3 text-4xl leading-relaxed break-all">
      {children}
    </div>
  );
};

export default App;
