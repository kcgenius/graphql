
const videoA = {
    id: '1',
    title:'Fop',
    duration: 1,
    watched: false,
}


const videoB = {
    id: '2',
    title:'Fopsds',
    duration: 1,
    watched: false,
}

const videos = [videoA,videoB]


const getVideoById = (id) => new Promise((res) => {
    const [video] = videos.filter((video) => {
        return video.id === id;
    })

    res(video)
})

exports.getVideoById = getVideoById