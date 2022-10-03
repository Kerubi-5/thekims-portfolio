const getAllWorksQueries = `
    query {
        worksCollection {
            items {
            title
            link
            screenshot {
                url
                description
            }
            }
        }
    }
`;

export default getAllWorksQueries;
