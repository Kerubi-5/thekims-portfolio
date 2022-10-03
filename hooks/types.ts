export interface WorkCollection {
  worksCollection: {
    items: Work[];
  };
}

export interface Work {
  title: string;
  link: string;
  screenshot: {
    url: string;
    description: string;
  };
}
