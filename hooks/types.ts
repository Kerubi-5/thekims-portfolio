export interface WorkCollection {
  worksCollection: {
    items: Work[];
  };
}

export interface Work {
  title: string;
  link: string;
  excerpt: string;
  screenshot: {
    url: string;
    description: string;
  };
  tags: [string];
}
