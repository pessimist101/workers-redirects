async function handleRequest(request) {
    const requestURL = new URL(request.url)
    const path = request.url.split('.dev')[1]
    if (path.split('/')[1] === 'gist') and (path.split('/').length === 3) {
        const location = ['https://gist.github.com/pessimist101/',links[path.split('/')[2]]]
        return Response.redirect(location, 301)
    } else {
        const location = ['https://github.com/pessimist101', path].join('')
        return Response.redirect(location, 301)
    }
}
addEventListener('fetch', async event => {
    event.respondWith(handleRequest(event.request))
})

links = 