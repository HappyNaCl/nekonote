import { Controller } from "@nestjs/common";
import { SongsService } from "./songs.service";
import {
  CreateSongRequest,
  CreateSongResponse,
  FindAllSongsResponse,
  SongServiceController,
  SongServiceControllerMethods,
} from "@app/common";

@Controller()
@SongServiceControllerMethods()
export class SongsController implements SongServiceController {
  constructor(private readonly songsService: SongsService) {}

  async findAllSongs(): Promise<FindAllSongsResponse> {
    const songs = await this.songsService.findAllSongs();
    return { songs };
  }

  async createSong(request: CreateSongRequest): Promise<CreateSongResponse> {
    const createdSong = await this.songsService.createSong({ ...request });
    return { ...createdSong };
  }
}
