export const youtubeInfoAPI = async (videoId: string) => {
  const key = process.env.NEXT_PUBLIC_YOUTUBE_KEY;
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=${videoId}&key=${key}`
  );

  if (response && response.status === 200) {
    const { items } = await response.json();
    return items[0] || null;
  }
  return null;
};
