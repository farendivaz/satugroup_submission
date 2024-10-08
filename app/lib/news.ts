export async function getNews() {
  const response = await fetch(
    "https://newsapi.org/v2/everything?q=esports&apiKey=4fda8d4b96364030ab9f4a884ef61914",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.json();
}
