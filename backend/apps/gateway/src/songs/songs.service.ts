import {
  CreateSongRequest,
  SONG_SERVICE_NAME,
  SongServiceClient,
} from "@app/common";
import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { SONGS_SERVICE } from "./constants";
import { ClientGrpc } from "@nestjs/microservices";

@Injectable()
export class SongsService implements OnModuleInit {
  private songService: SongServiceClient;

  constructor(@Inject(SONGS_SERVICE) private client: ClientGrpc) {}

  onModuleInit() {
    this.songService =
      this.client.getService<SongServiceClient>(SONG_SERVICE_NAME);
  }

  findAllSongs() {
    return this.songService.findAllSongs({});
  }

  createSong(request: CreateSongRequest) {
    return this.songService.createSong(request);
  }
}
