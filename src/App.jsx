import MultistepForm from "./components/MultistepForm";
import FormBody from "./components/FormBody";

function App() {
  return (
    <>
      <MultistepForm steps={5} formBody={FormBody} />
    </>
  );
}

export default App;
