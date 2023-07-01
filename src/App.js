import Header from "./elements/Header/Header";
import PageBanner from "./elements/Pagebanner/Pagebanner";

function App() {
  return (
    <>
      <Header />
      <PageBanner title = "Nasza firma oferuje najwyższej jakości produkty" description = "Nie wierz nam na słowo - sprawdź" buttonText ="oferta"/>
    </>
  );
}

export default App;
