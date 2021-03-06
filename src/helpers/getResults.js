
export const getResults = async (apiKey, category) => {
    const resp = await fetch(`https://api.unsplash.com/photos/random/?client_id=${apiKey}&query=${encodeURI(category)}&count=30`);

    if (resp.status === 404) return 404;

    const data = await resp.json();

    const pictures = data.map(img => {
        return {
            id: img.id,
            title: img.alt_description,
            url: img.urls.thumb
        }
    })
    return pictures;

}