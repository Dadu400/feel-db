import axios from "axios";

export async function fetchMainPageData() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}mainpage`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export async function fetchCollection(page: number = 1) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}collections?page=${page}`
    );
    
    // Try to fetch the next page to see if it exists
    const nextPageCheck = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}collections?page=${page + 1}`
    );
    
    return {
      ...response.data,
      hasNextPage: nextPageCheck.data.data.length > 0
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export async function fetchDayTop() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}daytop`
    );
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export async function fetchSingleMedia(id: string) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}collections/${id}`
    );
    return response.data.collection;
  } catch (error) {
    console.error("Error fetching single media:", error);
    return null;
  }
}
