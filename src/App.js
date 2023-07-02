import Aboutus from "./elements/Aboutus/Aboutus";
import Header from "./elements/Header/Header";
import PageBanner from "./elements/Pagebanner/Pagebanner";

function App() {
  const pageTitle = "Nasza firma oferuje najwyższej jakości produkty";
  const description = "Nie wierz nam na słowo - sprawdź";
  return (
    <>
      <Header />
      <PageBanner
        title={pageTitle}
        description={description}
        buttonText="oferta"
      />
      <Aboutus />
    </>
  );
}

export default App;
