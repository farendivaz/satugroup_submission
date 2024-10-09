export async function getNews() {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=esports&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data || !data.articles) {
      throw new Error("Invalid data structure received from API");
    }

    return data;
  } catch (error) {
    console.error("Failed to fetch news:", error);
    throw error;
  }
}
