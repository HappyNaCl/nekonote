import { Body, Controller, Get, Post } from "@nestjs/common";
import { SongsService } from "./songs.service";
import { CreateSongRequest } from "@app/common";

@Controller("songs")
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Get()
  findAllSongs() {
    return this.songsService.findAllSongs();
  }

  @Post()
  createSong(@Body() request: CreateSongRequest) {
    return this.songsService.createSong(request);
  }
}
