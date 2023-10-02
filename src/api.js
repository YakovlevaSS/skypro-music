// const token = {
//     "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTA0NjUzMSwiaWF0IjoxNjkwOTYwMTMxLCJqdGkiOiI2YTFhODg4Zjg5NjY0NjgyYTBmYWYyNjk4ZjZiNjViZSIsInVzZXJfaWQiOjc5Mn0.idHYiVKZqSxPCpNIvYpFgEs6nRTJ3FuPS60RAKV8XC8",
//     "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkwOTYwNDMxLCJpYXQiOjE2OTA5NjAxMzEsImp0aSI6ImE4NDAwZjRkNWUzMTQ4NGJiMzE4YzUzMjE3Y2NhNWZmIiwidXNlcl9pZCI6NzkyfQ.SfvLYWbz72DQqWK7SyF4Yx9Zxx8hGsNxHEcwOU0RTk4"
//   }
export async function getAllTracks() {
    const response = await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/');
    const tracks = await response.json();
    if (!response.ok) {
        throw new Error('Ошибка сервера');
    }
    return tracks;
}

export async function getTracksByID(trackId) {
    const response = await fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${trackId}`);
    const track = await response.json();
    if (!response.ok) {
        throw new Error('Ошибка сервера');
    }
    return track;
}