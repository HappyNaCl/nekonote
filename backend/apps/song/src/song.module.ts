import { Module } from "@nestjs/common";
import { SongController } from "./song.controller";
import { SongService } from "./song.service";
import { SongsModule } from "./songs/songs.module";

@Module({
  imports: [SongsModule],
  controllers: [SongController],
  providers: [SongService],
})
export class SongModule {}
