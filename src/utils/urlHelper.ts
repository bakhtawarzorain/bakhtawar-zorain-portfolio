export const getSafeFiverrUrl = (url?: string): string => {
  if (!url || url === 'FIVERR_LINK_HERE' || url.trim() === '') {
    return 'https://www.fiverr.com';
  }
  return url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`;
};

export const getSafeLinkedInUrl = (url?: string): string => {
  if (!url || url === 'LINKEDIN_LINK_HERE' || url.trim() === '') {
    return 'https://www.linkedin.com';
  }
  return url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`;
};

export const getSafeEmailHref = (email?: string): string => {
  if (!email || email === 'EMAIL_HERE' || email.trim() === '') {
    return 'mailto:bakhtawarzorainzaheer@gmail.com';
  }
  return `mailto:${email}`;
};
