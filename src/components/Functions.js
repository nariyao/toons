async function FetchToonData(toonType, page = 1, filter = "") {
  let response = {
    status: null,
    data: null,
    error: null,
  };
  const url = `https://api.jikan.moe/v4/${toonType}?page=${page}&${filter}`;
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (typeof data.status !== "undefined") {
        response.status = false;
        response.error = data;
        return response;
      }
      response.status = true;
      response.data = data;
    })
    .catch((error) => {
      response.status = false;
      response.error = error;
    });
  return response;
}

function Sleep(millisecond) {
  return new Promise((resolve) => setTimeout(resolve, millisecond));
}
export { FetchToonData, Sleep };
