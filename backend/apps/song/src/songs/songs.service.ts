import { Song } from "@app/common";
import { Injectable, OnModuleInit } from "@nestjs/common";

@Injectable()
export class SongsService implements OnModuleInit {
  private readonly songs: Song[] = [];

  onModuleInit() {
    for (let i = 1; i <= 10; i++) {
      this.songs.push({
        id: i.toString(),
        title: `Song ${i}`,
      });
    }
  }

  getSongs() {
    return { song: this.songs };
  }
}
