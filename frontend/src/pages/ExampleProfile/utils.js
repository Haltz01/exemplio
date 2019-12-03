
/**
 * 
 * @param {String} rawURL 
 */
export function normalizePodcastUrl(rawURL) {
    const FNF = 'https://exempl.io/invalidPodcastLink'; //force not found
    if (!rawURL) return FNF;

    console.log(rawURL);
    const podcastVersion = '8.9.0'; //Change if update is necessary

    let match = rawURL.match('(?:https://castbox.fm).+(?:player/id)([0-9]{7})(?:/id)([0-9]{9})');
    if (!match || match.length !== 3) return FNF;
    
    let profileID = match[1];
    let podcastID = match[2];

    let newURL = `https://castbox.fm/app/castbox/player/id${profileID}/id${podcastID}?v=${podcastVersion}&autoplay=0&hide_list=1`;
    return newURL;
}

export function convertDate(dbDate) {
    return new Date(dbDate).toLocaleDateString('pt-br');
}