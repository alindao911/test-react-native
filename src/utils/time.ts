export const convertUnixTimestampToTimeAgo = (unixTimestamp: number) => {
  const currentDate = new Date(); // Get the current date and time
  const timestampDate = new Date(unixTimestamp * 1000); // Convert the Unix timestamp to milliseconds

  const timeDifferenceInSeconds = Math.floor(
    (currentDate.valueOf() - timestampDate.valueOf()) / 1000,
  );

  if (timeDifferenceInSeconds < 60) {
    return `${timeDifferenceInSeconds} seconds ago`;
  } else if (timeDifferenceInSeconds < 3600) {
    const minutes = Math.floor(timeDifferenceInSeconds / 60);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else if (timeDifferenceInSeconds < 86400) {
    const hours = Math.floor(timeDifferenceInSeconds / 3600);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else {
    const days = Math.floor(timeDifferenceInSeconds / 86400);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }
};
