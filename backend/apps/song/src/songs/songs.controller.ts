import { Controller } from "@nestjs/common";
import { SongsService } from "./songs.service";
import {
  GetSongsResponse,
  SongServiceController,
  SongServiceControllerMethods,
} from "@app/common";

@Controller()
@SongServiceControllerMethods()
export class SongsController implements SongServiceController {
  constructor(private readonly songsService: SongsService) {}

  getSongs(): GetSongsResponse {
    return this.songsService.getSongs();
  }
}
