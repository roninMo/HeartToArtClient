export interface CreateSong {
    artistName: string;
    albumName: string;
    albumImage: string;
    songName: string;
    lyrics: string;
    songId?: string;
    albumId?: string;
    artistId?: string;
}