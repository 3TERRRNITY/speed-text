import Refresh from "./components/Refresh";
import Result from "./components/Result";
import { UserTyping } from "./components/UserTyping";
import useEngine from "./hooks/useEngine";
import { calculateAccuracyPercentage } from "./utils/helpers";

const App = () => {
  const { state, words, timeLeft, typed, errors, totalTyped, restart } =
    useEngine();
  console.log(state);
  return (
    <>
      <TimeLefts leftTime={timeLeft} />
      <WordContainer>
        <GeneretedWords word={words} />
        <UserTyping words={words} userInput={typed} />
      </WordContainer>
      <Refresh onRestart={restart} />
      <Result
        state={state}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        Errors={errors}
        Total={totalTyped}
      />
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
