const getAllWorksQueries = `
    query {
        worksCollection(order: publishedDate_DESC) {
            items {
                title
                link
                excerpt
                screenshot {
                    url
                    description
                }
                tags
            }
        }
    }
`;

export default getAllWorksQueries;
