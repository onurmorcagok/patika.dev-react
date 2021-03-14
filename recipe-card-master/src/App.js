import "./App.css";
import Card from "./components/Card/Card";
import food from "./assets/food.jpg"; // Tell webpack this JS file uses this image

function App() {
  const recipeAuthor = "OM";
  const recipeItem = {
    title: "Avokado Ezmeli Taco",
    date: "14 Mart 2021, Pazar",
    image: food,
    description:
      "Bu kremsi ve baharatlı avokado sosu, günlük taco'larınızı hazırlamak için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos ile servis edilir, ancak bazı vegan enchiladalara da harika bir katkı sağlar.",
  };

  const likeCount = 150;
  const isLiked = false;

  return (
    <div className="App">
      <header className="App-header">
        <Card
          author={recipeAuthor}
          foodTitle={recipeItem.title}
          dateTime={recipeItem.date}
          foodImage={recipeItem.image}
          foodDesc={recipeItem.description}
          likedCount={likeCount}
        />
      </header>
    </div>
  );
}

export default App;
