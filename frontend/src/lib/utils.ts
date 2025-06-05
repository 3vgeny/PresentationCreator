export const timeAgo = (timestamp: Date) => {
  const now = new Date();
  const deffInSeconds = Math.round((now.getTime() - new Date(timestamp).getTime()) / 1000);

  const interval = [
    { label: 'year', value: 60 * 60 * 24 * 365 },
    { label: 'month', value: 60 * 60 * 24 * 30 },
    { label: 'day', value: 60 * 60 * 24 },
    { label: 'hour', value: 60 * 60 },
    { label: 'minute', value: 60 },
    { label: 'second', value: 1 },
  ];

  for (let i = 0; i < interval.length; i++) {
    const block = interval[i];
    const count = Math.floor(deffInSeconds / block.value);
    if (count >=1) {
      return `${count} ${block.label} ago`;
    }
  }
  return 'just now';
};